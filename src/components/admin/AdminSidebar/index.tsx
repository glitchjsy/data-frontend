import { PropSidebarItem, PropSidebarItemCategory } from "@docusaurus/plugin-content-docs";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import { ThemeClassNames } from "@docusaurus/theme-common";
import DocSidebar from "@theme/DocSidebar";
import clsx from "clsx";
import React from "react";

const items = [
    {
        type: "link",
        label: "Dashboard",
        href: "/admin"
    },
    {
        type: "link",
        label: "Users",
        href: "/admin/users"
    },
    {
        type: "link",
        label: "API Keys",
        href: "/admin/api-keys"
    }
] as any[];

export default function ChartsSidebar() {
    return (
        <aside
            className={clsx(
                ThemeClassNames.docs.docSidebarContainer,
                SidebarStyles.docSidebarContainer
            )}
        >
            <DocSidebar
                sidebar={items}
                path="/charts"
                onCollapse={function (): void {
                    throw new Error("Function not implemented.");
                }}
                isHidden={false}
            />
        </aside>
    )
}