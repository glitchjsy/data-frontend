import { MapItem } from "@site/src/mapUtils";
import React, { useEffect, useState } from "react";
import Map from "../Map";
import styles from "./styles.module.css";

interface Props {
    item: MapItem;
}

type LoadingState = "loading" | "failed" | "loaded";

export default function ExampleMap(props: Props) {
    const [locations, setLocations] = useState<any[]>([]);
    const [loadingState, setLoadingState] = useState<LoadingState>("loading");

    useEffect(() => {
        props.item.fetchData()
            .then((locations) => {
                setLocations(locations);
                setLoadingState("loaded");
            })
            .catch(e => setLoadingState("failed"))
    }, []);

    if (loadingState === "loading") {
        return (
            <div className={styles.loadingWrapper}>
                <p>Loading...</p>
            </div>
        )
    }
    
    if (loadingState === "failed") {
        return (
            <div className={styles.loadingWrapper}>
                <p>Failed to load map data</p>
            </div>
        )
    }

    return (
        <Map
            initialViewport={{
                width: "100%",
                height: "400px",
                latitude: 49.214198,
                longitude: -2.132497,
                zoom: 11
            }}
            locations={locations}
            marker={(location) => props.item.icon(location)}
            popup={(location) => props.item.popup(location)}
            {...props}
        />
    )
}