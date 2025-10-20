import AdminPageLayout from "@site/src/components/admin/AdminPageLayout";
import Flex from "@site/src/components/helper/Flex";
import Button from "@site/src/components/ui/Button";
import { DataTable } from "@site/src/components/ui/DataTable";
import FormGroup from "@site/src/components/ui/FormGroup";
import Modal from "@site/src/components/ui/Modal";
import Switch from "@site/src/components/ui/Switch";
import { User } from "@site/src/models/User";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus, FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../../config.json";

export default function UsersPage(): JSX.Element {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers(true);
    }, []);

    const fetchUsers = async (firstRun?: boolean) => {
        try {
            const response = await fetch(`${config.apiUrl}/admin/users`, { credentials: "include" });

            if (response.ok) {
                setUsers((await response.json()).results);

                if (!firstRun) {
                    toast("Fetched users", { type: "success" });
                }
            } else {
                toast("Failed to fetch users", { type: "error" });
            }
        } catch (e) {
            toast(e.message, { type: "error" });
            console.error("Error fetching users:", e);
        }
    }

    const deleteUser = async (user) => {
        try {
            const shouldDelete = confirm("Are you sure you want to delete this user?");

            if (shouldDelete) {
                const response = await fetch(`${config.apiUrl}/admin/users/${user.id}`, {
                    method: "DELETE",
                    credentials: "include"
                });
                window.location.reload();
            }
        } catch (e) {
            toast(e.message, { type: "error" });
            console.error("Error deleting user:", e);
        }
    }

    return (
        <AdminPageLayout title="Users">
            <Heading as="h1">Users</Heading>

            <Button
                variant="primary"
                style={{ marginBottom: "20px" }}
                onClick={() => setCreateModalOpen(true)}
            >
                <FaPlus style={{ marginRight: "8px" }} /> Create User
            </Button>

            <DataTable
                data={users}
                onReload={() => fetchUsers()}
                columns={[
                    { key: "email", header: "Email" },
                    {
                        key: "createdAt",
                        header: "Joined",
                        render: (user: any) =>
                            new Date(user.createdAt).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })
                    },
                    {
                        key: "id",
                        header: "ID",
                        render: (user: any) => user.id
                    },
                    {
                        key: "actions",
                        header: "",
                        render: (user: any) => (
                            <Flex gap="6px">
                                <Button useSmallerPadding variant="secondary" onClick={() => { setSelectedUser(user); setEditModalOpen(true); }}>
                                    <FaEdit />
                                </Button>
                                <Button useSmallerPadding variant="danger" onClick={() => deleteUser(user)}>
                                    <FaTrashCan />
                                </Button>
                            </Flex>
                        )
                    }
                ]}
            />

            <EditModal
                isOpen={editModalOpen}
                onClose={() => setEditModalOpen(false)}
                user={selectedUser}
            />
            <CreateModal
                isOpen={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
            />
        </AdminPageLayout>
    );
}

interface EditModalProps {
    isOpen: boolean;
    onClose: () => void;
    user: any;
}

function EditModal({ isOpen, onClose, user }: EditModalProps) {
    const [email, setEmail] = useState("");
    const [siteAdmin, setSiteAdmin] = useState(false);

    useEffect(() => {
        setEmail(user?.email || "");
        setSiteAdmin(Boolean(user?.siteAdmin || false))
    }, [isOpen]);

    const updateUser = async () => {
        try {
            const response = await fetch(`${config.apiUrl}/admin/users/${user?.id}`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ email, siteAdmin })
            });
            onClose();
            window.location.reload();
        } catch (e) {
            toast(e.message, { type: "error" });
            console.error("Error updating user:", e);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Edit User"
        >
            <p>{user?.id}</p>

            <Flex direction="column" gap="5px" style={{ marginBottom: "20px" }}>
                <FormGroup label="Email">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup label="Site Admin">
                    <Switch
                        checked={siteAdmin}
                        onChange={(checked) => setSiteAdmin(checked)}
                    />
                </FormGroup>
            </Flex>

            <Button variant="secondary" onClick={() => updateUser()}>
                Update
            </Button>
        </Modal>
    )
}

interface CreateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

function CreateModal({ isOpen, onClose }: CreateModalProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [siteAdmin, setSiteAdmin] = useState(false);

    useEffect(() => {
        setEmail("");
        setPassword("");
        setSiteAdmin(false)
    }, [isOpen]);

    const createUser = async () => {
        try {
            const response = await fetch(`${config.apiUrl}/admin/users/new`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ email, password, siteAdmin })
            });
            onClose();
            window.location.reload();
        } catch (e) {
            console.error("Error creating user:", e);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Create User"
        >
            <Flex direction="column" gap="6px" style={{ marginBottom: "15px" }}>
                <FormGroup label="Email">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormGroup>

                <FormGroup label="Password">
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </FormGroup>

                <FormGroup label="Site Admin">
                    <Switch
                        checked={siteAdmin}
                        onChange={(checked) => setSiteAdmin(checked)}
                    />
                </FormGroup>
            </Flex>

            <Button variant="secondary" onClick={() => createUser()}>
                Create
            </Button>
        </Modal>
    )
}