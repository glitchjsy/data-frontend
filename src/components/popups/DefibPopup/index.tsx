import React from "react";
import styles from "./styles.module.css";

export default function DefibPopup({ location }) {
    return (
        <div className={styles.popup}>
            <p className={styles.popupAddress}>{location.address}</p>
            <p className={styles.popupParish}>{location.parish}</p>
            <p className={styles.popupPadNumber}>{location.padNumber}</p>

            {location.notes && <p className={styles.popupNotes}>{location.notes}</p>}
        </div>
    )
}