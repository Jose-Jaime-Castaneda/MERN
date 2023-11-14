import React from "react";
import '../Css/main.css'
import UserList from "./User/UserList";
import AddUser from "./User/AddUser";
import EditUser from "./User/EditUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className="mainContent">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">CRUD MERN stack test</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="agregarusuario">Agregar usuario</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/agregarusuario" element={<AddUser />} />
          <Route path="/editarusuario" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
