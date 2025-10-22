import AdminPageLayout from "@site/src/components/admin/AdminPageLayout";
import Flex from "@site/src/components/helper/Flex";
import Button from "@site/src/components/ui/Button";
import { DataTable } from "@site/src/components/ui/DataTable";
import FormGroup from "@site/src/components/ui/FormGroup";
import Modal from "@site/src/components/ui/Modal";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";
import { FaInfo, FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import config from "../../../../config.json";
import Select from "@site/src/components/ui/Select";
import Input from "@site/src/components/ui/Input";

export default function ApiKeysPage(): JSX.Element {
    const [keys, setKeys] = useState([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    useEffect(() => {
        fetchKeys(true);
    }, []);

    const fetchKeys = async (firstRun?: boolean) => {
        try {
            const response = await fetch(`${config.apiUrl}/admin/api-keys`, { credentials: "include" });

            if (response.ok) {
                setKeys((await response.json()).results);

                if (!firstRun) {
                    toast("Fetched API keys", { type: "success" });
                }
            } else {
                toast("Failed to fetch API keys", { type: "error" });
            }
        } catch (e) {
            toast(e.message, { type: "error" });
            console.error("Error fetching API keys:", e);
        }
    }

    const deleteToken = async (token) => {
        try {
            const shouldDelete = confirm("Are you sure you want to delete this API key?");

            if (shouldDelete) {
                const response = await fetch(`${config.apiUrl}/admin/api-keys/${token.id}`, {
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

            <Button
                variant="primary"
                style={{ marginBottom: "20px" }}
                onClick={() => setCreateModalOpen(true)}
            >
                Create API Key
            </Button>

            <DataTable
                data={keys}
                onReload={() => fetchKeys()}
                columns={[
                    { key: "userEmail", header: "User" },
                    {
                        key: "createdAt",
                        header: "Created",
                        render: (user: any) =>
                            new Date(user.createdAt).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                    },
                    { key: "token", header: "Key" },
                    { key: "summary", header: "Summary" },
                    { key: "totalUses", header: "Uses" },
                    {
                        key: "actions",
                        header: "",
                        render: (token: any) => (
                            <Flex gap="6px">
                                <Button useSmallerPadding variant="secondary" onClick={() => alert(token.id)}>
                                    <FaInfo />
                                </Button>
                                <Button useSmallerPadding variant="danger" onClick={() => deleteToken(token)}>
                                    <FaTrashCan />
                                </Button>
                            </Flex>
                        )
                    }
                ]}
            />

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
            const response = await fetch(`${config.apiUrl}/admin/users`, { credentials: "include" });
            setUsers((await response.json())?.results);
        } catch (e) {
            console.error("Error fetching users:", e);
        }
    }

    const createToken = async () => {
        try {
            if (userId === "" || userId === "null") {
                return;
            }
            const response = await fetch(`${config.apiUrl}/admin/api-keys/new`, {
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
                <Input
                    type="text"
                    value={summary}
                    maxLength={200}
                    onChange={(e) => setSummary(e.target.value)}
                />
            </FormGroup>

            <FormGroup label="User">
                <Select
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                >
                    <option value="null">Please select a user</option>
                    {users?.map(user => (
                        <option key={user.id} value={user.id}>{user.email}</option>
                    ))}
                </Select>
            </FormGroup>

            <Button variant="secondary" onClick={() => createToken()}>
                Create
            </Button>
        </Modal>
    )
}