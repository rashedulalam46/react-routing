import React from "react";  
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";  

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* Renders current page content here */}
      </main>
      <Footer />
    </>
  );
}


export default Layout;