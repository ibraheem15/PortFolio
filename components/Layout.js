import { useEffect } from "react";
import NavBar from "./NavBar";
import Aos from "aos";
function Layout({ children }) {
  useEffect(() => {
    Aos.refresh()
  }, [])
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default Layout;
