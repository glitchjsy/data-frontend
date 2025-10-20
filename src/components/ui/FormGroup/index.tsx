import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props {
    label: string;
    helpText?: string;
}

export default function FormGroup(props: PropsWithChildren<Props>) {
    return (
        <div className={styles.formGroup}>
            <label>{props.label}</label>
            {props.children}
            {props.helpText && <span className={styles.helpText}>{props.helpText}</span>}
        </div>
    )
}