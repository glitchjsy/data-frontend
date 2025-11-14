import React, { useState } from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.css";
import clsx from "clsx";

export default function Modal({ isOpen, onClose, title, larger, children }: any) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={styles.overlay}
            className={clsx(styles.content, larger ? styles.larger : "")}
        >
            <button className={styles.close} onClick={onClose}>
                &times;
            </button>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.body}>{children}</div>
        </ReactModal>
    )
}