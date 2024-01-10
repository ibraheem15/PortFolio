import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aos from "aos";

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
