import React from "react";
import UserList from "./User/UserList";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";

const Main = () => {
  return (
    <div>
      <h1>Hola desde main</h1>
      <UserList />
      <AddUser />
      <EditUser />
    </div>
  );
};

export default Main;
