import {TextInput} from "./TextInput";
import {makeAutoObservable} from "mobx";

class TextFieldWithAlertModel {
    textInput: TextInput

    constructor(textInput: TextInput) {
        makeAutoObservable(this)
        this.textInput = textInput
    }

    alertWithInputValue() {
        alert(this.textInput.value)
    }

    alertWithNumberValue() {
        Number.isFinite(Number(this.textInput.value)) && alert(this.textInput.value)
    }
}

export {
    TextFieldWithAlertModel,
}