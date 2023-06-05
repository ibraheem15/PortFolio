import React from "react";
import { useRouter } from "next/router";

function Footer() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "2.5rem",
        marginBottom: "2rem",
        width: typeof window !== "undefined" ? window.innerWidth : "100%",
      }}
    >
      <p
        style={{
          color: "#888888",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Created with{" "}
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/fluency/40/pixel-heart.png"
          alt="pixel-heart"
        />{" "}
        by Ibraheem Rehman
      </p>
    </div>
  );
}

export default Footer;
