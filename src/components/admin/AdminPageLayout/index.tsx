import React, { PropsWithChildren, useEffect, useState } from "react";
import DocPageStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/styles.module.css";
import AdminSidebar from "../AdminSidebar";
import clsx from "clsx";
import DocItemColStyles from "@docusaurus/theme-classic/lib/theme/DocItem/Layout/styles.module.css";
import DocItemStyles from "@docusaurus/theme-classic/lib/theme/TOC/styles.module.css";
import DocBreadcrumbs from "@docusaurus/theme-classic/lib/theme/DocBreadcrumbs/styles.module.css";
import MainStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Main/styles.module.css";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import AdminNoAccess from "../AdminNoAccess";

interface Props {
    title: string;
    subCategory?: string;
}

export default function AdminPageLayout({ children, title, subCategory }: PropsWithChildren<Props>) {
    const [ok, setOk] = useState<boolean | null>(false);

    useEffect(() => {
        checkSession();
    }, []);

    const checkSession = async () => {
        try {
            const response = await fetch("https://data-api.glitch.je/me/session", { credentials: "include" });
            const data = await response.json();

            if (data && data.user?.siteAdmin) {
                setOk(true);
            } else {
                setOk(false);
            }
        } catch {
            setOk(false);
        }
    }

    if (!ok) {
        return <AdminNoAccess />
    }

    return (
        <Layout title={title}>
            <div className={styles.adminHeader}>
                Admin Area
            </div>
            <div className={DocPageStyles.docPage}>
                <AdminSidebar />

                <main className={clsx(MainStyles.docMainContainer)}>
                    <div className={clsx("container", "padding-top--md", "padding-bottom--lg")}>
                        <div className={DocItemStyles.docItemContainer}>
                            <article>
                                <nav className={DocBreadcrumbs.breadcrumbsContainer}>
                                    <ul className="breadcrumbs">
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
                                <div className={clsx(ThemeClassNames.docs.docMarkdown, "marldown")}>
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