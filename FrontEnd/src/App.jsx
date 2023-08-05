// REACT LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";
// REACT LIBRARY

// COMPONENTS & IMAGES
import Dashboard from "./components/Pages/Dashboard";

import Category from "./components/Pages/Product/Category";
import Product from "./components/Pages/Product/Product";

import Users from "./components/Pages/Account/Users";

import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
// import Register from "./components/Auth/Register";
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
          {/* <Route path="/Dashboard" element={<Layout />} /> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          
          <Route path="/Users" element={<Users />} />

          <Route path="/Category" element={<Category />} />
          <Route path="/Product" element={<Product />} />

          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


