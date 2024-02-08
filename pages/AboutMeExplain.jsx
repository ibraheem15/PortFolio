import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const AboutMeExmplain = () => {
  const slideRef = useRef(null);
  const startRef = useRef(null);
  useEffect(() => {
    const slider = document.querySelector(".slider");
    const trail = document.querySelector(".trail").querySelectorAll("div");

    let value = 0;
    let trailValue = 0;
    let interval = 4000;
    let start;

    const slide = (condition) => {
      clearInterval(start);
      condition === "increase" ? initiateINC() : initiateDEC();
      move(value, trailValue);
      animate();
      start = setInterval(() => slide("increase"), interval);
    };

    const initiateINC = () => {
      trail.forEach((cur) => cur.classList.remove("active"));
      value === 80 ? (value = 0) : (value += 20);
      trailUpdate();
    };

    const initiateDEC = () => {
      trail.forEach((cur) => cur.classList.remove("active"));
      value === 0 ? (value = 80) : (value -= 20);
      trailUpdate();
    };

    const move = (S, T) => {
      slider.style.transform = `translateX(-${S}%)`;
      trail[T].classList.add("active");
    };

    const tl = gsap.timeline({
      defaults: { duration: 0.6, ease: "power2.inOut" },
    });
    tl.from(".bg", { x: "-100%", opacity: 0 }).from(
      ".bka",
      { opacity: 0, y: "30px" },
      "-=0.3"
    );

    const animate = () => tl.restart();

    const trailUpdate = () => {
      if (value === 0) {
        trailValue = 0;
      } else if (value === 20) {
        trailValue = 1;
      } else if (value === 40) {
        trailValue = 2;
      } else if (value === 60) {
        trailValue = 3;
      } else {
        trailValue = 4;
      }
    };
    start = setInterval(() => slide("increase"), interval);

    const clickCheck = (e) => {
      clearInterval(start);
      trail.forEach((cur) => cur.classList.remove("active"));
      const check = e.target;
      check.classList.add("active");

      if (check.classList.contains("box1")) {
        value = 0;
      } else if (check.classList.contains("box2")) {
        value = 20;
      } else if (check.classList.contains("box3")) {
        value = 40;
      } else if (check.classList.contains("box4")) {
        value = 60;
      } else {
        value = 80;
      }

      trailUpdate();
      move(value, trailValue);
      animate();
      start = setInterval(() => slide("increase"), interval);
    };

    trail.forEach((cur) =>
      cur.addEventListener("click", (ev) => clickCheck(ev))
    );
    const touchSlide = (() => {
      let startX, moveX, changeX;

      window.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });

      window.addEventListener("touchmove", (e) => {
        moveX = e.touches[0].clientX;
        changeX = startX - moveX;
      });

      const mobile = () => {
        if (Math.abs(changeX) > 50) {
          if (changeX > 0) {
            // Handle swipe to the left (next slide)
            slide("increase");
          } else {
            // Handle swipe to the right (previous slide)
            slide("decrease");
          }
        }

        [startX, moveX, changeX] = [0, 0, 0];
      };

      window.addEventListener("touchend", mobile);
      slideRef.current = slide;
    })();
  }, []);

  return (
    <>
      <div class="container">
        <div class="slider">
          <div class="box1 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">Web Development</h1>
              <ul>
                <li class="three">
                  Develop highly interactive Full Stack Web applications using
                  React, Node, Express, and MongoDB
                </li>
                <li class="three">
                  Building Responsive and User-Friendly Websites using
                  React/NextJs
                </li>
                <li class="three">
                  Deploying websites on platforms like Vercel, Netlify, and AWS
                </li>
                <li class="three">
                  Creating RESTful APIs and integrating them with the frontend
                </li>
                <li class="three">
                  Using Zeustand for state management and Tailwind CSS for
                  styling
                </li>
              </ul>
              {/* <button>Check Now</button> */}
            </div>

            <div class="illustration">
              <div class="inner">
                <img
                  className="img1"
                  src="https://img.icons8.com/color/480/react-native.png"
                  alt="react-native"
                />
              </div>
            </div>
          </div>

          <div class="box2 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">Programming in C++ and Java</h1>
              <ul>
                <li class="three">
                  Develop and Manage Operating Systems using C++
                </li>
                <li class="three">
                  Use C++ to create, design, and manipulate C++ Applications
                </li>
                <li class="three">
                  Develop Applications using JavaFX and Scene Builder for GUI
                </li>
                <li class="three">
                  Maintain and update existing Java applications to support new
                  features
                </li>
              </ul>
            </div>

            <div class="illustration">
              <div class="inner">
                <img className="img1" src="https://i.ibb.co/LhG3qh7/JAVA.png" />
              </div>
            </div>
          </div>

          <div class="box3 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">Database Management</h1>
              <ul>
                <li class="three"></li>
                <li class="three">
                  Use SQL to create, design, and manipulate SQL databases
                </li>
                <li class="three">
                  Manage user access and privileges at various levels to ensure
                  database security
                </li>
                <li class="three">
                  Create complex relational databases and tables along with
                  views, triggers, and stored procedures
                </li>
                <li class="three">
                  ERD Diagrams and Normalization of Database Tables to ensure
                  data integrity and security
                </li>
              </ul>
              {/* <button>Check Now</button> */}
            </div>

            <div class="illustration">
              <div class="inner">
                <img
                  className="img1"
                  src="https://img.icons8.com/external-soft-fill-juicy-fish/480/external-sql-servers-and-networks-soft-fill-soft-fill-juicy-fish.png"
                />
              </div>
            </div>
          </div>

          <div class="box4 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">Software Designs</h1>
              <ul>
                <li class="three">
                  Used IBM Rational Software Architect to create UML diagrams
                  for Software Designs
                </li>
                <li class="three">
                  Create Use Case, Class, Sequence, and Activity Diagrams to
                  ensure software integrity
                </li>
                <li class="three">
                  Develop Project with Java EE environment to create Google
                  Classroom like application
                </li>
              </ul>
              {/* <button>Check Now</button> */}
            </div>

            <div class="illustration">
              <div class="inner">
                <img
                  className="img1 ml-10"
                  src="https://img.icons8.com/ios/250/ibm.png"
                />
              </div>
            </div>
          </div>

          <div class="box5 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">C# Applications</h1>
              <ul>
                <li class="three">
                  Develop Windows Applications using C# and .NET Framework
                </li>
                <li class="three">
                  Create and Design Windows Forms Applications using C#
                </li>
                <li class="three">
                  Use ADO.NET to connect and manipulate databases with C#
                </li>
                <li class="three">
                  Develop and Manage Windows Services using C#
                </li>
              </ul>

              {/* <button>Check Now</button> */}
            </div>

            <div class="illustration">
              <div class="inner">
                <img
                  className="img1"
                  src="https://img.icons8.com/color/480/c-sharp-logo-2.png"
                />
              </div>
            </div>
          </div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="prev"
          width="56.898"
          height="91"
          viewBox="0 0 56.898 91"
          onClick={() => slideRef.current("decrease")}
        >
          <path
            d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
            transform="translate(0 91) rotate(-90)"
            fill="#fff"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="next"
          width="56.898"
          height="91"
          viewBox="0 0 56.898 91"
          onClick={() => slideRef.current("increase")}
        >
          <path
            d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z"
            transform="translate(56.898) rotate(90)"
            fill="#fff"
          />
        </svg>

        <div class="trail">
          <div class="box1 active">1</div>
          <div class="box2">2</div>
          <div class="box3">3</div>
          <div class="box4">4</div>
          <div class="box5">5</div>
        </div>
      </div>
    </>
  );
};

export default AboutMeExmplain;
