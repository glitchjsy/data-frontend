import React from "react";
import styles from "./styles.module.css";

export default function EatSafePopup({ location }) {
    return (
        <div className={styles.popup}>
            <p className={styles.popupName}>{location.name}</p>
        </div>
    )
}