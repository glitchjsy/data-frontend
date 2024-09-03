export interface Defibrillator {
    id: string;
    location: string;
    parish: string;
    padNumber: number | null;
    latitude: number | null;
    longitude: number | null;
    notes: string | null;
}