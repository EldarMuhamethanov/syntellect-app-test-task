import {TextFieldsWithButtons} from "./patterns/TextFieldsWithButtons";
import {useMemo} from "react";
import {InputProps} from "./components/Input/Input";
import {ButtonProps} from "./components/button/Button";
import {HelloWorldTextFieldModel} from "./store/HelloWorldTextFieldModel";
import {createTextInput} from "./store/TextInput";
import {observer} from "mobx-react-lite";

const HelloWorldTextField = observer(() => {
    const helloWorldTextField = useMemo(() => new HelloWorldTextFieldModel(createTextInput()),[])

    const inputProps: InputProps = {
        value: helloWorldTextField.textInput.value,
        onInput: value => helloWorldTextField.textInput.setInputValue(value),
    }

    const rightButtons: ButtonProps[] = [
        {
            text: 'Clear',
            onClick: () => helloWorldTextField.clearInput(),
        },
        {
            text: 'Hello World',
            onClick: () => helloWorldTextField.setHelloWorld()
        }
    ]

    return <TextFieldsWithButtons
        input={inputProps}
        leftButtons={[]}
        rightButtons={rightButtons}
    />
})

export {
    HelloWorldTextField,
}