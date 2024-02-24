import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../../../types/user";
import { getUserById } from "../../../../API/appApi";

const UserDetails: React.FC = () => {
  const userId: string = useParams<{ userId: string }>().userId || "";
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const fetchedUser = await getUserById(userId);
        setUser(fetchedUser);
      } catch (error: any) {
        throw new Error(error.message);
      }
    };

    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
