import {makeAutoObservable, runInAction} from "mobx";
import {CountryInfo, getCountryByName} from "../api/apiService";
import {TextInput} from "./TextInput";

class CountryAutoCompleteState {
    autoCompleteCountries: CountryInfo[] = []
    isLoading: boolean = false
    textInput: TextInput

    private readonly  maxHintsCount: number | undefined

    private cachedRequests: Map<string, CountryInfo[]> = new Map()

    constructor(textInput: TextInput, maxHintsCount: number | undefined) {
        makeAutoObservable(this)
        this.textInput = textInput
        this.maxHintsCount = maxHintsCount
    }

    setInputValue(value: string) {
        this.textInput.setInputValue(value)
        this.fetchCountries()
    }

    fetchCountries() {
        const value = this.textInput.value
        const cachedResult = this.cachedRequests.get(value)
        if (cachedResult) {
            this.autoCompleteCountries = this.maxHintsCount ? cachedResult.slice(0, this.maxHintsCount) : cachedResult
            return
        }

        this.isLoading = true
        getCountryByName(value)
            .then(result => {
                const withoutDuplicates = this.removeDuplicatesCountries(result)
                this.cachedRequests.set(value, withoutDuplicates)

                runInAction(() => {
                    this.autoCompleteCountries = this.maxHintsCount ? withoutDuplicates.slice(0, this.maxHintsCount) : result
                    this.isLoading = false
                })
            })
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