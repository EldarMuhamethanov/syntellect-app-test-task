import React from 'react';
import styles from './SelectList.module.css'
import {Preloader} from "./preloader/Preloader";
import {joinClassNames} from "../core/joinClassNames";

type SelectListProps = {
    items: JSX.Element[],
    isLoading: boolean
}

const SelectList = ({
    items,
    isLoading,
}: SelectListProps) => {
    const className = joinClassNames(
        styles.list,
        isLoading && styles.loadingList,
    )

    return (
        <div className={className}>
            {
                isLoading
                    ? <Preloader />
                    : items
            }
        </div>
    );
};

export {
    SelectList,
};