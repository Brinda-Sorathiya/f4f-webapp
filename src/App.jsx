import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./pages/Login";

const App = () => {
  const [login, setLogin] = useState(false)
  return (
    <>
      {login?<Login setLgn = {setLogin}/>:<></>}
      <div >
        <Navbar setLgn = {setLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
