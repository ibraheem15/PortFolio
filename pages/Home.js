import Link from "next/link";
import styles from "./Home.module.css";
import { Button, Spacer, Progress } from "@nextui-org/react";
import Computer2 from "./Computer2";
import React, { useEffect, useState, useLayoutEffect } from "react";
import aboutMe from "./AboutMe";
import AboutMeExplain from "./AboutMeExplain";
import { useProgressBarStore } from "../components/ProgressBarStore";
const components = { aboutMe, AboutMeExplain };

export default function Home() {
  const [justify, setJustify] = React.useState("flex-start");
  const [width, setWidth] = useState(0);
  const [loading, setLoading] = useState(true);
  const value = useProgressBarStore((state) => state.value);

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

  useEffect(() => {
    if (value === 100) {
      setLoading(false);
    }
  }, [value]);

  return (
    <div>
      <section
        className={styles.FirstView}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={styles.Homeintro}>
          <h1 className={styles.Homeh1}>Hello👋.</h1>
          <h3 className={styles.Homeh3}>
            I'm <span style={{ color: "#3bfff5" }}>Ibraheem ur Rehman</span> 👨‍💻
            Software Engineer, Footballer ⚽, Gamer 🎮 & Always Learning 📖.
          </h3>
          <Spacer x={1.5} />
          {/* <div className="grid grid-cols-2 gap-4 justify-center"> */}
          <div className="flex mb-5 mt-4 justify-center lg:justify-start">
            <Button
              isIconOnly
              auto
              className="bg-red-500"
              onClick={() =>
                window.open("https://www.instagram.com/ibraheem_rehman/")
              }
            >
              <img
                src="https://img.icons8.com/ios/50/000000/instagram-new.png"
                width="30"
                height="30"
              />
            </Button>
            <Spacer x={1.5} />
            <Button
              isIconOnly
              auto
              className="bg-blue-500"
              color="#1da1f2"
              onClick={() => window.open("https://twitter.com/ibraheem_rehman")}
            >
              <img
                src="https://img.icons8.com/ios-filled/60/000000/twitter.png"
                width="30"
                height="30"
              />
            </Button>
            <Spacer x={1.5} />
            <Button
              isIconOnly
              auto
              className="bg-white"
              onClick={() => window.open("https://github.com/ibraheem15")}
            >
              <img
                src="https://img.icons8.com/ios-filled/60/000000/github.png"
                width="30"
                height="30"
              />
            </Button>
            <Spacer x={1.5} />
            <Button
              isIconOnly
              auto
              className="bg-blue-500"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/m-ibraheem-rehman-qazi-711752244/"
                )
              }
            >
              <img
                src="https://img.icons8.com/ios-filled/60/linkedin.png"
                width="30"
                height="30"
              />
            </Button>
            <Spacer x={1.5} />
            <Button
              isIconOnly
              auto
              className="bg-red-500"
              onClick={() => window.open("mail.google.com")}
            >
              <img
                src="https://img.icons8.com/ios-filled/30/000000/gmail.png"
                width="30"
                height="30"
              />
            </Button>
          </div>
          <Spacer y={1.5} />
          <Button size={"lg"} variant="ghost" color="success" className="mt-4">
            <Link className={styles.link_contactme} href="/contact">
              Contact Me
            </Link>
          </Button>
        </div>
        <div className={styles.computer} id="threejs">
          {loading ? (
            <Progress
              value={value}
              color="success"
              size="md"
              showValueLabel={true}
              className="max-w-md mx-auto mt-32"
              id="progressBar"
            />
          ) : null}
          <Computer2 width={width} key={width} />
        </div>
      </section>
      <section id="aboutMe">
        <components.aboutMe />
      </section>
      <div
        style={{
          width: typeof window !== "undefined" ? window.innerWidth : "100%",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <components.AboutMeExplain />
      </div>
    </div>
  );
}
