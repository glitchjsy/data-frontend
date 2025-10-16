import React from "react";
import styles from "./styles.module.css";

interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
}

export default function Switch({
    checked,
    onChange,
    disabled
}: Props) {
    return (
        <label className={styles.switch}>
            <input 
                type="checkbox" 
                checked={checked}
                onChange={(e) => onChange(e.target.checked)} 
                disabled={disabled}
            />
            <span className={styles.slider}></span>
        </label>
    )
}