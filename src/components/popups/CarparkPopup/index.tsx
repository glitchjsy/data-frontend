import React from "react";
import styles from "./styles.module.css";
import { FaChildren, FaSquareParking, FaWheelchairMove } from "react-icons/fa6";
import { FaChargingStation } from "react-icons/fa";

export default function CarparkPopup({ location }) {
    const formatType = () => {
        switch (location.type) {
            case "LONG_STAY": return "Long Stay";
            case "SHORT_STAY": return "Short Stay";
            case "UNKNOWN": return "Unknown";
        }
        return location.type;
    }

    const formatSurfaceType = () => {
        switch (location.surfaceType) {
            case "TARMAC": return "Tarmac";
            case "CONCRETE": return "Concrete";
            case "GRAVEL": return "Gravel";
        }
        return location.surfaceType;
    }

    return (
        <div className={styles.popup}>
            <p className={styles.name}>{location.name}</p>
            <p className={styles.p}><strong>Type:</strong> {formatType()}</p>
            <p className={styles.p}><strong>Surface:</strong> {formatSurfaceType()}</p>
            {location.payByPhoneCode && <p className={styles.p}><strong>PayByPhone Code:</strong> {location.payByPhoneCode}</p>}

            <div className={styles.spacesDivider} />

            <p className={styles.p}><FaSquareParking /> <strong>Spaces:</strong> {location.spaces}</p>
            <p className={styles.p}><FaWheelchairMove /> <strong>Disabled Spaces:</strong> {location.disabledSpaces}</p>
            <p className={styles.p}><FaChildren /> <strong>Parent/Child Spaces:</strong> {location.parentChildSpaces}</p>
            <p className={styles.p}><FaChargingStation /> <strong>EV Spaces:</strong> {location.electricChargingSpaces}</p>

            <div className={styles.spacesDivider} />

            <p className={styles.p}><strong>Multi Storey:</strong> {location.multiStorey ? "Yes" : "No"}</p>
            <p className={styles.p}><strong>Live Tracking Available:</strong> {location.liveTrackingCode ? "Yes" : "No"}</p>

            <p className={styles.owner}>Owned by {location.owner?.name}</p>
        </div>
    )
}