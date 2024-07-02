import React from "react";
import Map from "../Map";
import styles from "./styles.module.css";
import locations from "./test.json";

export default function BusStopMap(): JSX.Element {
    function BusStopMarker({ location }: any) {
        return (
            <>
                <img src={location.shelter ? "/img/bus-stop-yellow.png" : "/img/bus-stop.png"} height="20" width="20" />
            </>
        )
    }

    function BusStopPopup({ location }: any) {
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
            marker={(location) => <BusStopMarker location={location} />}
            popup={(location) => <BusStopPopup location={location} />}
        />
    )
}