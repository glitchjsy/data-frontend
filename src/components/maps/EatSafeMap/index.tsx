import React from "react";
import EatSafeMarker from "../../markers/EatSafeMarker";
import EatSafePopup from "../../popups/EatSafePopup";
import Map from "../Map";
import locations from "./test.json";

export default function EatSafeMap(): JSX.Element {
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