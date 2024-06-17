import React from "react";
import Map from "../Map";
import styles from "./styles.module.css";
import locations from "./test.json";

export default function CarparkMap(): JSX.Element {
    function CarparkMarker({ location }: any) {
        return (
            <>
                <img src="/img/carpark.png" height="20" width="20" />
            </>
        )
    }

    function CarparkPopup({ location }: any) {
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

    return (
        <Map
            initialViewport={{
                width: "100%",
                height: "400px",
                latitude: 49.214198,
                longitude: -2.132497,
                zoom: 11
            }}
            locations={locations.filter(loc => typeof loc.latitude === "string").map(loc => ({ ...loc, latitude: Number(loc.latitude), longitude: Number(loc.longitude) })) as any[]}
            marker={(location) => <CarparkMarker location={location} />}
            markerProps={{
                style: {
                    border: "1px solid black",
                    height: 22,
                    width: 20
                }
            }}
            popup={(location) => <CarparkPopup location={location} />}
        />
    )
}