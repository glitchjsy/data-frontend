import React from "react";

export default function BusStopMarker({ location }) {
    return <img src={location.shelter ? "/img/docs/bus-stop-yellow.png" : "/img/docs/bus-stop.png"} height="20" width="20" />
}