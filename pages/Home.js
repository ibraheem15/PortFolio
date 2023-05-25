import Link from "next/link";
import styles from "./Home.module.css";
import { Button, Spacer, Grid } from "@nextui-org/react";
import ComputerCanvas from "./Computer";
import React, { useEffect, useState, useLayoutEffect } from "react";
import { debounce } from "lodash";
import { Center } from "@react-three/drei";

export default function Home() {
  const [justify, setJustify] = React.useState("flex-start");
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setJustify(width < 600 ? "center" : "flex-start");
      setWidth(width);
    };

    handleResize(); // Call it initially to set the initial value
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <section
        className={styles.FirstView}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.Homeintro}>
          <h1 className={styles.Homeh1}>Hello👋.</h1>
          {/* <h1 className="Homeh1"></h1> */}
          {/* <h1 className="Homeh1"></h1> */}
          <h3 className={styles.Homeh3}>
            I'm <span style={{ color: "#3bfff5" }}>Ibraheem ur Rehman</span> 👨‍💻
            Software Engineer, Footballer ⚽, Gamer 🎮 Always Learning 📖.
          </h3>
          <Spacer x={1.5} />
          <Grid.Container
            gap={2}
            className={styles.buttonsCss}
            justify={justify}
          >
            <Spacer x={0.5} />
            <Button
              auto
              css={{ backgroundColor: "#e4405f" }}
              icon={
                <img src="https://img.icons8.com/ios/30/000000/instagram-new.png" />
              }
              onClick={() =>
                window.open("https://www.instagram.com/ibraheem_rehman/")
              }
            />
            <Spacer x={0.5} />
            <Button
              auto
              css={{ backgroundColor: "#1da1f2" }}
              color="#1da1f2"
              icon={
                <img src="https://img.icons8.com/ios-filled/30/000000/twitter.png" />
              }
              onClick={() => window.open("https://twitter.com/ibraheem_rehman")}
            />
            <Spacer x={0.5} />
            <Button
              auto
              css={{ backgroundColor: "#ffff" }}
              icon={
                <img src="https://img.icons8.com/ios-filled/30/000000/github.png" />
              }
              onClick={() => window.open("https://github.com/ibraheem15")}
            />
            <Spacer x={0.5} />
            <Button
              auto
              css={{ backgroundColor: "#0e76a8" }}
              icon={
                <img src="https://img.icons8.com/ios-filled/30/linkedin.png" />
              }
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/m-ibraheem-rehman-qazi-711752244/"
                )
              }
            />
            <Spacer x={0.5} />
            <Button
              auto
              css={{ backgroundColor: "#ea4335" }}
              //gmail
              icon={
                <img src="https://img.icons8.com/ios-filled/30/000000/gmail.png" />
              }
              onClick={() => window.open("mail.google.com")}
            />
          </Grid.Container>
          <Spacer y={1.5} />
          <Button
            size={"lg"}
            color="success"
            ghost
            className={styles.contactMe}
          >
            <Link className={styles.link_contactme} href="/education">
              Contact Me
            </Link>
          </Button>
        </div>
        <div className={styles.computer}>
          <ComputerCanvas width={width} key={width} />
        </div>
      </section>
      <section >
        <div>
          <h1 className="h1WhatIdo">Here is what I do</h1>
        </div>
      </section>
    </div>
  );
}
