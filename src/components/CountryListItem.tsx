import React from 'react';
import styles from './CountryListItem.module.css'

type CountryListItemProps = {
    id: string,
    name: string,
    fullName: string,
    flagSrc: string,
    onClick: () => void,
}

const CountryListItem = ({
    id,
    name,
    fullName,
    flagSrc,
    onClick,
}: CountryListItemProps) => {
    return (
        <div key={id} className={styles.itemContainer} onMouseDown={onClick}>
            <img src={flagSrc} alt={`${name} flag`} className={styles.flag} />
            <div className={styles.nameWrapper}>
                <span className={styles.name}><b>Название</b>: {name}</span>
                <span className={styles.name}><b>Полное название</b>: {fullName}</span>
            </div>
        </div>
    );
};

export {
    CountryListItem,
};