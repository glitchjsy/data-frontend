import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import ChartWrapper, { ChartState } from "@site/src/components/ChartWrapper";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Bar, Pie } from "react-chartjs-2";
// @ts-ignore
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from "chart.js";
import config from "../../../../../config.json";
import styles from "./styles.module.css";

interface ChartDisplayProps {
    data: any;
    state: ChartState;
    setState: (state: ChartState) => void;
    loaded: boolean;
    onRetry: () => void;
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const colorHexCodes = {
    "Blue": "#0000FF",
    "White": "#D6D5D2",
    "Silver": "#C0C0C0",
    "Red": "#FF0000",
    "Black": "#000000",
    "Grey": "#808080",
    "Green": "#008000",
    "Yellow": "#FFFF00",
    "Beige": "#F5F5DC",
    "Orange": "#FFA500",
    "Gold": "#FFD700",
    "Brown": "#A52A2A",
    "Purple": "#800080",
    "Cream": "#FFFDD0",
    "Bronze": "#CD7F32",
    "Multi-Coloured": "#000000",
    "Maroon": "#800000",
    "Pink": "#FFC0CB",
    "Turquoise": "#40E0D0",
    "Not Specified": "#000000"
}

export default function VehicleColourCharts() {
    const [data, setData] = useState({});
    const [state, setState] = useState(ChartState.Loading);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch(`${config.apiUrl}/vehicles/colors`);

            setData(await response.json());
            setLoaded(true);
        } catch (e: any) {
            setState(ChartState.Failed);
            setLoaded(false);
        }
    }

    return (
        <ChartsPageLayout
            title="Vehicle Colours"
            subCategory="Transport"
        >
            <Heading as="h1">Vehicle Colours</Heading>
            <p>Vehicle colours sorted by popularity.</p>

            <div className={styles.pageWidth}>
                <BarChartDisplay data={data} state={state} setState={setState} loaded={loaded} onRetry={loadData} />
                {/* <PieChartDisplay data={data} state={state} onRetry={loadData} /> */}
            </div>
        </ChartsPageLayout>
    )
}

function BarChartDisplay(props: ChartDisplayProps) {
    const [chartData, setChartData] = useState<any>({});

    useEffect(() => {
        if (props.loaded) {
            const labels = Object.keys(props.data);
            const values = Object.values(props.data);

            const colors = labels.map(label => colorHexCodes[label]);

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: "Vehicle Colour Popularity",
                        data: values,
                        backgroundColor: colors,
                        borderColor: "rgba(54, 162, 235, 1)",
                        borderWidth: 1
                    }
                ]
            });
            props.setState(ChartState.Loaded);
        }
    }, [props.loaded]);

    return (
        <ChartWrapper
            state={props.state}
            onRetry={props.onRetry}
        >
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        y: { beginAtZero: true }
                    }
                }}
            />
        </ChartWrapper>
    )
}

function PieChartDisplay(props: ChartDisplayProps) {
    const [chartData, setChartData] = useState<any>({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.loaded) {
            const labels = Object.keys(props.data.results);
            const values = Object.values(props.data.results);

            const colors = labels.map(label => colorHexCodes[label]);

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: "Vehicle Colour Popularity",
                        data: values,
                        backgroundColor: colors
                    }
                ]
            });
            props.setState(ChartState.Loaded);
        }
    }, [props.loaded]);

    return (
        <ChartWrapper
            state={props.state}
            onRetry={props.onRetry}
        >
            <Pie
                data={chartData}
                options={{
                    responsive: true
                }}
            />
        </ChartWrapper>
    )
}