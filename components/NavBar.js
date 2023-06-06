import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

// import { Layout } from "../pages/Layout";
import { Navbar, Button, Link, Text, tuple } from "@nextui-org/react";
import { useRouter } from "next/router";

function NavBar() {
  const { asPath } = useRouter();
  return (
    <Navbar
      variant="static"
      height="106px"
      className={styles.backgroundcolor}
      css={{
        $$navbarBackgroundColor: "transparent",
        $$navbarBlurBackgroundColor: "transparent",
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
          <Navbar.Link href="/PortFolio" isActive id="NavHome">
            Home
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/PortFolio" id="NavHome">
            Home
          </Navbar.Link>
        )}
        {asPath === "/PortFolio/education" ? (
          <Navbar.Link href="/PortFolio/education" isActive id="NavEdu">
            Education and Certifications
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/PortFolio/education" id="NavEdu">
            Education and Certifications
          </Navbar.Link>
        )}

        {asPath === "/PortFolio/Projects" ? (
          <Navbar.Link href="/PortFolio/Projects" isActive id="NavPro">
            Projects
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/PortFolio/Projects" id="NavPro">
            Projects
          </Navbar.Link>
        )}

        {asPath === "/PortFolio/contact" ? (
          <Navbar.Link href="/PortFolio/contact" isActive id="NavCon">
            Contact and Resume
          </Navbar.Link>
        ) : (
          <Navbar.Link href="/PortFolio/contact" id="NavCon">
            Contact and Resume
          </Navbar.Link>
        )}
      </Navbar.Content>
      <Navbar.Collapse>
        <Navbar.CollapseItem>
          <Link
            color="inherit"
            css={{
              minWidth: "100%",
            }}
            href="/PortFolio"
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
            href="/PortFolio/education"
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
            href="/PortFolio/Projects"
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
            href="/PortFolio/contact"
          >
            Contact and Resume
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
