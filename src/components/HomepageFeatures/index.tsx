import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Seamlessly integrate local data",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                Access high-quality data on Jersey’s car parks, public services, and more through our robust and standardized API endpoints.
            </>
        ),
    },
    {
        title: "Have data to share?",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                Got valuable Jersey-related data? Let us help make it accessible via our API. Get in touch <a href="mailto:luke@glitch.je">by email</a> to collaborate.
            </>
        ),
    },
    {
        title: "Want to improve our platform?",
        Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
        description: (
            <>
                Interested in contributing ideas or sponsoring the project? Reach out <a href="mailto:luke@glitch.je">by email</a> to help us enhance Jersey's open data platform.
            </>
        ),
    }
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
