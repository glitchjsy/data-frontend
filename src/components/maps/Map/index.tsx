import React, { useState } from "react";
import ReactMapGL, { Marker, MarkerProps, NavigationControl, Popup, PopupProps } from "react-map-gl";
import config from "@site/config.json";

interface MapProps {
    initialViewport: Viewport;
    locations: Location[]
    markerProps?: Omit<MarkerProps, "latitude" | "longitude" | "onClick">;
    popupProps?: Omit<PopupProps, "latitude" | "longitude" | "onClose">;
    marker: (location: Location) => JSX.Element;
    popup?: (location?: Location) => JSX.Element;
}

interface Viewport {
    width: string;
    height: string;
    latitude: number;
    longitude: number;
    zoom: number;
}

export interface Location {
    latitude: number;
    longitude: number;
    // Allow other properties
    [x: string | number | symbol]: unknown;
}

export default function Map(props: MapProps): JSX.Element {
    const [viewport, setViewport] = useState(props.initialViewport);
    const [selectedLocation, setSelectedLocation] = useState(null);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
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

                {props.locations.map((location, index) => (
                    <Marker
                        key={index}
                        latitude={Number(location.latitude)}
                        longitude={Number(location.longitude)}
                        onClick={() => setSelectedLocation(location)}
                        {...props.markerProps}
                    >
                        {props.marker(location)}
                    </Marker>
                ))}

                {(props.popup && selectedLocation) && (
                    <Popup
                        latitude={selectedLocation.latitude}
                        longitude={selectedLocation.longitude}
                        onClose={() => setSelectedLocation(null)}
                        className="mapbox-popup"
                        {...props.popupProps}
                    >
                        {props.popup(selectedLocation)}
                    </Popup>
                )}
            </ReactMapGL>
        </div>
    )
}