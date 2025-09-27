import React from "react";
import styles from "./styles.module.css";

interface Props {
    name: string;
    value: string;
}

export default function Stat({ name, value }: Props) {
    return (
        <div className={styles.stat}>
            <div className={styles.name}>{name}</div>
            <div className={styles.value}>{value}</div>
        </div>
    )
}