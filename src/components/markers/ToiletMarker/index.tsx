import React, { useEffect, useState } from "react";

export default function ToiletMarker({ location }) {
    const [borderColor, setBorderColor] = useState("transparent");
    const [showBorder, setShowBorder] = useState(false);

    const borderStyles = { border: "2px solid", borderColor, height: "25px" };

    useEffect(() => {
        if (location.owner?.id !== null) {
            setShowBorder(true);

            if (location.owner.id === "6060f60d-17a1-49c8-aa4a-c268721a806a") {
                setBorderColor("red"); // Government of Jersey
            }
            if (location.owner.id === "62a13258-686c-456c-87f3-8a93ff735d35") {
                setBorderColor("blue"); // Ports of Jersey
            }
            if (location.owner.id === "52c49647-20f2-49f0-b9b6-a9ba49a13d03") {
                setBorderColor("orange"); // Andium Homes
            }
        }
    }, [location]);

    return (
        <div style={showBorder ? borderStyles : {}}>
            <img src="/img/maps/toilet.png" height="20" width="20" />
        </div>
    )
}