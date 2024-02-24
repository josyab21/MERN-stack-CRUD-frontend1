import React, { useState, useEffect } from "react";
import { getUsers } from "../../../../API/appApi";
import { User } from "../../../../types/user";
import { Link } from "react-router-dom";

const UserList: React.FC = () => {
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

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/update/${user.id}`}>
              <div>
                <strong>Username:</strong> {user.username},{" "}
                <strong>Email:</strong> {user.email}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
