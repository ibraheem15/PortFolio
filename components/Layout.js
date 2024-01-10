import { useEffect } from "react";
import Footer from "./Footer";
import Aos from "aos";
import Navbar from "./Navbar";

function Layout({ children }) {
  useEffect(() => {
    Aos.refresh();
  }, []);
  return (
    <div className="layout">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
