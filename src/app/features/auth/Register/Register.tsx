import React, { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../../../../types/user";
import { createUser } from "../../../../API/appApi";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response: User = await createUser({ username, email });
      if (response) {
        console.log("Success");
      } else {
        throw new Error("Error happen");
      }
    } catch (error: any) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <section>
        <div>Loading...</div>
      </section>
    );
  }
  return (
    <section>
      <div>
        <p>{errorMsg}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            onChange={handleUsername}
          />
          <input type="text" placeholder="Enter Email" onChange={handleEmail} />
          <button type="submit">Register</button>
          <Link to="/userList">
            <button>UserList</button>
          </Link>
          <Link to="/getbyid">
            <button>GetById</button>
          </Link>
          <Link to="/delete">
            <button>Delete</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Register;
