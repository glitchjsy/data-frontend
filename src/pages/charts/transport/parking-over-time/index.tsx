import ParkingSpacesOverTime from "@site/src/components/charts/transport/ParkingSpacesOverTime";
import ChartsPageLayout from "@site/src/components/ChartsPageLayout";
import Heading from "@theme/Heading";
import Layout from "@theme/Layout";
import React from "react";

export default function ParkingCharts() {
    return (
        <ChartsPageLayout 
            title="Parking Spaces Over Time"
            subCategory="Transport"
        >
            <Heading as="h1">Parking Spaces Over Time</Heading>
            <p>
                Available parking spaces in multi storey carparks, display over time. The information is updated roughly every 5 minutes.
            </p>
            <ParkingSpacesOverTime />
        </ChartsPageLayout>
    )
}