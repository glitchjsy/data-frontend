import React, { PropsWithChildren, useRef, useState } from "react";
import styles from "./styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import { FaExpand, FaSave } from "react-icons/fa";
import { FaMinimize, FaX } from "react-icons/fa6";

export enum ChartState {
    Loading,
    Loaded,
    Failed
}

export type ViewMode = "all" | "monthly" | "yearly";

interface Props {
    title: string;
    state: ChartState;
    onRetry: () => void;
    onSave?: () => void;
    enableDateControls?: boolean;
    enableViewMode?: boolean;
    initialViewMode?: ViewMode;
    selectedDate?: Date;
    datePickerIsMonthsOnly?: boolean;
    onDateChange?: (date: Date) => void;
    viewMode?: ViewMode;
    onViewModeChange?: (mode: ViewMode) => void;
    onPrev?: () => void;
    onNext?: () => void;
}

export default function ChartWrapper(props: PropsWithChildren<Props>) {
    const [fullscreen, setFullscreen] = useState(false);
    const [retrying, setRetrying] = useState(false);

    // Fake loading animation so user knows its doing something
    const handleRetry = () => {
        setRetrying(true);
        setTimeout(() => {
            setRetrying(false);
            props.onRetry();
        }, 200);
    }

    if (props.state === ChartState.Loading || retrying) {
        return (
            <div className={clsx(styles.loadingOrFailed, styles.loading)}>
                <div className={styles.spinner} />
                <p>Loading {props.title} chart...</p>
            </div>
        );
    }

    if (props.state === ChartState.Failed) {
        return (
            <div className={clsx(styles.loadingOrFailed, styles.failed)}>
                <p>Failed to load data for {props.title} chart</p>
                <button className="btn btn-primary" onClick={handleRetry}>Retry</button>
            </div>
        );
    }

    return (
        <div className={!fullscreen ? undefined : styles.fullscreen}>
            <div className={styles.toolbar}>
                {props.enableViewMode && props.viewMode && props.onViewModeChange && (
                    <div className={styles.viewTypeWrapper}>
                        <button
                            onClick={() => props.onViewModeChange!("all")}
                            disabled={props.viewMode === "all"}
                        >
                            All
                        </button>
                        <button
                            onClick={() => props.onViewModeChange!("monthly")}
                            disabled={props.viewMode === "monthly"}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => props.onViewModeChange!("yearly")}
                            disabled={props.viewMode === "yearly"}
                        >
                            Yearly
                        </button>
                    </div>
                )}

                {props.enableDateControls && (
                    <div className={styles.datePickerWrapper}>
                        {props.onPrev && (
                            <button onClick={props.onPrev}>{"<"}</button>
                        )}
                        {props.onNext && (
                            <button onClick={props.onNext}>{">"}</button>
                        )}
                        {props.onDateChange && (
                            <DatePicker
                                selected={props.selectedDate}
                                onChange={props.onDateChange}
                                dateFormat={props.datePickerIsMonthsOnly ? "MMM yyyy" : "dd MMM yyyy"}
                                showMonthYearPicker={props.datePickerIsMonthsOnly}
                            />
                        )}
                    </div>
                )}
            </div>

            {props.children}

            <div className={styles.footer}>
                <button
                    className={styles.toolbarButton}
                    onClick={() => setFullscreen(!fullscreen)}
                >
                    {fullscreen ? <><FaX /> Exit Fullscreen</> : <><FaExpand /> Fullscreen</>}
                </button>

                {props.onSave && (
                    <button className={styles.toolbarButton} onClick={props.onSave}>
                        <FaSave /> Save Image
                    </button>
                )}
            </div>
        </div>
    );
}