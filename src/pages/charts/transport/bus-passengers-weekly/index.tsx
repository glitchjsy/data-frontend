import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import ChartWrapper from "@site/src/components/ChartWrapper";
import { useColorMode } from "@docusaurus/theme-common";
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

export default function BusPassengersWeeklyCharts() {
    const [data, setData] = useState({});
    const [state, setState] = useState<FetchState>("loading");

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch(`${config.apiUrl}/charts-temp/bus-passengers`);

            setData(await response.json());
            setState("loaded");
        } catch (e: any) {
            setState("failed");
        }
    }

    return (
        <ChartsPageLayout
            title="Bus Passengers Weekly"
            subCategory="Transport"
        >
            <Heading as="h1">Bus Passengers Weekly</Heading>
            <p>Bus passengers updated weekly.</p>

            <div className={styles.pageWidth}>
                <LineChartDisplay data={data} state={state} onRetry={loadData} />
            </div>
        </ChartsPageLayout>
    )
}

type ViewMode = "all" | "monthly" | "yearly";

function LineChartDisplay(props: ChartDisplayProps) {
    const [chartData, setChartData] = useState<any>({});
    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState(props.data);

    const [viewMode, setViewMode] = useState<ViewMode>("all");
    const [years, setYears] = useState([]);
    const [months, setMonths] = useState([]);
    const [selection, setSelection] = useState(0);

    const { isDarkTheme } = useColorMode();

    useEffect(() => {
        if (props.state === "loaded") {
            const dates = Object.keys(props.data);
            const values = Object.values(props.data);

            // Group data by year and month
            const groupedData = dates.reduce((acc, date, index) => {
                const [year, month] = date.split("-");
                const yearKey = year;
                const monthKey = `${year}-${month}`;

                // Group by month
                if (!acc[monthKey]) acc[monthKey] = [];
                acc[monthKey].push({ date, value: values[index] });

                // Group by year
                if (!acc[yearKey]) acc[yearKey] = [];
                acc[yearKey].push({ date, value: values[index] });

                return acc;
            }, {});

            const monthKeys = Object.keys(groupedData).filter(key => key.includes("-"));
            const yearKeys = Object.keys(groupedData).filter(key => !key.includes("-"));

            setData(groupedData);
            setMonths(monthKeys);
            setYears(yearKeys);

            updateChartData(dates, values);

            setLoaded(true);
        }
    }, [props.state]);

    function updateChartData(labels, values) {
        setChartData({
            labels,
            datasets: [
                {
                    label: "Passengers",
                    data: values,
                    borderColor: "blue",
                    backgroundColor: "blue",
                    fill: false,
                    tension: 0.4
                }
            ]
        });
    }

    function updateChartDataByKey(key) {
        const selectedData = data[key];
        const labels = selectedData.map(item => item.date);
        const values = selectedData.map(item => item.value);

        updateChartData(labels, values);
    }

    function handleViewAll() {
        setViewMode("all");
        const allDates = Object.keys(data).flatMap((key) => data[key].map((item) => item.date));
        const allValues = Object.keys(data).flatMap((key) => data[key].map((item) => item.value));
        updateChartData(allDates, allValues);
    }

    function handleViewMonthly() {
        setViewMode("monthly");
        setSelection(0);
        updateChartDataByKey(months[0]);
    }

    function handleViewYearly() {
        setViewMode("yearly");
        setSelection(0);
        updateChartDataByKey(years[0]);
    }

    function handleNext() {
        const keys = viewMode === "monthly" ? months : years;
        if (selection < keys.length - 1) {
            const nextSelection = selection + 1;
            setSelection(nextSelection);
            updateChartDataByKey(keys[nextSelection]);
        }
    }

    function handlePrev() {
        if (selection > 0) {
            const prevSelection = selection - 1;
            setSelection(prevSelection);
            const keys = viewMode === "monthly" ? months : years;
            updateChartDataByKey(keys[prevSelection]);
        }
    }

    function getDate() {
        if (viewMode === "monthly") {
            return parseDateToWords(months[selection]);
        }
        if (viewMode === "yearly") {
            return years[selection];
        }
        return "";
    }

    function parseDateToWords(dateString: string) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const [year, month] = dateString.split('-');
        const monthName = months[parseInt(month) - 1];

        return `${monthName} ${year}`;
    }

    return (
        <ChartWrapper
            loaded={loaded}
            onRetry={props.onRetry}
        >
            <div className={styles.chartOptionsWrapper}>
                <div className={styles.viewTypeWrapper} data-theme={isDarkTheme ? "dark" : "light"}>
                    <button onClick={handleViewAll} disabled={viewMode === "all"} data-theme={isDarkTheme ? "dark" : "light"}>
                        All
                    </button>
                    <button onClick={handleViewMonthly} disabled={viewMode === "monthly"} data-theme={isDarkTheme ? "dark" : "light"}>
                        Monthly
                    </button>
                    <button onClick={handleViewYearly} disabled={viewMode === "yearly"} data-theme={isDarkTheme ? "dark" : "light"}>
                        Yearly
                    </button>
                </div>

                {(viewMode === "monthly" || viewMode === "yearly") && (
                    <div>
                        <button onClick={handlePrev} disabled={selection === 0} data-theme={isDarkTheme ? "dark" : "light"}>
                            {"<"}
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={selection === (viewMode === "monthly" ? months.length - 1 : years.length - 1)}
                            data-theme={isDarkTheme ? "dark" : "light"}
                        >
                            {">"}
                        </button>
                    </div>
                )}
            </div>

            <p className={styles.selectedDate}>{getDate()}</p>

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
                            text: "Passengers Over Time",
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
                                text: "Passengers",
                            },
                            beginAtZero: false,
                        },
                    },
                }}
            />
        </ChartWrapper>
    )
}