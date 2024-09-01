import React from "react";

export default function EatSafeMarker({ location }) {
    return <img src={`/img/docs/eatsafe-${location.rating}.png`} height="20" width="20" style={{ backgroundColor: "white", borderRadius: "50%" }} />
}