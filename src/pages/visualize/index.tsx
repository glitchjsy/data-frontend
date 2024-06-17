import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DefibMap from "@site/src/components/DefibMap";
import Layout from "@theme/Layout";
import Admonition from "@theme/Admonition";
import clsx from "clsx";
import styles from "./styles.module.css";
import CarparkMap from "@site/src/components/CarparkMap";
import RecyclingMap from "@site/src/components/RecyclingMap";

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

    return (
        <Layout
            title={"Visualize"}
            description="Description will go into a meta tag in <head />"
        >
            <ChartsHeader />
            <main className={clsx("container", styles.container)}>
                <section>
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
            </main>
        </Layout>
    );
}
