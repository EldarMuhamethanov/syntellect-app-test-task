import styles from './InputWithDropdown.module.css'
import React from 'react';
import {InputProps} from "./Input";

type InputWithDropdown = {
    input: InputProps,

}

const InputWithDropdown = () => {
    return (
        <div className={styles.inputWrapper}>

        </div>
    );
};

export {
    InputWithDropdown,
};