import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";
// @ts-ignore
import ChartWrapper from "@site/src/components/ChartWrapper";
import { useColorMode } from "@docusaurus/theme-common";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    TimeScale,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import config from "../../../../../config.json";
import styles from "./styles.module.css";
import "react-datepicker/dist/react-datepicker.css";

type FetchState = "loading" | "loaded" | "failed";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
);

export default function ParkingCharts() {
    return (
        <ChartsPageLayout
            title="Parking Spaces Over Time"
            subCategory="Transport"
        >
            <ParkingChartsContent />
        </ChartsPageLayout>
    )
}

function ParkingChartsContent() {
    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [state, setState] = useState<FetchState>("loading");
    const [selection, setSelection] = useState(0);

    const { isDarkTheme } = useColorMode();

    useEffect(() => {
        if (selectedDate !== "") {
            fetchData();
            let interval = setInterval(() => fetchData(), 5000);
            return () => clearInterval(interval);
        }
    }, [selectedDate]);

    useEffect(() => {
        fetchDates();
    }, []);

    useEffect(() => {
        if (dates.length !== 0) {
            setSelection(dates.length - 1)
            setSelectedDate(dates[dates.length - 1]); // Set to todays date
        }
    }, [dates]);

    async function fetchData() {
        try {
            const response = await fetch(`${config.apiUrl}/carparks/test-spaces?date=${selectedDate}`);
            setState("loaded");
            setData((await response.json()).reverse());
        } catch (e) {
            setState("failed");
        }
    }

    async function fetchDates() {
        try {
            const response = await fetch(`${config.apiUrl}/carparks/live-spaces/dates`);
            setDates((await response.json()).results.reverse());
        } catch (e) {
            setState("failed");
        }
    }

    function formatChartData() {
        const groupedData = data.reduce((acc, item) => {
            const { name, createdAt, spaces } = item;
            if (!acc[name]) {
                acc[name] = [];
            }
            acc[name].push({ createdAt, spaces });
            return acc;
        }, {});

        const datasets = Object.keys(groupedData).map(carParkName => ({
            label: carParkName,
            data: groupedData[carParkName].map(item => item.spaces),
            borderColor: getRandomColor(),
            backgroundColor: "rgba(0,0,0,0)" // Transparent background
        }));

        const uniqueTimes = Array.from(new Set(data.map(item => new Date(item.createdAt).toLocaleTimeString([], { timeStyle: "short" }))));

        return {
            labels: uniqueTimes,
            datasets
        }
    }

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function handleNext() {
        if (selection < dates.length - 1) {
            const nextSelection = selection + 1;
            setSelection(nextSelection);
            setSelectedDate(dates[nextSelection]);
        }
    }

    function handlePrev() {
        if (selection > 0) {
            const prevSelection = selection - 1;
            setSelection(prevSelection);
            setSelectedDate(dates[prevSelection]);
        }
    }

    return (
        <>
            <Heading as="h1">Parking Spaces Over Time</Heading>
            <p>
                Available parking spaces in multi storey carparks, display over time. The information is updated roughly every 5 minutes.
            </p>

            <ChartWrapper
                loaded={state === "loaded"}
                onRetry={() => fetchDates()}
            >
                <div className={styles.chartOptionsWrapper}>
                    <div>
                        <button
                            onClick={handlePrev}
                            disabled={selection === 0}
                            data-theme={isDarkTheme ? "dark" : "light"}
                        >
                            {"<"}
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={selection === dates.length - 1}
                            data-theme={isDarkTheme ? "dark" : "light"}
                        >
                            {">"}
                        </button>
                    </div>

                    <div>
                        <DatePicker
                            className={styles.datePicker}
                            dateFormat="dd MMM yy"
                            selected={new Date(selectedDate)}
                            onChange={(date: Date) => {
                                const formattedDate = date.toISOString().split("T")[0];
                                const index = dates.findIndex(d => new Date(d).getTime() === date.getTime());

                                setSelection(index);
                                setSelectedDate(formattedDate);
                            }}
                            includeDates={dates.map(date => new Date(date))}
                            popperPlacement="bottom-start"
                            showIcon
                        />
                    </div>
                </div>

                {selectedDate ? <p style={{ marginTop: "10px", marginBottom: 0 }}><strong>{new Date(selectedDate).toLocaleDateString("en-GB", { weekday: "long", year: "numeric", month: "long", day: "2-digit" })}</strong></p> : false}

                <Line
                    data={formatChartData() as any}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                position: "top"
                            },
                            legend: {
                                display: true,
                                position: "top"
                            },
                            tooltip: {
                                mode: "point",
                                intersect: false
                            }
                        }
                    }}
                />
            </ChartWrapper>
        </>
    )
}