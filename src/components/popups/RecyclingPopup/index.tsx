import React from "react";
import styles from "./styles.module.css";
import { RecyclingCentreService } from "@site/src/models/RecyclingCentre";

export default function RecyclingPopup({ location }) {

    const getServiceName = (service: RecyclingCentreService) => {
        switch (service) {
            case RecyclingCentreService.MIXED_TEXTILES: return "Mixed Textiles";
            case RecyclingCentreService.BATTERIES: return "Batteries";
            case RecyclingCentreService.CARDBOARD: return "Cardboard";
            case RecyclingCentreService.METAL_PACKAGING: return "Metal Packaging";
            case RecyclingCentreService.METAL_PACKAGING_DRINK_CANS: return "Drink Cans";
            case RecyclingCentreService.PAPER: return "Paper";
            case RecyclingCentreService.PLASTIC_BOTTLES: return "Plastic Bottles";
            case RecyclingCentreService.GLASS: return "Glass";
        }
        return "Unknown";
    }

    return (
        <div className={styles.popup}>
            <p className={styles.popupName}>{location.location}</p>
            <p className={styles.servicesName}>Services:</p>

            <ul className={styles.services}>
                {location.services.map(loc => (
                    <li>{getServiceName(loc)}</li>
                ))}
            </ul>
        </div>
    )
}