import AdminPageLayout from "@site/src/components/admin/AdminPageLayout";
import FormGroup from "@site/src/components/ui/FormGroup";
import Modal from "@site/src/components/ui/Modal";
import { User } from "@site/src/models/User";
import Heading from "@theme/Heading";
import React, { useEffect, useState } from "react";

export default function UsersPage(): JSX.Element {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [createModalOpen, setCreateModalOpen] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch("https://api.opendata.je/admin/users", { credentials: "include" });
            setUsers((await response.json()).results);
        } catch (e) {
            console.error("Error fetching users:", e);
        }
    }

    const deleteUser = async (user) => {
        try {
            const shouldDelete = confirm("Are you sure you want to delete this user?");

            if (shouldDelete) {
                const response = await fetch(`https://api.opendata.je/admin/users/${user.id}`, {
                    method: "DELETE",
                    credentials: "include" 
                });
                window.location.reload();
            }
        } catch (e) {
            console.error("Error deleting user:", e);
        }
    }

    return (
        <AdminPageLayout title="Users">
            <Heading as="h1">Users</Heading>

            <button
                className="btn btn-primary"
                style={{ marginBottom: "20px" }}
                onClick={() => setCreateModalOpen(true)}
            >
                Create User
            </button>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Joined</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user.id}>
                            <td>{user.email}</td>
                            <td>{new Date(user.createdAt).toLocaleDateString("en-GB", {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            })}</td>
                            <td>
                                <button
                                    className="btn btn-primary"
                                    style={{ marginRight: "10px" }}
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setEditModalOpen(true);
                                    }}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn btn-red"
                                    onClick={() => deleteUser(user)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

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
            const response = await fetch(`https://api.opendata.je/admin/users/${user?.id}`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({ email, siteAdmin })
            });
            onClose();
            window.location.reload();
        } catch (e) {
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

            <FormGroup label="Email">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>

            <FormGroup label="Site Admin">
                <input
                    type="checkbox"
                    checked={siteAdmin}
                    onChange={(e) => setSiteAdmin(e.target.checked)}
                />
            </FormGroup>

            <button className="btn" onClick={() => updateUser()}>Update</button>
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
            const response = await fetch(`https://api.opendata.je/admin/users/new`, {
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
                <input
                    type="checkbox"
                    checked={siteAdmin}
                    onChange={(e) => setSiteAdmin(e.target.checked)}
                />
            </FormGroup>

            <button className="btn" onClick={() => createUser()}>Create</button>
        </Modal>
    )
}