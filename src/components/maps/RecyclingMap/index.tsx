import React from "react";
import Map from "../Map";
import locations from "./test.json";
import RecyclingMarker from "../../markers/RecyclingMarker";
import RecyclingPopup from "../../popups/RecyclingPopup";

export default function RecyclingMap(): JSX.Element {
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