import React from "react";
import styles from "./styles.module.css";

export default function CarparkPopup({ location }) {
    const formatType = () => {
        switch (location.type) {
            case "LONG_STAY": return "Long Stay";
            case "SHORT_STAY": return "Short Stay";
            case "UNKNOWN": return "Unknown";
        }
        return location.type;
    }
    return (
        <div className={styles.popup}>
            <p className={styles.popupName}>{location.name}</p>
            <p className={styles.popupType}>{formatType()}</p>

            <ul className={styles.popupList}>
                <li><strong>Surface: </strong>{location.surfaceType}</li>
                <li><strong>Spaces:</strong> {location.spaces}</li>
                <li><strong>Disabled Spaces:</strong> {location.disabledSpaces}</li>
                <li><strong>Parent/Child Spaces:</strong> {location.parentChildSpaces}</li>
                <li><strong>Electric Charging Spaces:</strong> {location.electricChargingSpaces}</li>
            </ul>
        </div>
    )
}