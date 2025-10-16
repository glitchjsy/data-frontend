import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "danger";
    useSmallerPadding?: boolean;
}

export default function Button({
    children,
    variant = "primary",
    useSmallerPadding,
    className,
    ...rest
}: PropsWithChildren<Props>) {
    const { colorMode } = useColorMode();

    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                { [styles.smallerPadding]: useSmallerPadding },
                className
            )}
            data-theme={colorMode}
            {...rest}
        >
            {children}
        </button>
    );
}
