import React from "react";
import styles from "./styles.module.css";

export default function ToiletPopup({ location }) {
    const notApplicable = <span style={{ color: "red" }}>N/A</span>

    return (
        <div className={styles.popup}>
            <p className={styles.popupName}>{location.name}</p>
            <p className={styles.popupParish}>{location.parish}</p>

            <div className={styles.facilitiesWrapper}>
                {location.facilities.map(item => <p className={styles.facility}>{item}</p>)}
            </div>

            <div className={styles.toiletGrid}>
                <div className={styles.maleToilet}>
                    <strong>Male</strong>

                    {location.male ? (
                        <>
                            <p className={styles.toiletItem}>Cubicles: {location.male.cubicles ?? notApplicable}</p>
                            <p className={styles.toiletItem}>Urinals: {location.male.urinales ?? notApplicable}</p>
                            <p className={styles.toiletItem}>Hand Dryers: {location.male.handDryers ?? notApplicable}</p>
                            <p className={styles.toiletItem}>Sinks: {location.male.sinks ?? notApplicable}</p>
                        </>
                    ) : (
                        <p>No male toilets</p>
                    )}
                </div>
                <div className={styles.femaleToilet}>
                    <strong>Female</strong>

                    {location.female ? (
                        <>
                            <p className={styles.toiletItem}>Cubicles: {location.female.cubicles ?? notApplicable}</p>
                            <p className={styles.toiletItem}>Hand Dryers: {location.female.handDryers ?? notApplicable}</p>
                            <p className={styles.toiletItem}>Sinks: {location.female.sinks ?? notApplicable}</p>
                        </>
                    ) : (
                        <p>No female toilets</p>
                    )}
                </div>

                {location.owner && <p className={styles.ownedBy}>Owned by {location.owner.name}</p>}
            </div>
        </div>
    )
}