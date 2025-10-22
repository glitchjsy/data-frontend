import React from "react";
import styles from "./styles.module.css";

export default function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return <select className={styles.select} {...props} />
}