import React, { ReactNode } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./styles.module.css";
import Button from "../Button";
import { FaRotate, FaRotateRight } from "react-icons/fa6";

interface Column<T> {
    key: keyof T | string;
    header: string;
    render?: (item: T) => ReactNode;
}

interface Props<T> {
    columns: Column<T>[];
    data: T[];
    onReload?: () => void;
}

export function DataTable<T extends { id: string | number }>({
    columns,
    data,
    onReload
}: Props<T>) {
    const { colorMode } = useColorMode();

    return (
        <div className={styles.tableWrapper} data-theme={colorMode}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {columns.map(col => (
                            <th key={col.key as string}>{col.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data?.map(item => (
                        <tr key={item.id}>
                            {columns.map(col => (
                                <td key={col.key as string}>
                                    {col.render ? col.render(item) : (item[col.key as keyof T] as ReactNode)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {onReload && (
                <Button
                    variant="secondary"
                    useSmallerPadding
                    onClick={() => onReload()}
                >
                    <FaRotate style={{ marginRight: "6px" }} /> Reload
                </Button>
            )}
        </div>
    )
}
