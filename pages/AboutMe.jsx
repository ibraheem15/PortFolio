import React, { useState, useEffect, useRef } from "react";
import styles from "./aboutMe.module.css";
import { delay, motion, useInView } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";

const service = [
  {
    title: "Web Development",
    icon: "https://img.icons8.com/color-glass/480/000000/google-code.png",
    description: "I can create a Full Stack Website for you",
  },
  {
    title: "Operating Systems",
    icon: "https://img.icons8.com/color/480/c-plus-plus-logo.png",
    description: "Development and Management of Operating Systems using C++",
  },
  {
    title: "Manage Databases",
    icon: "https://img.icons8.com/external-soft-fill-juicy-fish/480/external-sql-servers-and-networks-soft-fill-soft-fill-juicy-fish.png",
    description:
      "Handle Database using SQL Server and MySQL to keep your data safe and secure",
  },
  {
    title: "Java Enterprise Applications",
    icon: "https://img.icons8.com/color/480/java-coffee-cup-logo--v1.png",
    description: "Using the popular Java EE environment to create applications",
  },
  {
    title: "C# Applications",
    icon: "https://img.icons8.com/color/480/c-sharp-logo-2.png",
    description: "Create Windows Applications using C#",
  },
];

const Services = ({ index, title, description, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ParallaxTilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      className={styles.tilt}
      tiltReverse="true"
    >
      <motion.div
        className={styles.insidetilt}
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
            0.5 * index
          }s`,
          overflow: "hidden",
        }}
      >
        <motion.div
          options={{
            max: 45,
            scale: 1.02,
            speed: 500,
          }}
          className={styles.tiltDiv}
          onClick={toggleDescription}
        >
          <img src={icon} className={styles.icon} />
          <h5 className={styles.title}>{title}</h5>
          <motion.p
            className={`${styles.description} open`}
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              maxHeight: isOpen ? "120px" : "0",
              paddingBottom: isOpen ? "10px" : "0",
            }}
            transition={{ duration: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </motion.div>
    </ParallaxTilt>
  );
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.h1
        className="text-4xl font-bold text-center mt-10 mb-10"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Here is what I do!
      </motion.h1>
      <motion.div className={styles.cards}>
        {service.map((service, index) => (
          <Services key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default AboutMe;
