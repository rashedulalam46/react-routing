import React from "react";  
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";  

function Layout() {
  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* The current page (Home/About/Contact) will render here */}
      </main>
      <Footer />
    </>
  );
}


export default Layout;