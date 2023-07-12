import {TextFieldsWithButtons} from "./patterns/TextFieldsWithButtons";
import {useMemo} from "react";
import {InputProps} from "./components/Input/Input";
import {ButtonProps} from "./components/button/Button";
import {HelloWorldTextFieldState} from "./store/HelloWorldTextFieldState";
import {createTextInput} from "./store/TextInput";
import {observer} from "mobx-react-lite";

const HelloWorldTextField = observer(() => {
    const helloWorldTextField = useMemo(() => new HelloWorldTextFieldState(createTextInput()),[])

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