import React from "react";
import Button from "../components/ui/Button";
import Layout from "@theme/Layout";
import { FaCheck } from "react-icons/fa6";

export default function Test() {
    return (
        <Layout title="Test">
            <div style={{ display: "flex", flexDirection: "row", gap: "15px", padding: "50px" }}>
                <Button variant="primary">Submit</Button>
                <Button variant="secondary">Submit</Button>
                <Button variant="danger">Delete</Button>
                <Button>Submit</Button>
                <Button>
                    <FaCheck />
                </Button>

                <Button variant="primary" useSmallerPadding>Submit</Button>
                <Button variant="secondary" useSmallerPadding>Submit</Button>
                <Button variant="danger" useSmallerPadding>Delete</Button>
                <Button useSmallerPadding>Submit</Button>
                <Button useSmallerPadding>
                    <FaCheck />
                </Button>
            </div>
        </Layout>
    )
}