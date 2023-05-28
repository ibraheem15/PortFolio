import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

// import { Layout } from "../pages/Layout";
import { Navbar, Button, Link, Text, tuple } from "@nextui-org/react";
import { useRouter } from "next/router";

function NavBar() {
  const { asPath } = useRouter();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : "100%"
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Navbar
      variant="static"
      height="106px"
      className={styles.backgroundcolor}
      css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
      }}
      style={{
        // width: typeof window !== "500px" ? window.innerWidth : "100%",
        width: windowWidth,
      }}
    >
      <Navbar.Brand>
        <Navbar.Toggle
          aria-label="toggle navigation"
          className={styles.navbar_toggle_hide}
        />
        <Text b color="white" hideIn="xs" className="Name">
          Ibraheem.Rehman();
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        hideIn="xs"
        variant="underline"
        gap="$16"
        css={{
          $$navbarBackgroundColor: "transparent",
          $$navbarBlurBackgroundColor: "transparent",
          $$navbarItemFontWeight: "450",
          $$navbarItemFontSize: "1.1rem",
        }}
      >
        {asPath === "/" ? (
          <Navbar.Link href="/" isActive id="NavHome">
            Home
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/" id="NavHome">
            Home
          </Navbar.Link>
        )}
        {asPath === "/education" ? (
          <Navbar.Link href="/education" isActive id="NavEdu">
            Education and Certifications
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/education" id="NavEdu">
            Education and Certifications
          </Navbar.Link>
        )}

        {asPath === "/Projects" ? (
          <Navbar.Link href="/Projects" isActive id="NavPro">
            Projects
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/Projects" id="NavPro">
            Projects
          </Navbar.Link>
        )}

        {asPath === "/contact" ? (
          <Navbar.Link href="/contact" isActive id="NavCon">
            Contact and Resume
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/contact" id="NavCon">
            Contact and Resume
          </Navbar.Link>
        )}
      </Navbar.Content>
      <Navbar.Collapse
        style={{
          width: typeof window !== "undefined" ? window.innerWidth : "100%",
          backgroundColor: "transparent",
        }}
      >
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href="/"
          >
            Home
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href="/education"
          >
            Education and Certifications
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href="/Projects"
          >
            Projects
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href="/contact"
          >
            Contact and Resume
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
