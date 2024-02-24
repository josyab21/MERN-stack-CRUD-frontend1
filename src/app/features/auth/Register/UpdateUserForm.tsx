import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../../../types/user";
import { getUserById, updateUser } from "../../../../API/appApi";

const UpdateUserForm: React.FC = () => {
  const userId: string = useParams<{ userId: string }>().userId || "";

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!userId) return;
        const response = await getUserById(userId);
        if (!response) {
          throw new Error("Failed to fetch user");
        }
        setUser(response); // Access data property directly
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!user) return;
      await updateUser?.(userId, user); // Optional chaining
      console.log("User updated successfully");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      if (!prevUser) return null; // Check for null user
      return { ...prevUser, [name]: value };
    });
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
