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

export default function DrivingTestResultCharts() {
    const [data, setData] = useState({});
    const [state, setState] = useState<FetchState>("loading");

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch(`${config.apiUrl}/charts/driving-test-results`);

            setData(await response.json());
            setState("loaded");
        } catch (e: any) {
            setState("failed");
        }
    }

    return (
        <ChartsPageLayout
            title="Driving Test Results"
            subCategory="Transport"
        >
            <Heading as="h1">Driving Test Results</Heading>
            <p>Driving test results between 1975 and 2017.</p>

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
            const totalFailed = props.data.map(item => item.totalFailed ? parseInt(item.totalFailed) : null); 
            const totalPassword = props.data.map(item => parseInt(item.totalPassed));

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Failed Tests",
                        data: totalFailed,
                        borderColor: "blue",
                        backgroundColor: "blue",
                        fill: true,
                        tension: 0.2,
                    },
                    {
                        label: "Passed Tests",
                        data: totalPassword,
                        borderColor: "purple",
                        backgroundColor: "purple",
                        fill: true,
                        tension: 0.2,
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
                            text: "Driving Test Results",
                        }
                    },
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: "Date",
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: "Results",
                            },
                            beginAtZero: false
                        }
                    }
                }}
            />
        </ChartWrapper>
    )
}