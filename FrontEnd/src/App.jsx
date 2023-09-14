// REACT LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";
// REACT LIBRARY

// COMPONENTS & IMAGES
import Beranda from "./user/Beranda";
import SignIn from "./user/auth/Login";
import SignUp from "./user/auth/Register";

import Dashboard from "./components/Pages/Dashboard";

import Category from "./components/Pages/Product/Category";
import Product from "./components/Pages/Product/Product";

import Users from "./components/Pages/Account/Users";
import Add from "./components/Pages/Account/Add";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
// COMPONENTS & IMAGES

// CSS
import "./App.css";
// CSS

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* ADMIN */}
          <Route index element={<Beranda />} />
          <Route path="/User/Register" element={<SignUp />} />
          <Route path="/User/Login" element={<SignIn />} /> 
          {/* ADMIN */}

          <Route path="/Admin/Login" element={<Login />} /> 
          <Route path="/Admin/Dashboard" element={<Dashboard />} /> 
          
          <Route path="/Users" element={<Users />} />
          <Route path="/Add" element={<Add />} />

          <Route path="/Category" element={<Category />} />
          <Route path="/Product" element={<Product />} />

          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;