import React from "react";
import Map from "../Map";
import styles from "./styles.module.css";
import locations from "./test.json";

export default function RecyclingMap(): JSX.Element {
    function RecyclingMarker({ location }: any) {
        return (
            <>
                <img src="/img/recycling.png" height="20" width="20" />
            </>
        )
    }

    function RecyclingPopup({ location }: any) {
        return (
            <div className={styles.popup}>
                <p className={styles.popupName}>{location.location}</p>
              
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
            marker={(location) => <RecyclingMarker location={location} />}
            markerProps={{
                style: {
                    border: "1px solid black",
                    height: 22,
                    width: 20
                }
            }}
            popup={(location) => <RecyclingPopup location={location} />}
        />
    )
}