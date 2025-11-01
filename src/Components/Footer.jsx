import React from "react";  
function Footer() {
  return (
    <footer style={{ backgroundColor: "#282c34", color: "white", padding: "10px", marginTop: "20px" }}>
      <p>© {new Date().getFullYear()} My React Routing App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;