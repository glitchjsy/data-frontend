import React, { useEffect, useState } from "react";
import ChartWrapper, { ChartState } from "@site/src/components/ChartWrapper";
import ChartDataLabels from "chartjs-plugin-datalabels";
// @ts-ignore
import { Line } from "react-chartjs-2";
// @ts-ignore
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import styles from "./styles.module.css";
import config from "../../../../config.json";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ChartDataLabels, Legend);

export default function ApiRequestsOverTimeChart() {
    const [apiData, setApiData] = useState<any[]>([]);
    const [chartData, setChartData] = useState<any>({});
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [loaded, setLoaded] = useState(false);
    const [chartState, setChartState] = useState(ChartState.Loading);

    const fetchChartData = async (date?: Date) => {
        try {
            setLoaded(false);
            let url = `${config.apiUrl}/admin/stats/daily-requests`;
            if (date) {
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                url += `?month=${month}&year=${year}`;
            }
            const response = await fetch(url, { credentials: "include" });
            const data = (await response.json()).results;

            if (response.ok) {
                setApiData(data);
                setLoaded(true);
            } else {
                setChartState(ChartState.Failed);
            }
        } catch (e) {
            console.error("Error fetching chart data:", e);
            setChartState(ChartState.Failed);
        }
    };

    useEffect(() => {
        fetchChartData(selectedMonth);
    }, []);

    useEffect(() => {
        if (loaded && apiData.length > 0) {
            const labels = apiData.map(item => item.day);
            const authenticated = apiData.map(item => item.authenticated || 0);
            const unauthenticated = apiData.map(item => item.unauthenticated || 0);
            // Optional total line if you want it
            // const total = apiData.map(item => item.total || 0);

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Authenticated",
                        data: authenticated,
                        borderColor: "green",
                        backgroundColor: "green",
                        fill: false,
                        tension: 0.4
                    },
                    {
                        label: "Unauthenticated",
                        data: unauthenticated,
                        borderColor: "orange",
                        backgroundColor: "orange",
                        fill: false,
                        tension: 0.4
                    }
                    // Uncomment if you want to also show total
                    // {
                    //     label: "Total",
                    //     data: total,
                    //     borderColor: "gray",
                    //     backgroundColor: "gray",
                    //     borderDash: [5, 5],
                    //     fill: false,
                    //     tension: 0.4
                    // }
                ]
            });

            setChartState(ChartState.Loaded);
        }
    }, [loaded, apiData]);

    const handlePrevMonth = () => {
        const prev = new Date(selectedMonth);
        prev.setMonth(prev.getMonth() - 1);
        setSelectedMonth(prev);
        fetchChartData(prev);
    };

    const handleNextMonth = () => {
        const next = new Date(selectedMonth);
        next.setMonth(next.getMonth() + 1);
        setSelectedMonth(next);
        fetchChartData(next);
    };

    return (
        <ChartWrapper
            title="API Requests"
            state={chartState}
            onRetry={() => fetchChartData(selectedMonth)}
            enableDateControls
            selectedDate={selectedMonth}
            datePickerIsMonthsOnly
            onDateChange={date => {
                if (date) {
                    setSelectedMonth(date);
                    fetchChartData(date);
                }
            }}
            onPrev={handlePrevMonth}
            onNext={handleNextMonth}
        >
            <div className={styles.chartContainer}>
                <Line
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { position: "top" },
                            title: { display: true, text: "API Requests per Day" },
                            datalabels: null
                        },
                        scales: {
                            x: { title: { display: true, text: "Date" } },
                            y: { title: { display: true, text: "Requests" }, beginAtZero: true }
                        },
                        maintainAspectRatio: false
                    }}
                    height={400}
                />
            </div>
        </ChartWrapper>
    );
}
