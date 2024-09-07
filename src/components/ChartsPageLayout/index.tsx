import React, { PropsWithChildren } from "react";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import ChartsSidebar from "../ChartsSidebar";
import clsx from "clsx";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import DocBreadcrumbs from "@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

interface Props {
    title: string;
    subCategory?: string;
    isChartsPage?: boolean;
}

export default function ChartsPageLayout({ children, title, subCategory, isChartsPage }: PropsWithChildren<Props>) {
    return (
        <Layout title={title}>
            <div className={styles.chartsHeader}>
                Charts
            </div>
            <div className={DocPageStyles.docPage}>
                <ChartsSidebar />

                <main className={clsx(MainStyles.docMainContainer)}>
                    <div className={clsx("container", "padding-top--md", "padding-bottom--lg")}>
                        <div className={DocItemStyles.docItemContainer}>
                            <article>
                                <nav className={DocBreadcrumbs.breadcrumbsContainer}>
                                    <ul className="breadcrumbs">
                                        {!isChartsPage && (
                                            <li className="breadcrumbs__item">
                                                <a className="breadcrumbs__link" href="/charts">Charts</a>
                                            </li>
                                        )}
                                        {subCategory && (
                                            <li className="breadcrumbs__item">
                                                <a className="breadcrumbs__link">{subCategory}</a>
                                            </li>
                                        )}
                                        <li className="breadcrumbs__item breadcrumbs__item--active">
                                            <span className="breadcrumbs__link">{title}</span>
                                            <meta itemProp="position" content="2" />
                                        </li>
                                    </ul>
                                </nav>
                                <div className={clsx(ThemeClassNames.docs.docMarkdown, "marklown")}>
                                    {children}
                                </div>
                            </article>
                        </div>
                    </div>
                </main>
            </div>
        </Layout>
    )
}