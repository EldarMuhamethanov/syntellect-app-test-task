import React, {useMemo} from 'react';
import {TextFieldWithPopover} from "./patterns/TextFieldWithPopover";
import {InputProps} from "./components/Input/Input";
import {CountryInfo} from "./api/apiService";
import {SelectList} from "./components/SelectList";
import {CountryListItem} from "./components/CountryListItem";
import {observer} from "mobx-react-lite";
import CountryAutoCompleteState from "./store/CountryAutoCompleteState";
import {createTextInput} from "./store/TextInput";

type CountriesInputProps = {
    maxHintsCount?: number,
}

function getPopoverContent(
    isLoading: boolean,
    autoCompleteCountries: CountryInfo[],
    onCountryClick: (fullName: string) => void
): JSX.Element | null {
    return isLoading || autoCompleteCountries.length > 0
        ? <SelectList
            items={autoCompleteCountries.map(country => {
                const id = `${country.name}_${country.fullName}`
                return <CountryListItem
                    key={id}
                    id={id}
                    name={country.name}
                    fullName={country.fullName}
                    flagSrc={country.flag}
                    onClick={() => onCountryClick(country.fullName)}
                />
            })}
            isLoading={isLoading}
        />
        : null
}

const CountryAutoComplete = observer(({
    maxHintsCount,
}: CountriesInputProps) => {
    const countryAutoComplete = useMemo(() => new CountryAutoCompleteState(createTextInput(), maxHintsCount), [maxHintsCount])

    const inputProps: InputProps = {
        value: countryAutoComplete.textInput.value,
        onInput: (value) => countryAutoComplete.setInputValue(value),
    }

    const onCountryClick = (fullName: string) => countryAutoComplete.setInputValue(fullName)

    return <TextFieldWithPopover
        input={inputProps}
        popoverContent={getPopoverContent(
            countryAutoComplete.isLoading,
            countryAutoComplete.autoCompleteCountries,
            onCountryClick
        )}
    />
})

export {
    CountryAutoComplete,
};