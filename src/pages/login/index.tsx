import Layout from "@theme/Layout";
import React, { useState } from "react";
import styles from "./styles.module.css";
import FormGroup from "@site/src/components/ui/FormGroup";
import clsx from "clsx";

export default function Login(): JSX.Element {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            const response = await fetch("https://api.opendata.je/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            window.location.href = "/";
            console.log("Login successful:", data);
        } catch (e) {
            console.error("Error logging in:", e);
        }
    }

    return (
        <Layout title="Login">
            <div className="container" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                <div className={styles.authCard}>
                    <h2 className={styles.title}>Login</h2>

                    <FormGroup label="Email">
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <FormGroup label="Password">
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </FormGroup>

                    <button
                        className={clsx("btn btn-primary", styles.loginButton)}
                        onClick={() => login()}
                    >
                        Login
                    </button>
                </div>
            </div>
        </Layout>
    );
}
