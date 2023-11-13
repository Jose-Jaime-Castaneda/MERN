import React from "react";
import '../Css/main.css'
import UserList from "./User/UserList";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main className="mainContent">
      <div>
        <h1>CRUD MERN stack test</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/agregarusuario" element={<AddUser />} />
            <Route path="/editarusuario" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </main>
  );
};

export default Main;
