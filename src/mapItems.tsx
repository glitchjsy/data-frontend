import React from "react";
import EatSafePopup from "./components/popups/EatSafePopup";
import RecyclingPopup from "./components/popups/RecyclingPopup";
import ToiletMarker from "./components/markers/ToiletMarker";
import RecyclingMarker from "./components/markers/RecyclingMarker";
import EatSafeMarker from "./components/markers/EatSafeMarker";
import ToiletPopup from "./components/popups/ToiletPopup";
import DefibMarker from "./components/markers/DefibMarker";
import DefibPopup from "./components/popups/DefibPopup";
import BusStopMarker from "./components/markers/BusStopMarker";
import BusStopPopup from "./components/popups/BusStopPopup";
import CarparkMarker from "./components/markers/CarparkMarker";
import CarparkPopup from "./components/popups/CarparkPopup";

type MapItems = {
    [type in MapItemType]: MapItem;
};

interface MapItem {
    icon: (item: any) => any;
    popup: (item: any) => any;
}

export type MapItemType = "eatsafe" | "recycling" | "toilet" | "defib" | "busStop" | "carpark";

const items: MapItems = {
    eatsafe: {
        icon: (item) => <EatSafeMarker location={item} />,
        popup: (item) => <EatSafePopup location={item} />
    },
    recycling: {
        icon: (item) => <RecyclingMarker location={item} />,
        popup: (item) => <RecyclingPopup location={item} />
    },
    toilet: {
        icon: (item) => <ToiletMarker location={item} />,
        popup: (item) => <ToiletPopup location={item} />
    },
    defib: {
        icon: (item) => <DefibMarker location={item} />,
        popup: (item) => <DefibPopup location={item} />
    },
    busStop: {
        icon: (item) => <BusStopMarker location={item} />,
        popup: (item) => <BusStopPopup location={item} />
    },
    carpark: {
        icon: (item) => <CarparkMarker location={item} />,
        popup: (item) => <CarparkPopup location={item} />
    }
}

export default items;