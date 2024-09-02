import React from "react";

export default function BusStopMarker({ location }) {
    return <img src={location.shelter ? "/img/maps/bus-stop-yellow.png" : "/img/maps/bus-stop.png"} height="20" width="20" />
}