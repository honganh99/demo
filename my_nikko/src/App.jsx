import React from "react";
import Home from "./layout/home/Home";
import Login from "./layout/login/Login";
import Register from "./layout/register/Register";
import { Route, Routes } from "react-router-dom";
// import Products from "./layout/product/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/products" element={<Products />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
