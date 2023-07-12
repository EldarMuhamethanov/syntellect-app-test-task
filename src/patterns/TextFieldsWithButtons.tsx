import {Button, ButtonProps } from '../components/button/Button'
import styles from './TextFieldsWithButtons.module.css'
import {Input, InputProps} from "../components/Input/Input";

type TextFieldsWithButtonsProps = {
    input: InputProps,
    leftButtons: ButtonProps[],
    rightButtons: ButtonProps[],
}

const TextFieldsWithButtons = ({
    rightButtons,
    leftButtons,
    input,
}: TextFieldsWithButtonsProps) => {

    return (
        <div className={styles.container}>
            {leftButtons.map((buttonProps, index) => <Button key={index} text={buttonProps.text} onClick={buttonProps.onClick}/>)}
            {<Input value={input.value} onInput={input.onInput} />}
            {rightButtons.map((buttonProps, index) => <Button key={index} text={buttonProps.text} onClick={buttonProps.onClick}/>)}
        </div>
    )
}

export {
    TextFieldsWithButtons,
}

export type {
    TextFieldsWithButtonsProps,
}