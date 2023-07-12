import {makeAutoObservable} from "mobx";

class TextInput {
    value: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    setInputValue(value: string) {
        this.value = value
    }
}

function createTextInput(): TextInput {
    return new TextInput()
}

export {
    TextInput,
    createTextInput,
}