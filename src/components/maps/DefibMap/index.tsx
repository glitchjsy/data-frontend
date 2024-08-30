import React from "react";
import Map from "../Map";
import locations from "./test.json";
import DefibMarker from "../../markers/DefibMarker";
import DefibPopup from "../../popups/DefibPopup";

export default function DefibMap(): JSX.Element {
    return (
        <Map
            initialViewport={{
                width: "100%",
                height: "400px",
                latitude: 49.214198,
                longitude: -2.132497,
                zoom: 11
            }}
            locations={locations.filter(loc => typeof loc.latitude === "number") as any[]}
            marker={(location) => <DefibMarker location={location} />}
            markerProps={{
                style: {
                    border: "1px solid black",
                    height: 22,
                    width: 20
                }
            }}
            popup={(location) => <DefibPopup location={location} />}
        />
    )
}