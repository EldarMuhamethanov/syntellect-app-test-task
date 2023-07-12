import styles from './Prealoder.module.css'
import {BxLoaderAltIcon} from "./BxLoaderAltIcon";

function PreloaderIcon() {
    return <BxLoaderAltIcon className={styles.spinner} />
}

function Preloader() {
    return (
        <div className={styles.spinnerContainer}>
            <PreloaderIcon />
        </div>
    );
}

export {
    Preloader,
    PreloaderIcon,
}