import AdminPageLayout from "@site/src/components/admin/AdminPageLayout";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";

export default function UsersPage(): JSX.Element {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            //const response = await fetch("https://data-api.glitch.je/_admin/users");
            //setUsers(await response.json());
            setUsers([
                {
                    id: "a1f5c4d8-1234-4b6e-9f21-8e7cde45ab67",
                    createdAt: "2025-08-26 10:15:32",
                    email: "alice@example.com",
                    password: "$2b$10$X1yZaFAKEhashValueHere12345678",
                    siteAdmin: true
                },
                {
                    id: "b2e6d5f9-5678-4c8f-8d32-9f8ade67bc89",
                    createdAt: "2025-08-25 14:48:05",
                    email: "bob@example.com",
                    password: "$2b$10$AnotherFAKEhashValueHere987654",
                    siteAdmin: false
                },
                {
                    id: "c3f7e6g0-9012-4d9a-7e43-af9bce89cd01",
                    createdAt: "2025-08-24 08:22:11",
                    email: "charlie@example.com",
                    password: "$2b$10$YetAnotherFakeHashValueHere123",
                    siteAdmin: false
                }
            ]);
        } catch (e) {
            console.error("Error fetching users:", e);
        }
    }

    return (
        <AdminPageLayout title="Users">
            <Heading as="h1">Users</Heading>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Joined</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</td>
                            <td>
                                <button>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminPageLayout>
    );
}