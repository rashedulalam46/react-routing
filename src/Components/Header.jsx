import React from "react";  
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <header style={{ backgroundColor: "#282c34", color: "white", padding: "10px" }}>
      <h1>React Routing</h1>
    </header>
  );
}
export default Header;