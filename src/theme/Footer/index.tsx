import clsx from "clsx";
import React from "react";
import styles from "./styles.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.author}>
                <p>Made by <a href="https://github.com/lukeeey">Luke</a> &bull; Source code available <a href="https://github.com/glitchjsy/data-frontend">on GitHub</a>.</p>
            </div>
            <div className={styles.footerInner}>
                <div className={styles.title}>
                    <a className={styles.glitch} href="https://glitch.je">Glitch.je</a>
                </div>
                <ul className={styles.items}>
                    <li className={clsx(styles.item, styles.active)}><a href="https://data.glitch.je">Open Data</a></li>
                    <li className={styles.item}><a href="https://qrcode.glitch.je">QR Code Generator</a></li>
                    <li className={styles.item}><a href="https://clip.glitch.je">Clip</a></li>
                </ul>
            </div>
        </div>
    );
}
export default React.memo(Footer);
