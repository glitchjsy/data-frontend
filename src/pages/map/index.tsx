import config from "@site/config.json";
import Layout from "@theme/Layout";
import React, { useState } from "react";
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import styles from "./styles.module.css";
import carparkData from "@site/src/components/maps/CarparkMap/test.json";
import toiletData from "@site/src/components/maps/ToiletMap/test.json";
import busStopData from "@site/src/components/maps/BusStopMap/test.json";
import recyclingData from "@site/src/components/maps/RecyclingMap/test.json";
import defibData from "@site/src/components/maps/DefibMap/test.json";
import eatsafeData from "@site/src/components/maps/EatSafeMap/test.json";
import mapItems, { MapItemType } from "@site/src/mapItems";

export default function Map(): JSX.Element {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "80vh",
        latitude: 49.214198,
        longitude: -2.132497,
        zoom: 11
    });

    const [showCarparks, setShowCarparks] = useState(true);
    const [showToilets, setShowToilets] = useState(true);
    const [showBusStops, setShowBusStops] = useState(true);
    const [showRecyclingCentres, setShowRecyclingCentres] = useState(false);
    const [showDefibrillators, setShowDefibrillators] = useState(false);
    const [showEatSafeRatings, setShowEatSafeRatings] = useState(false);

    const [selectedMarker, setSelectedMarker] = useState<{
        item: any;
        type: MapItemType;
    } | null>(null);


    const getMapInfo = (itemType: MapItemType) => {
        return mapItems[itemType];
    }

    const renderMarkers = (data: any[], itemType: MapItemType, visibility: boolean) => {
        return visibility
            ? data.map((item, i) => (
                <Marker
                    key={`${itemType}-${item.id || i}`} // Use a unique ID if available
                    latitude={Number(item.latitude)}
                    longitude={Number(item.longitude)}
                >
                    <div
                        onClick={() => setSelectedMarker({ item, type: itemType })}
                        style={{ cursor: "pointer" }}
                    >
                        {getMapInfo(itemType).icon(item)}
                    </div>
                </Marker>
            ))
            : null;
    };

    return (
        <Layout
            title={"Map"}
            description="Interactive map example"
        >
            <main>
                <div className={styles.grid}>
                    <div className={styles.drawer}>
                        <div className={styles.selectCheckboxes}>
                            <label className={styles.checkboxGroup}>
                                Car parks
                                <input type="checkbox" checked={showCarparks} onChange={(e) => setShowCarparks(e.target.checked)} />
                                <span className={styles.checkmark}></span>
                            </label>
                            hello
                            <label className={styles.checkboxGroup}>
                                Public toilets
                                <input type="checkbox" checked={showToilets} onChange={(e) => setShowToilets(e.target.checked)} />
                                <span className={styles.checkmark}></span>
                            </label>
                            <label className={styles.checkboxGroup}>
                                Bus stops
                                <input type="checkbox" checked={showBusStops} onChange={(e) => setShowBusStops(e.target.checked)} />
                                <span className={styles.checkmark}></span>
                            </label>
                            <label className={styles.checkboxGroup}>
                                Recycling centres
                                <input type="checkbox" checked={showRecyclingCentres} onChange={(e) => setShowRecyclingCentres(e.target.checked)} />
                                <span className={styles.checkmark}></span>
                            </label>
                            <label className={styles.checkboxGroup}>
                                Defibrillators
                                <input type="checkbox" checked={showDefibrillators} onChange={(e) => setShowDefibrillators(e.target.checked)} />
                                <span className={styles.checkmark}></span>
                            </label>
                            <label className={styles.checkboxGroup}>
                                Eatsafe ratings
                                <input type="checkbox" checked={showEatSafeRatings} onChange={(e) => setShowEatSafeRatings(e.target.checked)} />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                    </div>

                    <ReactMapGL
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v11"
                        onViewportChange={(newViewport: any) => setViewport(newViewport)}
                        mapboxApiAccessToken={config.mapboxToken}
                    >
                        <NavigationControl
                            showZoom
                            style={{ padding: "20px", zIndex: 10000 }}
                        />

                        {renderMarkers(carparkData, "carpark", showCarparks)}
                        {renderMarkers(toiletData, "toilet", showToilets)}
                        {renderMarkers(busStopData, "busStop", showBusStops)}
                        {renderMarkers(recyclingData, "recycling", showRecyclingCentres)}
                        {renderMarkers(defibData, "defib", showDefibrillators)}
                        {renderMarkers(eatsafeData, "eatsafe", showEatSafeRatings)}

                        {selectedMarker && (
                            <Popup
                                latitude={Number(selectedMarker.item.latitude)}
                                longitude={Number(selectedMarker.item.longitude)}
                                onClose={() => setSelectedMarker(null)}
                                closeOnClick={false}
                                anchor="top"
                            >
                                {getMapInfo(selectedMarker.type).popup(selectedMarker.item)}
                            </Popup>
                        )}
                    </ReactMapGL>
                </div>
            </main>
        </Layout >
    );
}
