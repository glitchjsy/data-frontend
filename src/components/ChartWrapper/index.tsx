import React, { PropsWithChildren, useState } from "react";
import styles from "./styles.module.css";

interface Props {
    loaded: boolean;
    onRetry: () => void;
}

export default function ChartWrapper(props: PropsWithChildren<Props>) {
    const [fullscreen, setFullscreen] = useState(false);

    if (!props.loaded) {
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