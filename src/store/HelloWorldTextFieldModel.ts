import {TextInput} from "./TextInput";
import {makeAutoObservable} from "mobx";


class HelloWorldTextFieldModel {
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
    HelloWorldTextFieldModel,
}