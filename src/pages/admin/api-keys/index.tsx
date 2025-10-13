import AdminPageLayout from "@site/src/components/admin/AdminPageLayout";
import FormGroup from "@site/src/components/ui/FormGroup";
import Modal from "@site/src/components/ui/Modal";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";

export default function ApiKeysPage(): JSX.Element {
    const [keys, setKeys] = useState([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    useEffect(() => {
        fetchKeys();
    }, []);

    const fetchKeys = async () => {
        try {
            const response = await fetch("https://api.opendata.je/admin/tokens", { credentials: "include" });
            setKeys((await response.json()).results);
        } catch (e) {
            console.error("Error fetching API keys:", e);
        }
    }

    const deleteToken = async (token) => {
        try {
            const shouldDelete = confirm("Are you sure you want to delete this API key?");

            if (shouldDelete) {
                const response = await fetch(`https://api.opendata.je/admin/tokens/${token.id}`, {
                    method: "DELETE",
                    credentials: "include"
                });
                window.location.reload();
            }
        } catch (e) {
            console.error("Error deleting API key:", e);
        }
    }

    return (
        <AdminPageLayout title="API Keys">
            <Heading as="h1">API Keys</Heading>

            <button
                className="btn btn-primary"
                style={{ marginBottom: "20px" }}
                onClick={() => setCreateModalOpen(true)}
            >
                Create API Key
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Created</th>
                        <th>User</th>
                        <th>Key</th>
                        <th>Summary</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {keys?.map(key => (
                        <tr key={key.id}>
                            <td>{new Date(key.createdAt).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</td>
                            <td>{key.userEmail}</td>
                            <td>{key.token}</td>
                            <td>{key.summary}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    style={{ marginRight: "5px" }}
                                    onClick={() => alert(key.id)}
                                >
                                    ID
                                </button>
                                <button
                                    className="btn btn-red"
                                    onClick={() => deleteToken(key)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <CreateModal
                isOpen={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
            />
        </AdminPageLayout>
    );
}

interface CreateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function CreateModal({ isOpen, onClose }: CreateModalProps) {
    const [userId, setUserId] = useState("");
    const [summary, setSummary] = useState("");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUserId("");
        setSummary("");
        fetchUsers();
    }, [isOpen]);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://api.opendata.je/admin/users", { credentials: "include" });
            setUsers((await response.json()).results);
        } catch (e) {
            console.error("Error fetching users:", e);
        }
    }

    const createToken = async () => {
        try {
            if (userId === "" || userId === "null") {
                return;
            }
            const response = await fetch(`https://api.opendata.je/admin/tokens/new`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ userId, summary })
            });
            onClose();
            window.location.reload();
        } catch (e) {
            console.error("Error creating API key:", e);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Create API Key"
        >
            <FormGroup label="Summary">
                <input
                    type="text"
                    value={summary}
                    maxLength={200}
                    onChange={(e) => setSummary(e.target.value)}
                />
            </FormGroup>

             <FormGroup label="Password">
                <select 
                    value={userId} 
                    onChange={(e) => setUserId(e.target.value)}
                >
                    <option value="null">Please select a user</option>
                    {users.map(user => (
                        <option key={user.id} value={user.id}>{user.email}</option>
                    ))}
                </select>
            </FormGroup>

            <button className="btn" onClick={() => createToken()}>Create</button>
        </Modal>
    )
}