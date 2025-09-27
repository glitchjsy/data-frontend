import React, { PropsWithChildren } from "react";
import styles from "./styles.module.css";

interface Props {
    label: string;
}

export default function FormGroup(props: PropsWithChildren<Props>) {
    return (
        <div className={styles.formGroup}>
            <label>{props.label}</label>
            {props.children}
        </div>
    )
}