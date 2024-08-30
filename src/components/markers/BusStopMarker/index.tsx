import React from "react";

export default function BusStopMarker({ location }) {
    return <img src={location.shelter ? "/img/bus-stop-yellow.png" : "/img/bus-stop.png"} height="20" width="20" />
}