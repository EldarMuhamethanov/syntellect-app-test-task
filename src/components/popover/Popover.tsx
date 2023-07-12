import React from 'react';
import { joinClassNames } from '../../core/joinClassNames';
import styles from './Popover.module.css'

type PopoverProps = {
    content: JSX.Element,
    className?: string,
}

const Popover = ({
    className,
    content,
}: PopoverProps) => {
    return (
        <div className={joinClassNames(styles.popover, className)}>
            {content}
        </div>
    );
};

export {
    Popover
};