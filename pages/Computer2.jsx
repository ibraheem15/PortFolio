import React, { useEffect, useState, useRef } from "react";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Computer2 = () => {
  const [justify, setJustify] = React.useState("flex-start");

  const containerRef = useRef();
  //   width and height from props
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.outputColorSpace = THREE.SRGBColorSpace;

      if (width < 600) {
        renderer.setSize(width * 0.9, width * 0.7);
      } else {
        renderer.setSize(width * 0.5, width * 0.4);
      }

      renderer.setClearColor(0x000000, 1);
      renderer.setPixelRatio(window.devicePixelRatio);

      const scene = new THREE.Scene();

      var scale = 0;
      if (window.innerWidth > 600) {
        scale = width * 0.08;
      } else {
        scale = width * 0.08;
      }
      const camera = new THREE.OrthographicCamera(
        (width * -1) / scale,
        width / scale,
        width / scale,
        ((width * -1) / scale) * 0.2,
        1,
        1000
      );
      camera.position.set(3.2, 0, 10);
      camera.lookAt(0, 0, 0);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;
      controls.target.set(0, 0, -0.2);
      controls.update();

      const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
      groundGeometry.rotateX(-Math.PI / 2);
     

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }

      animate();

      let loader = new GLTFLoader();
      loader.load("/gaming_desktop_pc/scene.gltf", function (gltf) {
        const mesh = gltf.scene;
        mesh.scale.set(1.5, 1.5, 1.5);
        mesh.position.set(5, 3, 0);
        mesh.rotation.set(0, -1.25, 0);
        scene.add(gltf.scene);
      });

      containerRef.current.appendChild(renderer.domElement);
    }
  }, [width]);

  return <div id="threejs" ref={containerRef} />;
};

export default Computer2;
