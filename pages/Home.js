import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button, Spacer, Grid } from "@nextui-org/react";

function handleEntailmentRequest(e) {
  // e.preventDefault();
  //open link on the same page
  // window.open("/education");
}
export default function Home() {
  return (
    <div className="Homeintro" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="Homeh1">Hello 👋.</h1>
      <h3 className="Homeh3">
        I'm <span style={{ color: "#3bfff5" }}>Ibraheem ur Rehman</span> 👨‍💻
        Software Engineer, Footballer ⚽, Gamer 🎮 Always Learning 📖.
      </h3>
      <Spacer x={1.5} />
      <Grid.Container gap={2}>
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
          icon={<img src="https://img.icons8.com/ios-filled/30/linkedin.png" />}
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
          // icon={<HeartIcon fill="currentColor" filled />} https://icons8.com/icon/62856/github
        />
      </Grid.Container>
      <Spacer y={1.5} />
      <Button size={"lg"} color="success" ghost>
        <Link className="link_contactme" href="/education">Contact Me</Link>
      </Button>
    </div>
  );
}
