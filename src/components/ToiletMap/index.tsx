import React, { useEffect, useState } from "react";
import Map from "../Map";
import styles from "./styles.module.css";
import locations from "./test.json";

export default function ToiletMap(): JSX.Element {
    function ToiletMarker({ location }: any) {
        const [borderColor, setBorderColor] = useState("transparent");
        const [showBorder, setShowBorder] = useState(false);

        const borderStyles = { border: "2px solid", borderColor, height: "25px" };

        useEffect(() => {
            if (location.owner?.id !== null) {
                setShowBorder(true);
                
                if (location.owner.id === "6060f60d-17a1-49c8-aa4a-c268721a806a") {
                    setBorderColor("red"); // Government of Jersey
                }
                if (location.owner.id === "62a13258-686c-456c-87f3-8a93ff735d35") {
                    setBorderColor("blue"); // Ports of Jersey
                }
                if (location.owner.id === "52c49647-20f2-49f0-b9b6-a9ba49a13d03") {
                    setBorderColor("orange"); // Andium Homes
                }
            }
        }, [location]);
        
        return (
            <div style={showBorder ? borderStyles : {}}>
                <img src="/img/toilet.png" height="20" width="20" />
            </div>
        )
    }

    function ToiletPopup({ location }: any) {
        const notApplicable = <span style={{ color: "red" }}>N/A</span>
        
        return (
            <div className={styles.popup}>
                <p className={styles.popupName}>{location.name}</p>
                <p className={styles.popupParish}>{location.parish} {location.buildDate && `| Built in ${location.buildDate}`}</p>

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

    return (
        <Map
            initialViewport={{
                width: "100%",
                height: "400px",
                latitude: 49.214198,
                longitude: -2.132497,
                zoom: 11
            }}
            locations={locations as any[]}
            marker={(location) => <ToiletMarker location={location} />}
            markerProps={{
                style: {
                    border: "1px solid black",
                    height: 22,
                    width: 20
                }
            }}
            popup={(location) => <ToiletPopup location={location} />}
        />
    )
}