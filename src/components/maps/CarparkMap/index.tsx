import React from "react";
import Map from "../Map";
import locations from "./test.json";
import CarparkMarker from "../../markers/CarparkMarker";
import CarparkPopup from "../../popups/CarparkPopup";

export default function CarparkMap(): JSX.Element {
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