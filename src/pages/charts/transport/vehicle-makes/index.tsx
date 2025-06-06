import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import ChartWrapper, { ChartState } from "@site/src/components/ChartWrapper";
import Heading from "@theme/Heading";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
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

export default function VehicleMakeCharts() {
    const [data, setData] = useState({});
    const [state, setState] = useState(ChartState.Loading);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        try {
            const response = await fetch(`${config.apiUrl}/vehicles/makes`);
            
            setData(await response.json());
            setLoaded(true);
        } catch (e: any) {
            setState(ChartState.Failed);
            setLoaded(false);
        }
    }

    return (
        <ChartsPageLayout
            title="Vehicle Makes"
            subCategory="Transport"
        >
            <Heading as="h1">Vehicle Makes</Heading>

            <div className={styles.pageWidth}>
                <Tabs>
                    <TabItem value="top-15" label="Top 15">
                        <BarChartDisplay data={data} state={state} setState={setState} loaded={loaded} onRetry={loadData} />
                    </TabItem>
                    <TabItem value="view-all" label="View all">
                        <ViewAllDisplay data={data} state={state} setState={setState} loaded={loaded} onRetry={loadData} />
                    </TabItem>
                </Tabs>
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

            const data = labels.map((label, index) => ({
                make: label,
                count: values[index]
            }));

            data.sort((a: any, b: any) => b.count - a.count);

            const topCount = data.slice(0, 15);
            const otherCount = data.slice(15).reduce((acc: number, curr: any) => acc + curr.count, 0);

            const finalLabels = topCount.map(item => item.make);
            const finalValues = topCount.map(item => item.count);

            setChartData({
                labels: finalLabels,
                datasets: [
                    {
                        label: "Vehicle Colour Popularity",
                        data: finalValues,
                        backgroundColor: "rgba(54, 162, 235, 1)",
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

function ViewAllDisplay(props: ChartDisplayProps) {
    const [arrayData, setArrayData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (props.loaded) {
            const array = [];

            for (const make in props.data) {
                array.push({ make, count: props.data[make] });
            }
            setArrayData(array);
            setFilteredData(array);
        }
    }, [props.loaded]);

    useEffect(() => {
        if (searchTerm === "") {
            setFilteredData(arrayData);
        } else {
            setFilteredData(arrayData.filter(entry =>
                entry.make.toLowerCase().includes(searchTerm.toLowerCase())
            ));
        }
    }, [searchTerm]);

    if (arrayData.length === 0) {
        return <p>Loading...</p>
    }

    return (
        <>
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className={styles.viewAllSearch}
            />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Make</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map(entry => {
                        return (
                            <tr key={entry.make} className={styles.tableRow}>
                                <td>{entry.make}</td>
                                <td>{entry.count}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}