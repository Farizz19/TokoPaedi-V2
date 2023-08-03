// REACT LIBRARY
import { BrowserRouter, Routes, Route } from "react-router-dom";
// REACT LIBRARY

// COMPONENTS & IMAGES
import Dashboard from "./components/Pages/Dashboard";
import Category from "./components/Pages/Category/Category";

import Login from "./components/Auth/Login";
// COMPONENTS & IMAGES

// CSS
import "./App.css";
import Users from "./components/Pages/Account/Users";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


