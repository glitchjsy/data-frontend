import React from "react";
import ToiletMarker from "../../markers/ToiletMarker";
import ToiletPopup from "../../popups/ToiletPopup";
import Map from "../Map";
import locations from "./test.json";

export default function ToiletMap(): JSX.Element {
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