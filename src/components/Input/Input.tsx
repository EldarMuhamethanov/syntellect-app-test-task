import React, { useRef } from 'react';
import styles from './Input.module.css'

type InputProps = {
    value: string,
    onInput: (value: string) => void,
    onFocus?: () => void,
    onBlur?: () => void
}

const Input = ({
    value,
    onInput,
    onFocus,
    onBlur,
}: InputProps) => {
    const ref = useRef<HTMLInputElement|null>(null)

    return (
        <input
            ref={ref}
            value={value}
            onInput={() => ref.current && onInput(ref.current.value)}
            className={styles.input}
            onFocus={() => onFocus && onFocus()}
            onBlur={() => onBlur && onBlur()}
        />
    );
};

export {
    Input,
}

export type {
    InputProps,
}