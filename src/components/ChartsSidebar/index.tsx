import { PropSidebarItem, PropSidebarItemCategory } from "@docusaurus/plugin-content-docs";
import SidebarStyles from "@docusaurus/theme-classic/lib/theme/DocPage/Layout/Sidebar/styles.module.css";
import { ThemeClassNames } from "@docusaurus/theme-common";
import DocSidebar from "@theme/DocSidebar";
import clsx from "clsx";
import React from "react";

const items = [
    {
        type: "link",
        label: "Charts Home",
        href: "/charts"
    },
    {
        type: "category",
        label: "Transport",
        items: [
            {
                type: "link",
                label: "Parking Spaces Over Time",
                href: "/charts/transport/parking-over-time"
            },
            {
                type: "link",
                label: "Vehicle Colours",
                href: "/charts/transport/vehicle-colors"
            },
            {
                type: "link",
                label: "Vehicle Makes",
                href: "/charts/transport/vehicle-makes"
            },
            {
                type: "link",
                label: "Bus Passengers Weekly",
                href: "/charts/transport/bus-passengers-weekly"
            },
            {
                type: "link",
                label: "Road Traffic",
                href: "/charts/transport/road-traffic"
            },
            {
                type: "link",
                label: "Driving Test Results",
                href: "/charts/transport/driving-test-results"
            }
        ]
    },
    // {
    //     type: "category",
    //     label: "Other",
    //     items: [
    //         {
    //             type: "link",
    //             label: "Customer & Local Services Queues Over Time",
    //             href: "/charts/other/cls-queues-over-time"
    //         }
    //     ]
    // }
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