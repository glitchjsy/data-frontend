import React from "react";
import { PropsWithChildren } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    gap: string;
    direction?: "row" | "column";
}

export default function Flex({ 
    gap, 
    direction = "row",
    children, 
    ...rest 
}: PropsWithChildren<Props>) {
    return (
        <div style={{ display: "flex", gap, flexDirection: direction }} {...rest}>
            {children}
        </div>
    )
}