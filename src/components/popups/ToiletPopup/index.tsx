import React from "react";
import styles from "./styles.module.css";

export default function ToiletPopup({ location }) {
    const notApplicable = <span style={{ color: "red" }}>N/A</span>

    const formatFacility = (facility: string) => {
        switch (facility) {
            case "BEACH_SHOWER": return "Beach Showers";
            case "DISABLED": return "Disabled Toilets";
            case "BABY_CHANGING": return "Baby Changing Station";
            case "GENDER_NEUTRAL": return "Gender Neutral Toilets";
        }
        return facility;
    }

    return (
        <div className={styles.popup}>
            <p className={styles.popupName}>{location.name}</p>
            <p className={styles.popupParish}><strong>Parish:</strong> {location.parish}</p>

            <div className={styles.divider} />

            <p className={styles.facilitiesTitle}>Facilities available:</p>
            {location.facilities.length > 0 ? (
                <ul className={styles.facilitiesWrapper}>
                    {location.facilities.map(item => <li className={styles.facility}>{formatFacility(item)}</li>)}
                </ul>
            ) : <p className={styles.noFacilities}>(none)</p>}
{/* 
            <div className={styles.divider} />

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
            </div> */}
            {location.owner && <p className={styles.ownedBy}>Owned by {location.owner.name}</p>}
        </div>
    )
}