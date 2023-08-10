// REACT LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";
// REACT LIBRARY

// COMPONENTS & IMAGES
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
          <Route index element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          
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


