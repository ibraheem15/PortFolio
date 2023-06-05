import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Aos from "aos";
function Layout({ children }) {
  useEffect(() => {
    Aos.refresh()
  }, [])
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
