import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";

import {
  Navbar,
  Button,
  Link,
  Text,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

import { useRouter } from "next/router";

function NavBarOld() {
  const { asPath } = useRouter();
  return (
    <Navbar
      // variant="static"
      position="static"
      height="106px"
      className={styles.navbar_content}
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
        <Text b color="white" className="Name">
          Ibraheem.Rehman();
        </Text>
      </Navbar.Brand>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <p className="font-bold text-inherit">Ibraheem.Rehman();</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
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
        {asPath === "/PortFolio" ? (
          <Link href="/PortFolio" isActive id="NavHome">
            Home
          </Link>
        ) : (
          <Link href="/PortFolio" id="NavHome">
            Home
          </Link>
        )}
        {asPath === "/PortFolio/education" ? (
          <Link href="/PortFolio/education" isActive id="NavEdu">
            Education and Certifications
          </Link>
        ) : (
          <Link href="/PortFolio/education" id="NavEdu">
            Education and Certifications
          </Link>
        )}

        {asPath === "/PortFolio/Projects" ? (
          <Link href="/PortFolio/Projects" isActive id="NavPro">
            Projects
          </Link>
        ) : (
          <Link href="/PortFolio/Projects" id="NavPro">
            Projects
          </Link>
        )}

        {asPath === "/PortFolio/contact" ? (
          <Link href="/PortFolio/contact" isActive id="NavCon">
            Contact and Resume
          </Link>
        ) : (
          <Link href="/PortFolio/contact" id="NavCon">
            Contact Me
          </Link>
        )}

        {/* donwload cv button */}
        {/* <a href='../public/M_Ibraheem_Rehman_Qazi_CV.pdf' download>Click to download</a> */}
        <Button auto color="success" ghost>
          <Link
            href="/PortFolio/M_Ibraheem_Rehman_Qazi_CV.pdf"
            style={{ color: "white" }}
          >
            Download CV
          </Link>
        </Button>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem
          active={asPath === "/PortFolio"}
          href="/PortFolio"
          id="NavHome"
        >
          Home
        </NavbarMenuItem>
      </NavbarMenu>
      {/* <Navbar.Collapse>
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
            Contact Me
          </Link>
        </Navbar.CollapseItem>
        <Navbar.CollapseItem>
          <Link
            href="/PortFolio/M_Ibraheem_Rehman_Qazi_CV.pdf"
            css={{
              minWidth: "100%",
            }}
            color="inherit"
          >
            Download CV
          </Link>
        </Navbar.CollapseItem>
      </Navbar.Collapse> */}
    </Navbar>
  );
}
export default NavBarOld;
