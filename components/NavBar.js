import React from "react";
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

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { asPath } = useRouter();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand justify="start">
          <Link href="/" color="success">
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
          <Link href="contact" id="NavContact" color="foreground" id="NavCon">
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
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
