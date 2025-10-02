import React from "react";
import styles from "./styles.module.css";

export default function BusStopPopup({ location }) {
    return (
        <div className={styles.popup}>
            <p className={styles.name}>{location.name}</p>
            {location.shelter ? <p className={styles.shelterAvailable}>Shelter available</p> : <p className={styles.shelterUnavailable}>Shelter not available</p>}
        </div>
    )
}