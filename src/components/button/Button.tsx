import styles from './Button.module.css'

type ButtonProps = {
    text: string,
    onClick: () => void,
}

const Button = ({
    onClick,
    text,
}: ButtonProps) => {

    return (
        <button onClick={onClick} className={styles.button}>{text}</button>
    )
}

export {
    Button
}

export type {
    ButtonProps,
}