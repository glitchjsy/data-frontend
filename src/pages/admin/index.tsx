import AdminPageLayout from "@site/src/components/admin/AdminPageLayout";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Stat from "@site/src/components/ui/Stat";
import ApiRequestsOverTimeChart from "@site/src/components/charts/admin/ApiRequestsChart";

export default function AdminDashboard(): JSX.Element {
    const [apiUptime, setApiUptime] = useState("");

    const fetchStats = async () => {
        try {
            const response = await fetch("https://data-api.glitch.je/admin/stats", { credentials: "include" });
            const data = (await response.json()).results;
            setApiUptime(data.apiUptime);
        } catch (e) {
            console.error("Error fetching stats:", e);
        }
    }

    useEffect(() => {
        fetchStats();
        const interval = setInterval(() => fetchStats(), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <AdminPageLayout title="Dashboard">
            <h1>Dashboard</h1>

            <div className={styles.statsWrapper}>
                <Stat name="API Uptime" value={apiUptime} />
            </div>

            <div style={{ marginTop: "20px" }}>
                <ApiRequestsOverTimeChart />
            </div>
        </AdminPageLayout>
    );
}
