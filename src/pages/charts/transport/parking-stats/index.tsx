import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import ChartWrapper, { ChartState } from "@site/src/components/ChartWrapper";
import Heading from "@theme/Heading";
import ChartDataLabels from "chartjs-plugin-datalabels";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Bar, Line } from "react-chartjs-2";
// @ts-ignore
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import config from "../../../../../config.json";
import styles from "./styles.module.css";

interface ChartDisplayProps {
    data: any;
    state: ChartState;
    setState: (state: ChartState) => void;
    loaded: boolean;
    onRetry: () => void;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function ParkingStatsCharts() {
    const [data, setData] = useState<any>({});
    const [state, setState] = useState(ChartState.Loading);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch(`http://localhost:8080/v1/charts/parking-stats`);

            setData((await response.json()).results);
            setLoaded(true);
        } catch (e: any) {
            setState(ChartState.Failed);
            setLoaded(false);
        }
    }

    return (
        <ChartsPageLayout
            title="Parking Statistics"
            subCategory="Transport"
        >
            <Heading as="h1">Parking Statistics</Heading>

            <div className={styles.pageWidth}>
                <CarparkAvailabilityChart data={data?.availabilityThisYear} state={state} setState={setState} loaded={loaded} onRetry={loadData} />
            </div>
        </ChartsPageLayout>
    )
}

function CarparkAvailabilityChart({ data, loaded, state, setState, onRetry }: ChartDisplayProps) {
    const [chartData, setChartData] = useState<any>({});
    const [selectedCarpark, setSelectedCarpark] = useState<string>("");
    const [carparkOptions, setCarparkOptions] = useState<string[]>([]);

    useEffect(() => {
        if (loaded && data?.length) {
            const options: string[] = Array.from(new Set(data.map(d => d.name)));
            setCarparkOptions(options);

            if (!selectedCarpark && options.length > 0) {
                setSelectedCarpark(options[0]);
            }
        }
    }, [loaded, data]);

    useEffect(() => {
        if (loaded && data?.length && selectedCarpark) {
            const carparkRows = data.filter(d => d.name === selectedCarpark);

            // Sort by year & month
            carparkRows.sort((a, b) => (a.year - b.year) || (a.month - b.month));

            const labels = carparkRows.map(r => `${r.month}/${r.year}`);
            const values = carparkRows.map(r => r.availabilityPercentage);

            setChartData({
                labels,
                datasets: [
                    {
                        label: selectedCarpark,
                        data: values,
                        backgroundColor: "rgba(54, 162, 235, 0.7)"
                    }
                ]
            });

            setState(ChartState.Loaded);
        }
    }, [loaded, data, selectedCarpark]);

    return (
        <div>
            <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="carpark-select" style={{ marginRight: "0.5rem" }}>Select Carpark:</label>
                <select
                    id="carpark-select"
                    value={selectedCarpark}
                    onChange={e => setSelectedCarpark(e.target.value)}
                >
                    <option value="">-- Select --</option>
                    {carparkOptions.map((code: string) => (
                        <option key={code} value={code}>{code}</option>
                    ))}
                </select>
            </div>

            <ChartWrapper
                title="Carpark Availability"
                state={state}
                onRetry={onRetry}
            >
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { position: "top" },
                            title: { display: true, text: "Carpark Availability (%)" },
                            // @ts-ignore
                            datalabels: {
                                anchor: "center",
                                align: "center",
                                color: "black",
                                font: {
                                    weight: "bold"
                                },
                                formatter: (value: any) => `${value}%`
                            }
                        },
                        scales: {
                            x: { title: { display: true, text: "Month/Year" } },
                            y: { title: { display: true, text: "Availability %" }, beginAtZero: true, max: 100 }
                        }
                    }}
                />

            </ChartWrapper>
        </div>
    );
}