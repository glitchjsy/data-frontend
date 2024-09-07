import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props {
    loaded: boolean;
    onRetry: () => void;
}

export default function ChartWrapper(props: PropsWithChildren<Props>) {
    if (!props.loaded) {
        return (
            <div className={styles.failedLoading}>
                <p>Failed to load data</p>
                <button onClick={() => props.onRetry()}>Retry</button>
            </div>
        )
    }
    return props.children;
}