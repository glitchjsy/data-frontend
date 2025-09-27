import React, { useEffect, useState } from "react";
import ChartWrapper, { ChartState } from "@site/src/components/ChartWrapperNew";
// @ts-ignore
import { Line } from "react-chartjs-2";
// @ts-ignore
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ApiRequestsOverTimeChart() {
    const [chartData, setChartData] = useState<any>({});
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [loaded, setLoaded] = useState(false);
    const [chartState, setChartState] = useState(ChartState.Loading);

    const fetchChartData = async (date?: Date) => {
        try {
            setLoaded(false);
            let url = "https://data-api.glitch.je/admin/stats/daily-requests";
            if (date) {
                const month = date.getMonth() + 1;
                const year = date.getFullYear();
                url += `?month=${month}&year=${year}`;
            }
            const response = await fetch(url, { credentials: "include" });
            const data = (await response.json()).results;
            setChartData(data);
            setLoaded(true);
        } catch (e) {
            console.error("Error fetching chart data:", e);
            setLoaded(false);
        }
    };

    useEffect(() => {
        fetchChartData(selectedMonth);
    }, []);

    useEffect(() => {
        if (loaded) {
            const labels = chartData.map((item: any) => item.day);
            const totals = chartData.map((item: any) => parseInt(item.total));

            setChartData({
                labels,
                datasets: [
                    {
                        label: "API Requests",
                        data: totals,
                        borderColor: "green",
                        backgroundColor: "green",
                        fill: false,
                        tension: 0.4,
                    },
                ],
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
            <Line
                data={chartData}
                options={{
                    responsive: true,
                    plugins: {
                        legend: { position: "top" },
                        title: { display: true, text: "API Requests per Day" },
                    },
                    scales: {
                        x: { title: { display: true, text: "Date" } },
                        y: { title: { display: true, text: "Requests" }, beginAtZero: true },
                    },
                }}
            />
        </ChartWrapper>
    );
}
