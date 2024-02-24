import React from "react";
import Register from "./features/auth/Register/Register";
import { Route, Routes } from "react-router-dom";
import UserList from "./features/auth/Register/userList";
import UpdateUserForm from "./features/auth/Register/UpdateUserForm";
import UserDetails from "./features/auth/Register/getById";
import Delete from "./features/auth/Register/Delete";

const App: React.FC = () => {
  return (
    <div>
      <h1>User Management App</h1>
      <Register />

      <Routes>
        <Route path="/userList" element={<UserList />} />
        <Route path="/update/:userId" element={<UpdateUserForm />} />
        <Route path="/getbyid/:userId" element={<UserDetails />} />
        <Route path="/delete" element={<Delete />} />
      </Routes>
    </div>
  );
};

export default App;
