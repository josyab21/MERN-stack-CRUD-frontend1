import React, { useState, useEffect } from "react";
import { getUsers, deleteUser } from "../../../../API/appApi";
import { User } from "../../../../types/user";

const Delete: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId);
      // Remove the deleted user from the list
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <strong>Username:</strong> {user.username},{" "}
              <strong>Email:</strong> {user.email}
            </div>

            <button onClick={() => handleDelete(user.id || " ")}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Delete;
