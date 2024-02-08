import React, { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
} from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Navbarr() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { asPath } = useRouter();

  const menuItems = [
    {
      name: "Home",
      linkk: "/PortFolio",
    },
    {
      name: "Education and Certifications",
      linkk: "/PortFolio/education",
    },
    {
      name: "Projects",
      linkk: "/PortFolio/Projects",
    },
    {
      name: "Contact Me",
      linkk: "/PortFolio/contact",
    },
  ];

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    handleResize(); // Initial size

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand justify="start">
          <Link href="/PortFolio" color="success">
            Ibraheem.Rehman();
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={asPath === "/PortFolio"}>
          <Link href="/PortFolio" id="NavHome">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/PortFolio/education"
            isActive={asPath === "/PortFolio/education"}
            id="NavEdu"
          >
            Education and Certifications
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/PortFolio/Projects"
            isActive={asPath === "/PortFolio/Projects"}
            id="NavPro"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive={asPath === "/PortFolio/contact"}>
          <Link
            href="/PortFolio/contact"
            id="NavContact"
            color="foreground"
            id="NavCon"
          >
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="success"
            href="/PortFolio/M_Ibraheem_Rehman_Qazi_CV.pdf"
            variant="flat"
            size={windowSize.width > 640 ? "md" : "sm"}
          >
            Download CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.linkk}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
