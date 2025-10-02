import React from "react";
import styles from "./styles.module.css";

export default function DefibPopup({ location }) {
    return (
        <div className={styles.popup}>
            <p className={styles.address}>{location.address}</p>
            <p className={styles.streetName}><strong>Street Name:</strong> {location.streetName}</p>
            <p className={styles.parish}><strong>Parish:</strong> {location.parish}</p>
            <p className={styles.padNumberTitle}>Pad Number:</p>
            <p className={styles.padNumber}>{location.padNumber}</p>

            {location.notes && <p className={styles.notes}><strong>Notes:</strong> {location.notes}</p>}
        </div>
    )
}