import React, { useEffect, useState } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DefibMap from "@site/src/components/DefibMap";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";
import clsx from "clsx";
import styles from "./styles.module.css";
import CarparkMap from "@site/src/components/CarparkMap";
import RecyclingMap from "@site/src/components/RecyclingMap";
// @ts-ignore
import { Line } from "react-chartjs-2";
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
    // @ts-ignore
} from "chart.js";
import BusStopMap from "@site/src/components/BusStopMap";
import ToiletMap from "@site/src/components/ToiletMap";
import EatSafeMap from "@site/src/components/EatSafeMap";

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

function ChartsHeader() {
    return (
        <header className={clsx("hero hero--primary")}>
            <div className={clsx("container")}>
                <h1 className={clsx("hero__title")}>Maps</h1>
                <p className={clsx("hero__subtitle")}>
                    Showing some maps to help visualise the data.
                </p>
            </div>
        </header>
    );
}

export default function Charts(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    const [data, setData] = useState([]);
    const [dates, setDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");

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
            setSelectedDate(dates[0]);
        }
    }, [dates]);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/v1/carparks/test-spaces?date=${selectedDate}`);
            setData((await response.json()).reverse());
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const fetchDates = async () => {
        try {
            const response = await fetch("http://localhost:8080/v1/carparks/live-spaces/dates");
            setDates((await response.json()).results.reverse());
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const formatChartData = () => {
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
            backgroundColor: "rgba(0,0,0,0)", // Transparent background
        }));

        const uniqueTimes = Array.from(new Set(data.map(item => new Date(item.createdAt).toLocaleTimeString())));

        return {
            labels: uniqueTimes,
            datasets,
        };
    };

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <Layout
            title={"Visualize"}
            description="Description will go into a meta tag in <head />"
        >
            {/* <ChartsHeader /> */}

            <main className={clsx("container", styles.container)}>

                <section>
                    <h2 className={styles.sectionTitle}>Parking spaces over time</h2>

                    <p>Click a date below to view the spaces on that day.</p>

                    <div className={styles.parkingSpacesDates}>
                        {dates.map(date => (
                            <div
                                key={date}
                                className={styles.parkingSpaceDateItem}
                                style={{
                                    backgroundColor: date === selectedDate ? "black" : "#ececec",
                                    color: date === selectedDate ? "white" : "black"
                                }}
                                onClick={() => setSelectedDate(date)}
                            >
                                <span>{new Date(date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" })}</span>
                            </div>
                        ))}
                    </div>

                    {selectedDate ? <p style={{ marginTop: "10px", marginBottom: 0 }}>Showing {new Date(selectedDate).toDateString()}</p> : false}

                    <Line
                        data={formatChartData()}
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
                </section>

                <section style={{ marginTop: "50px" }}>
                    <h2 className={styles.sectionTitle}>Public Access Defibrillators</h2>
                    <p>
                        Below is all the public access defibrillators around the island.
                        Click on a <img src="/img/defib.png" height="15" width="15" /> icon for more information about that location.
                    </p>

                    <DefibMap />
                </section>

                <section style={{ marginTop: "50px" }}>
                    <h2 className={styles.sectionTitle}>Car parks</h2>
                    <p>
                        Below is all the public carparks around the island.
                        Click on a <img src="/img/carpark.png" height="15" width="15" /> icon for more information about that location.
                    </p>

                    <CarparkMap />
                </section>

                <section style={{ marginTop: "50px" }}>
                    <h2 className={styles.sectionTitle}>Recycling centres</h2>
                    <p>
                        Below is all the recycling centres around the island.
                        Click on a <img src="/img/recycling.png" height="15" width="15" /> icon for more information about that location.
                    </p>

                    <Admonition type="tip" title="Please note">
                        Locations are approximate and just refer to the general area
                    </Admonition>

                    <RecyclingMap />
                </section>

                <section style={{ marginTop: "50px" }}>
                    <h2 className={styles.sectionTitle}>Public toilets</h2>
                    <p>
                        Below is all the public toilets around the island.
                        Click on a <img src="/img/toilet.png" height="15" width="15" /> icon for more information about that location.
                    </p>

                    <ToiletMap />
                </section>

                <section style={{ marginTop: "50px" }}>
                    <h2 className={styles.sectionTitle}>Bus stops</h2>
                    <p>
                        Below is all the bus stops around the island.
                        Click on a <img src="/img/bus-stop.png" height="15" width="15" /> icon for more information about that location.
                    </p>

                    <BusStopMap />
                </section>

                <section style={{ marginTop: "50px" }}>
                    <h2 className={styles.sectionTitle}>Eatsafe ratings</h2>
                    <p>
                        Below is all the businesses with eatsafe ratings around the island.
                        Click on a rating icon for more information about that location.
                    </p>

                    <p>
                        NOTE: Not all businesses have addresses specified and as such are not displayed here.
                    </p>

                    <EatSafeMap />
                </section>
            </main>
        </Layout>
    );
}
