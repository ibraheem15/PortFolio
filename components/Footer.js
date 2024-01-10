import React from "react";
import { useRouter } from "next/router";

function Footer() {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <p className="mr-2 font-bold text-xl text-gray-400">Created with</p>
      <img
        width="30"
        height="30"
        src="https://img.icons8.com/fluency/40/pixel-heart.png"
        alt="pixel-heart"
      />
      <p className="ml-2 font-bold text-xl text-gray-400">
        {" "}
        by Ibraheem Rehman
      </p>
    </div>
  );
}

export default Footer;
