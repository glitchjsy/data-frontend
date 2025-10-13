import React, { PropsWithChildren, useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import styles from "./styles.module.css";
// @ts-ignore
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

export default function VehicleColours() {
    const [data, setData] = useState({});
    const [pieChartData, setPieChartData] = useState<any>({});
    const [barChartData, setBarChartData] = useState<any>({});
    const [failedLoading, setFailedLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setFailedLoading(true);
        try {
            const response = await fetch(`https://api.opendata.je/v1/vehicles/stats/colors`);
            const data = await response.json();

            const labels = Object.keys(data.results);
            const values = Object.values(data.results);

            setData(data);
            setBarChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Car Color Popularity',
                        data: values,
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                    },
                ],
            });

            setPieChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Car Color Popularity',
                        data: values,
                        backgroundColor: [
                            '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
                            '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                            '#9966FF', '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56',
                            '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#36A2EB'
                        ],
                    },
                ],
            });
            setFailedLoading(false)
        } catch (e) {
            console.error("Error fetching vehicle colours:", e);
            setFailedLoading(true);
        }
    }

    return (
        <div>
            {!failedLoading ? (
                <>
                    <h2>Bar Chart - Car Colors</h2>
                    <Bar
                        data={barChartData}
                        options={{
                            responsive: true,
                            scales: {
                                y: {
                                    beginAtZero: true,
                                },
                            },
                        }}
                    />

                    <h2>Pie Chart - Car Colors</h2>
                    <Pie
                        data={pieChartData}
                        options={{
                            responsive: true,
                        }}
                    />
                </>
            ) : (
                <div className={styles.failedLoading}>
                    <p>Failed to load data</p>
                    <button onClick={() => fetchData()}>Retry</button>
                </div>
            )
            }
        </div >
    )
}