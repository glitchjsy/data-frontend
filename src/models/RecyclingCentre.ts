export interface RecyclingCentre {
    location: string;
    parish: string;
    services: RecyclingCentreService[];
    latitude: number | null;
    longitude: number | null;
    notes: string | null;
}

export enum RecyclingCentreService {
    BATTERIES = "BATTERIES",
    CARDBOARD = "CARDBOARD",
    METAL_PACKAGING = "METAL_PACKAGING",
    METAL_PACKAGING_DRINK_CANS = "METAL_PACKAGING_DRINK_CANS",
    MIXED_TEXTILES = "MIXED_TEXTILES",
    PAPER = "PAPER",
    PLASTIC_BOTTLES = "PLASTIC_BOTTLES",
    GLASS = "GLASS"
}