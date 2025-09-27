import Layout from "@theme/Layout";
import React from "react";
import styles from "./styles.module.css";

export default function AdminNoAccess() {
    return (
        <Layout title="Not authorized">
            <div className={styles.page}>
                <h1>Not Authorized</h1>
                <p>You are not authorized to access this page</p>
            </div>
        </Layout>
    )
}