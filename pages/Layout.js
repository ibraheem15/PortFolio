import { useEffect } from "react";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import Aos from "aos";

function Layout({ children }) {
  useEffect(() => {
    Aos.refresh();
  }, []);
  return (
    <div className="layout">
      <Navbarr />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
