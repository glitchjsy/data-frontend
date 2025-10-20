import React from "react";
import styles from "./styles.module.css";

interface Props {
    icon: any;
    title: string;
    description: string;
    children?: any;
}

export default function EmptyState({
    icon,
    title,
    description,
    children
}: Props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>{icon}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.children}>{children}</div>
        </div>
    )
}