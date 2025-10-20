import React, { useEffect, useState } from "react";
import ChartWrapper, { ChartState } from "@site/src/components/ChartWrapper";
import ChartDataLabels from "chartjs-plugin-datalabels";
// @ts-ignore
import { Bar, Line } from "react-chartjs-2";
// @ts-ignore
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, BarElement } from "chart.js";
import styles from "./styles.module.css";
import config from "../../../../config.json";
import { toast } from "react-toastify";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, ChartDataLabels, Legend);

export default function TopApiEndpointsChart() {
    const [chartData, setChartData] = useState<any>({});
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [loaded, setLoaded] = useState(false);
    const [chartState, setChartState] = useState(ChartState.Loading);

    const fetchChartData = async (date?: Date) => {
        try {
            setLoaded(false);
            let url = `${config.apiUrl}/admin/stats/top-endpoints`;
            if (date) {
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                url += `?month=${month}&year=${year}`;
            }
            const response = await fetch(url, { credentials: "include" });
            const data = (await response.json()).results;

            if (response.ok) {
                setChartData(data);
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
        if (loaded) {
            const labels = chartData.map((item: any) => item.path);
            const totals = chartData.map((item: any) => parseInt(item.total));

            setChartData({
                labels,
                datasets: [
                    {
                        label: "Requests",
                        data: totals,
                        borderColor: "green",
                        backgroundColor: "green",
                        fill: false,
                        tension: 0.4
                    }
                ]
            });

            setChartState(ChartState.Loaded);
        }
    }, [loaded]);

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
            title="Top 20 API Endpoints"
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
                <Bar
                    data={chartData}
                    options={{
                        responsive: true,
                        plugins: {
                            legend: { position: "top" },
                            title: { display: true, text: "Top 20 API Endpoints" },
                            datalabels: {
                                anchor: "end",
                                align: "top",
                                color: "black",
                                font: { weight: "bold" }
                            }
                        },
                        scales: {
                            x: { title: { display: true, text: "Path" } },
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
