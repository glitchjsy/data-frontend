import React, { useState } from "react";
import ReactModal from "react-modal";
import styles from "./styles.module.css";

export default function Modal({ isOpen, onClose, title, children }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            overlayClassName={styles.overlay}
            className={styles.content}
        >
            <button className={styles.close} onClick={onClose}>
                &times;
            </button>
            {title && <h2 className={styles.title}>{title}</h2>}
            <div className={styles.body}>{children}</div>
        </ReactModal>
    )
}