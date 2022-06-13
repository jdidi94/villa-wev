import React from "react";
// import agent from './agent'
import Register from "./authentication/register";
import Home from "./welcome/home";
import Login from "./authentication/login";
import Profile from "./authentication/profile";
import "./App.css";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <header className="App">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </header>
  );
};
// const App = () => {
//   let routes = useRoutes([
//     { path: "/home", element: <Home /> },
//     { path: "/register", element: <Register /> },
//     { path: "/login", element: <Login /> },

//     { path: "/profile", element: <Profile /> },

//     // ...
//   ]);
//   return routes;
// };

export default App;
