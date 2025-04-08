import React, { PropsWithChildren, useState } from "react";
import styles from "./styles.module.css";

interface Props {
    state: ChartState;
    onRetry: () => void;
}

export enum ChartState {
    Loading,
    Loaded,
    Failed
}

export default function ChartWrapper(props: PropsWithChildren<Props>) {
    const [fullscreen, setFullscreen] = useState(false);

    if (props.state === ChartState.Loading) {
        return (
            <div className={styles.failedLoading}>
                <p>Loading...</p>
            </div>
        )
    }
    
    if (props.state === ChartState.Failed) {
        return (
            <div className={styles.failedLoading}>
                <p>Failed to load data</p>
                <button onClick={() => props.onRetry()}>Retry</button>
            </div>
        )
    }

    return (
        <div className={!fullscreen ? undefined : styles.fullscreen}>
            <button
                className={styles.fullscreenButton}
                onClick={() => setFullscreen(!fullscreen)}
            >
                {fullscreen ? "Exit Fullscreen" : "Go Fullscreen"}
            </button>
            
            {props.children}
        </div>
    );
}