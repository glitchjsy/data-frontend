import React, { useState } from "react";
import Map from "../Map";
import styles from "./styles.module.css";
import locations from "./test.json";

export default function EatSafeMap(): JSX.Element {
    const [markers, setMarkers] = useState([]);

    function EatSafeMarker({ location }: any) {
        return (
            <>
                <img src={`/img/eatsafe-${location.rating}.png`} height="20" width="20" style={{ backgroundColor: "white", borderRadius: "50%" }} />
            </>
        )
    }

    function EatSafePopup({ location }: any) {
        return (
            <div className={styles.popup}>
                <p className={styles.popupName}>{location.name}</p>

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
            marker={(location) => <EatSafeMarker location={location} />}
            popup={(location) => <EatSafePopup location={location} />}
        />
    )
}