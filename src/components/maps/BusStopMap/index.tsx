import React from "react";
import Map from "../Map";
import locations from "./test.json";
import BusStopMarker from "../../markers/BusStopMarker";
import BusStopPopup from "../../popups/BusStopPopup";

export default function BusStopMap(): JSX.Element {
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