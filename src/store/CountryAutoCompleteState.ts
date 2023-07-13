import {makeAutoObservable, runInAction} from "mobx";
import {CountryInfo, getCountryByName} from "../api/apiService";
import {TextInput} from "./TextInput";

class CountryAutoCompleteState {
    autoCompleteCountries: CountryInfo[] = []
    isLoading: boolean = false
    textInput: TextInput

    private promisesCache: Map<string, Promise<CountryInfo[]>> = new Map()

    private readonly  maxHintsCount: number | undefined

    private cachedResults: Map<string, CountryInfo[]> = new Map()

    private lastPromise: Promise<CountryInfo[]> | null = null

    constructor(textInput: TextInput, maxHintsCount: number | undefined) {
        makeAutoObservable(this)
        this.textInput = textInput
        this.maxHintsCount = maxHintsCount
    }

    setInputValue(value: string) {
        this.textInput.setInputValue(value)
        this.updateAutocompleteList()
    }

    private updateAutocompleteList() {
        const value = this.textInput.value
        if (!value) {
            this.lastPromise = null
            this.isLoading = false
            this.autoCompleteCountries = []
            return
        }

        const cachedResult = this.cachedResults.get(value)
        if (cachedResult) {
            this.isLoading = false
            this.lastPromise = null
            this.autoCompleteCountries = this.maxHintsCount ? cachedResult.slice(0, this.maxHintsCount) : cachedResult
            return
        }

        this.isLoading = true

        const promise = this.fetchCountries(value)

        promise
            .then((result) => {
                const withoutDuplicatesResult = this.removeDuplicatesCountries(result)
                this.cachedResults.set(value, withoutDuplicatesResult)

                if (promise === this.lastPromise) {
                    this.lastPromise = null
                    runInAction(() => {
                        this.autoCompleteCountries = this.maxHintsCount ? withoutDuplicatesResult.slice(0, this.maxHintsCount) : result
                        this.isLoading = false
                    })
                }
            })
    }


    private fetchCountries(value: string): Promise<CountryInfo[]> {
        const cachedPromise = this.promisesCache.get(value)
        if (cachedPromise) {
            this.lastPromise = cachedPromise
            return cachedPromise
        }
        try {
            const promise = getCountryByName(value)
            this.lastPromise = promise
            this.promisesCache.set(value, promise)
            return promise
        }
        finally {
            this.promisesCache.delete(value)
        }
    }

    private removeDuplicatesCountries(countries: CountryInfo[]): CountryInfo[] {
        const names = new Set()
        const result: CountryInfo[] = []
        countries.forEach(country => {
            if (!names.has(country.name)) {
                result.push(country)
                names.add(country.name)
            }
        })
        return result
    }
}

export default CountryAutoCompleteState