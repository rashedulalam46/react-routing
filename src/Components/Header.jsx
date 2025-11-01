import React from "react";  
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#282c34", color: "white", padding: "10px" }}>
      <h1>My React Routing App</h1>
    </header>
  );
}
export default Header;