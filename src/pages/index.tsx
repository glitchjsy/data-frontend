import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();

    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className={clsx("container", styles.heroContainer)}>
                <h1 className={clsx("hero__title", styles.heroTitle)}>Jersey Open Data</h1>
                <p className={clsx("hero__subtitle", styles.heroSubtitle)}>
                    Providing you with the tools you need to create stunning apps, websites and more using local data.
                </p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title="Home"
            description="Jersey Open Data"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
