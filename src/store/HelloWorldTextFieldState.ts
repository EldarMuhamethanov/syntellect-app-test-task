import {TextInput} from "./TextInput";
import {makeAutoObservable} from "mobx";


class HelloWorldTextFieldState {
    textInput: TextInput

    constructor(textInput: TextInput) {
        makeAutoObservable(this)
        this.textInput = textInput
    }

    clearInput() {
        this.textInput.setInputValue('')
    }

    setHelloWorld() {
        this.textInput.setInputValue('Hello World')
    }
}

export {
    HelloWorldTextFieldState,
}