import React from "react";
import '../Css/main.css'
import UserList from "./User/UserList";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";

const Main = () => {
  return (
    <main className="mainContent">
      <div>
        <h1>CRUD MERN stack test</h1>
        <UserList />
        <AddUser />
        <EditUser />
      </div>
    </main>
  );
};

export default Main;
