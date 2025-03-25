import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import ChartWrapper from "@site/src/components/ChartWrapper";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Line } from "react-chartjs-2";
// @ts-ignore
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import config from "../../../../../config.json";
import styles from "./styles.module.css";

interface ChartDisplayProps {
    data: any;
    state: FetchState;
    onRetry: () => void;
}

type FetchState = "loading" | "loaded" | "failed";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function RoadTrafficCharts() {
    const [data, setData] = useState({});
    const [state, setState] = useState<FetchState>("loading");

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch(`${config.apiUrl}/charts/road-traffic`);

            setData(await response.json());
            setState("loaded");
        } catch (e: any) {
            setState("failed");
        }
    }

    return (
        <ChartsPageLayout
            title="Road Traffic"
            subCategory="Transport"
        >
            <Heading as="h1">Road Traffic</Heading>
            <p>Road traffic on the underpass and tunnel between 2019 and 2022.</p>

            <div className={styles.pageWidth}>
                <LineChartDisplay data={data} state={state} onRetry={loadData} />
            </div>
        </ChartsPageLayout>
    )
}

function LineChartDisplay(props: ChartDisplayProps) {
    const [chartData, setChartData] = useState<any>({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.state === "loaded") {
            const labels = props.data.map(item => item.date);
            const tunnelMovements = props.data.map(item => item.tunnelMovements ? parseInt(item.tunnelMovements) : null); 
            const overpassMovements = props.data.map(item => parseInt(item.overpassMovements));

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Tunnel Movements",
                        data: tunnelMovements,
                        borderColor: "blue",
                        backgroundColor: "blue",
                        fill: false,
                        tension: 0.4,
                    },
                    {
                        label: "Overpass Movements",
                        data: overpassMovements,
                        borderColor: "purple",
                        backgroundColor: "purple",
                        fill: false,
                        tension: 0.4,
                    }
                ]
            });
            setLoaded(true);
        }
    }, [props.state]);

    return (
        <ChartWrapper
            loaded={loaded}
            onRetry={props.onRetry}
        >
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: "top",
                        },
                        title: {
                            display: true,
                            text: "Tunnel vs Overpass Movements",
                        },
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Date",
                            },
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Movements",
                            },
                            beginAtZero: false,
                        },
                    },
                }}
            />
        </ChartWrapper>
    )
}