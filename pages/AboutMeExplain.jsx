import React, { useState, useEffect, useRef } from "react";
// import "../styles/AboutMeExplain.css";
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
    tl.from(".bg", { x: "-100%", opacity: 0 })
      // .from("p", { opacity: 0 }, "-=0.3")
      .from(".bka", { opacity: 0, y: "30px" }, "-=0.3");
    //   .from("button", { opacity: 0, y: "-40px" }, "-=0.8");

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
      let start, move, change, sliderWidth;

      slider.addEventListener("touchstart", (e) => {
        start = e.touches[0].clientX;
        sliderWidth = slider.clientWidth / trail.length;
      });

      slider.addEventListener("touchmove", (e) => {
        e.preventDefault();
        move = e.touches[0].clientX;
        change = start - move;
      });

      const mobile = () => {
        if (change > sliderWidth / 4) {
          slide("increase");
        } else if (change * -1 > sliderWidth / 4) {
          slide("decrease");
        }
        [start, move, change, sliderWidth] = [0, 0, 0, 0];
      };

      slider.addEventListener("touchend", mobile);
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
                  Develop highly interactive Front end / User Interfaces for
                  your web applications
                </li>
                <li class="three">
                  Building responsive website front end using ReactJS{" "}
                </li>
                <li class="three">
                  Build high-performance websites quickly and efficiently using
                  Next Js
                </li>
                <li class="three">
                  Creating application backend in Node, Express
                </li>
                <li class="three">
                  Integration of third party services such as Firebase/ Heroku/
                  Vercel
                </li>
              </ul>
              <button>Check Now</button>
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
              <h1 className="bka">C++ Programming</h1>
              <ul>
                <li class="three">
                  Developing Efficient and Scalable Applications
                </li>
                <li class="three">
                  Create complex algorithms and data structures using C++.
                </li>
                <li class="three">Develop games using OpenGL and SFML</li>
              </ul>
              <button>Check Now</button>
            </div>

            <div class="illustration">
              <div class="inner">
                <img
                  className="img1"
                  src="https://img.icons8.com/color/480/c-plus-plus-logo.png"
                />
              </div>
            </div>
          </div>

          <div class="box3 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">Sql Management</h1>
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
                  data integrity
                </li>
              </ul>
              <button>Check Now</button>
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
              <h1 className="bka">Java Programming</h1>
              <ul>
                <li class="three">
                  Use Java to create, design, and manipulate Java Applications
                </li>
                <li class="three">
                  Develop Applications using JavaFX and Scene Builder for GUI
                </li>
                <li class="three">
                  Maintain and update existing Java applications to support new features
                </li>
                <li class="three">
                  Manage Classes with Inheritance, Polymorphism, and Encapsulation to ensure data integrity
                </li>
              </ul>
              <button>Check Now</button>
            </div>

            <div class="illustration">
              <div class="inner">
                <img
                  className="img1"
                  src="https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png"
                />
              </div>
            </div>
          </div>

          <div class="box5 box">
            <div class="bg"></div>
            <div class="details">
              <h1 className="bka">C# Programming</h1>
              <ul>
                <li class="three">
                  Use C# to create, design, and manipulate C# Applications
                </li>
                <li class="three">
                  Develop Applications using Windows Forms and WPF for GUI
                </li>
                <li class="three">
                  Maintain and update existing C# applications to support new features
                </li>
                <li class="three">
                  Manage Classes with Inheritance, Polymorphism, and Encapsulation to ensure data integrity
                </li>
                <li class="three">
                  Use Database First Approach to create C# Applications with SQL Server Database
                </li>
              </ul>

              <button>Check Now</button>
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

// const AboutMeExplain = () => {
//   return (
//     <>
//       <div class="box2 box">
//         <div class="bg"></div>
//         <div class="details">
//           <h1>I'm the second Box</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//             lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
//             pellentesque eget.
//           </p>
//           <button>Check Now</button>
//         </div>

//         <div class="illustration">
//           <div class="inner"></div>
//         </div>
//       </div>

//       <div class="box3 box">
//         <div class="bg"></div>
//         <div class="details">
//           <h1>I'm the third Box</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//             lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
//             pellentesque eget.
//           </p>
//           <button>Check Now</button>
//         </div>

//         <div class="illustration">
//           <div class="inner"></div>
//         </div>
//       </div>

//       <div class="box4 box">
//         <div class="bg"></div>
//         <div class="details">
//           <h1>I'm the fourth Box</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//             lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
//             pellentesque eget.
//           </p>
//           <button>Check Now</button>
//         </div>

//         <div class="illustration">
//           <div class="inner"></div>
//         </div>
//       </div>

//       <div class="box5 box">
//         <div class="bg"></div>
//         <div class="details">
//           <h1>I'm the fifth Box</h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
//             lacinia dui lectus. Donec scelerisque ipsum diam, ac mattis orci
//             pellentesque eget.
//           </p>
//           <button>Check Now</button>
//         </div>

//         <div class="illustration">
//           <div class="inner"></div>
//         </div>
//       </div>

//       {/* <svg xmlns="http://www.w3.org/2000/svg" class="prev" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)" fill="#fff"/></svg> */}
//       {/* <svg xmlns="http://www.w3.org/2000/svg" class="next" width="56.898" height="91" viewBox="0 0 56.898 91"><path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)" fill="#fff"/></svg> */}
//       <div class="trail">
//         <div class="box1 active">1</div>
//         <div class="box2">2</div>
//         <div class="box3">3</div>
//         <div class="box4">4</div>
//         <div class="box5">5</div>
//       </div>
//     </>
//   );
// };

// export default AboutMeExplain;
