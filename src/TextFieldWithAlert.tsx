import React, {useMemo} from 'react';
import {InputProps} from "./components/Input/Input";
import {ButtonProps} from "./components/button/Button";
import {TextFieldsWithButtons} from "./patterns/TextFieldsWithButtons";
import {createTextInput} from "./store/TextInput";
import {TextFieldWithAlertModel} from "./store/TextFieldWithAlertModel";
import {observer} from "mobx-react-lite";

const TextFieldWithAlert = observer(() => {
    const textFieldWithAlert = useMemo(() => new TextFieldWithAlertModel(createTextInput()), [])

    const inputProps: InputProps = {
        value: textFieldWithAlert.textInput.value,
        onInput: value => textFieldWithAlert.textInput.setInputValue(value),
    }

    const leftButtons: ButtonProps[] = [
        {
            text: 'Alert Number!!!',
            onClick: () => textFieldWithAlert.alertWithNumberValue(),
        },
    ]

    const rightButtons: ButtonProps[] = [
        {
            text: 'Alert!!!',
            onClick: () => textFieldWithAlert.alertWithInputValue(),
        },
    ]

    return <TextFieldsWithButtons
        input={inputProps}
        leftButtons={leftButtons}
        rightButtons={rightButtons}
    />
})

export {
    TextFieldWithAlert,
};