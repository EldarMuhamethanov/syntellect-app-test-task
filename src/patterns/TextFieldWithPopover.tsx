import React, {useState} from 'react';
import {Input, InputProps} from "../components/Input/Input";
import styles from './TextFieldWithPopover.module.css'
import {Popover} from "../components/popover/Popover";

type TextFieldWithPopoverProps = {
    input: InputProps,
    popoverContent: JSX.Element | null,
}

const TextFieldWithPopover = ({
    popoverContent,
    input,
}: TextFieldWithPopoverProps) => {
    const [inputFocused, setInputFocused] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Input
                value={input.value}
                onInput={input.onInput}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
            />
            {inputFocused && popoverContent && <Popover content={popoverContent} className={styles.popover} />}
        </div>
    );
};

export {
    TextFieldWithPopover,
};