import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, NavigationControl, Popup } from "react-map-gl";
import { mapItems, MapItemType } from "@site/src/mapUtils";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import LayerControl from "@site/src/components/layers/LayerControl";
import config from "@site/config.json";
import { CarparkSurfaceType, CarparkType } from "@site/src/models/Carpark";
import { PublicToiletFacilities } from "@site/src/models/PublicToilet";

export default function MapPage(): JSX.Element {
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "80vh",
        latitude: 49.214198,
        longitude: -2.132497,
        zoom: 11,
    });

    const [selectedMarker, setSelectedMarker] = useState<{
        item: any;
        type: MapItemType;
    } | null>(null);

    // Car parks
    const [showCarparks, setShowCarparks] = useState(false);
    const [includeLongStayCarparks, setIncludeLongStayCarparks] = useState(true);
    const [includeShortStayCarparks, setIncludeShortStayCarparks] = useState(true);
    const [includeUnknownCarparks, setIncludeUnknownCarparks] = useState(true);
    const [includeGravelCarparks, setIncludeGravelCarparks] = useState(true);
    const [includeTarmacCarparks, setIncludeTarmacCarparks] = useState(true);
    const [includeConcreteCarparks, setIncludeConcreteCarparks] = useState(true);

    // Public toilets
    const [showToilets, setShowToilets] = useState(false);
    const [includeGenderNeutralToilets, setIncludeGenderNeutralToilets] = useState(true);
    const [includeBeachShowerToilets, setIncludeBeachShowerToilets] = useState(true);
    const [includeBabyChangingToilets, setIncludeBabyChangingToilets] = useState(true);
    const [includeDisabledToilets, setIncludeDisabledToilets] = useState(true);
    const [includeNoneToilets, setIncludeNoneToilets] = useState(true);

    // Others for now
    const [showBusStops, setShowBusStops] = useState(false);
    const [showRecycling, setShowRecycling] = useState(false);
    const [showDefib, setShowDefib] = useState(false);
    const [showEatsafe, setShowEatsafe] = useState(false);


    const [carparkData, setCarparkData] = useState<any[]>([]);
    const [toiletData, setToiletData] = useState<any[]>([]);
    const [busStopData, setBusStopData] = useState<any[]>([]);
    const [recyclingData, setRecyclingData] = useState<any[]>([]);
    const [defibData, setDefibData] = useState<any[]>([]);
    const [eatsafeData, setEatsafeData] = useState<any[]>([]);

    useEffect(() => {
        mapItems.carpark.fetchData().then(setCarparkData);
        mapItems.toilet.fetchData().then(setToiletData);
        mapItems.busStop.fetchData().then(setBusStopData);
        mapItems.recycling.fetchData().then(setRecyclingData);
        mapItems.defib.fetchData().then(setDefibData);
        mapItems.eatsafe.fetchData().then(setEatsafeData);
    }, []);

    const filterCarparkData = () => {
        return carparkData.filter((item) => {
            return (
                (
                    (includeLongStayCarparks && item.type === CarparkType.LONG_STAY) ||
                    (includeShortStayCarparks && item.type === CarparkType.SHORT_STAY) ||
                    (includeUnknownCarparks && item.type === CarparkType.UNKNOWN)
                ) && (
                    (includeGravelCarparks && item.surfaceType === CarparkSurfaceType.GRAVEL) ||
                    (includeTarmacCarparks && item.surfaceType === CarparkSurfaceType.TARMAC) ||
                    (includeConcreteCarparks && item.surfaceType === CarparkSurfaceType.CONCRETE)
                )
            )
        })
    }

    const filterToiletData = () => {
        return toiletData.filter((item) => {
            if (!includeNoneToilets && item.facilities.length === 0) return false;
            if (!includeGenderNeutralToilets && item.facilities.includes(PublicToiletFacilities.GENDER_NEUTRAL)) return false;
            if (!includeBeachShowerToilets && item.facilities.includes(PublicToiletFacilities.BEACH_SHOWER)) return false;
            if (!includeBabyChangingToilets && item.facilities.includes(PublicToiletFacilities.BABY_CHANGING)) return false;
            if (!includeDisabledToilets && item.facilities.includes(PublicToiletFacilities.DISABLED)) return false;
            return true;
        })
    }

    const getUniqueCarparkOwners = () => {
        const owners = new Map(
            carparkData.map(item => [item.owner.id, item.owner.name])
        );
        return Array.from(owners, ([id, name]) => ({ id, name }));
    }

    return (
        <Layout title="Map" description="Interactive map example">
            <main>
                <div className={styles.grid}>
                    <div className={styles.drawer}>
                        <LayerControl
                            label="Car parks"
                            isVisible={showCarparks}
                            toggleVisibility={() => setShowCarparks(!showCarparks)}
                            subOptions={[
                                {
                                    title: "Type",
                                    options: [
                                        {
                                            label: "Long Stay",
                                            value: "includeLongStayCarparks",
                                            isChecked: includeLongStayCarparks,
                                            toggle: () => setIncludeLongStayCarparks(!includeLongStayCarparks),
                                        },
                                        {
                                            label: "Short Stay",
                                            value: "includeShortStayCarparks",
                                            isChecked: includeShortStayCarparks,
                                            toggle: () => setIncludeShortStayCarparks(!includeShortStayCarparks),
                                        },
                                        {
                                            label: "Unknown",
                                            value: "includeUnknownCarparks",
                                            isChecked: includeUnknownCarparks,
                                            toggle: () => setIncludeUnknownCarparks(!includeUnknownCarparks),
                                        }
                                    ]
                                },
                                {
                                    title: "Surface",
                                    options: [
                                        {
                                            label: "Tarmac",
                                            value: "includeTarmacCarparks",
                                            isChecked: includeTarmacCarparks,
                                            toggle: () => setIncludeTarmacCarparks(!includeTarmacCarparks),
                                        },
                                        {
                                            label: "Concrete",
                                            value: "includeConcreteCarparks",
                                            isChecked: includeConcreteCarparks,
                                            toggle: () => setIncludeConcreteCarparks(!includeConcreteCarparks),
                                        },
                                        {
                                            label: "Gravel",
                                            value: "includeGravelCarparks",
                                            isChecked: includeGravelCarparks,
                                            toggle: () => setIncludeGravelCarparks(!includeGravelCarparks),
                                        }
                                    ]
                                }
                            ]}
                        />

                        <LayerControl
                            label="Public toilets"
                            isVisible={showToilets}
                            toggleVisibility={() => setShowToilets(!showToilets)}
                            subOptions={[
                                {
                                    title: "Facilities",
                                    options: [
                                        {
                                            label: "Gender Neutral",
                                            value: "includeGenderNeutralToilets",
                                            isChecked: includeGenderNeutralToilets,
                                            toggle: () => setIncludeGenderNeutralToilets(!includeGenderNeutralToilets),
                                        },
                                        {
                                            label: "Beach Showers",
                                            value: "includeBeachShowerToilets",
                                            isChecked: includeBeachShowerToilets,
                                            toggle: () => setIncludeBeachShowerToilets(!includeBeachShowerToilets),
                                        },
                                        {
                                            label: "Baby Changing",
                                            value: "includeBabyChangingToilets",
                                            isChecked: includeBabyChangingToilets,
                                            toggle: () => setIncludeBabyChangingToilets(!includeBabyChangingToilets),
                                        },
                                        {
                                            label: "Disabled",
                                            value: "includeDisabledToilets",
                                            isChecked: includeDisabledToilets,
                                            toggle: () => setIncludeDisabledToilets(!includeDisabledToilets),
                                        },
                                        {
                                            label: "None",
                                            value: "includeNoneToilets",
                                            isChecked: includeNoneToilets,
                                            toggle: () => setIncludeNoneToilets(!includeNoneToilets),
                                        }
                                    ]
                                },
                            ]}
                        />

                        <LayerControl
                            label="Bus stops"
                            isVisible={showBusStops}
                            toggleVisibility={() => setShowBusStops(!showBusStops)}
                        />
                        <LayerControl
                            label="Recycling centres"
                            isVisible={showRecycling}
                            toggleVisibility={() => setShowRecycling(!showRecycling)}
                        />
                        <LayerControl
                            label="Defibrillators"
                            isVisible={showDefib}
                            toggleVisibility={() => setShowDefib(!showDefib)}
                        />
                        <LayerControl
                            label="Eat safe ratings"
                            isVisible={showEatsafe}
                            toggleVisibility={() => setShowEatsafe(!showEatsafe)}
                        />
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

                        {showCarparks && filterCarparkData().map((item, i) => (
                            <MapMarker item={item} type="carpark" onSelect={setSelectedMarker} />
                        ))}
                        {showToilets && filterToiletData().map((item, i) => (
                            <MapMarker item={item} type="toilet" onSelect={setSelectedMarker} />
                        ))}

                        {showBusStops && busStopData.map((item, i) => (
                            <MapMarker item={item} type="busStop" onSelect={setSelectedMarker} />
                        ))}
                         {showRecycling && recyclingData.map((item, i) => (
                            <MapMarker item={item} type="recycling" onSelect={setSelectedMarker} />
                        ))}
                         {showDefib && defibData.map((item, i) => (
                            <MapMarker item={item} type="defib" onSelect={setSelectedMarker} />
                        ))}
                        {showEatsafe && eatsafeData.map((item, i) => (
                            <MapMarker item={item} type="eatsafe" onSelect={setSelectedMarker} />
                        ))}

                        {selectedMarker && (
                            <Popup
                                latitude={Number(selectedMarker.item.latitude)}
                                longitude={Number(selectedMarker.item.longitude)}
                                onClose={() => setSelectedMarker(null)}
                                closeOnClick={false}
                                anchor="top"
                            >
                                {mapItems[selectedMarker.type].popup(selectedMarker.item)}
                            </Popup>
                        )}
                    </ReactMapGL>
                </div>
            </main>
        </Layout>
    );
}

function MapMarker({ item, type, onSelect }) {
    return (
        <Marker
            latitude={Number(item.latitude)}
            longitude={Number(item.longitude)}
        >
            <div
                onClick={() => onSelect({ item, type })}
                style={{ cursor: "pointer" }}
            >
                {mapItems[type].icon(item)}
            </div>
        </Marker>
    )
}