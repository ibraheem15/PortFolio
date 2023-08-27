import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
// import { loadGLTFModel } from "./model";
import { Loading } from "@nextui-org/react";
import styles from "./Home.module.css";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export function loadGLTFModel(
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    // const loader = new GLTFLoader();
    const loader = new GLTFLoader();

    // const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath("/draco/gltf/");
    // loader.setDRACOLoader(dracoLoader);

    const draco = new DRACOLoader();
    draco.setDecoderConfig({ type: "js" });
    draco.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    loader.setDRACOLoader(draco);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dog";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse(function (child) {
          // if (child.isMesh) {
          child.castShadow = castShadow;
          child.receiveShadow = receiveShadow;
          // }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}

const Computer: React.FC = () => {
  const refBody = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [renderer, setRenderer] = useState<any>();
  const [_camera, setCamera] = useState<any>();
  const [target] = useState(new THREE.Vector3(-0.5, 0.8, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      1000 * Math.sin(0.2 * Math.PI),
      100,
      0 * Math.sin(0.2 * Math.PI) - 15
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [_controls, setControls] = useState<any>();

  const easeOutCirc = (t: number) => {
    return Math.sqrt(t - Math.pow(t - 1, 4));
  };
  useEffect(() => {
    const { current: container } = refBody;
    if (container && !renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH + 10 + 10);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      var scale = scH * 0.08 * 0.5 * 0.6;
      if (window.innerWidth > 600) {
        scale = scH * 0.08 * 0.5 * 0.6;
      } else {
        scale = scH * 0.08 * 0.5 * 1;
      }
      const camera = new THREE.OrthographicCamera(
        -scale + 5,
        scale - 4 - 4, //moves the camera to right if -10
        scale - 3 - 4.5,
        -scale / 4.5,
        1, //changed
        10000 //far
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      setCamera(camera);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = false;
      controls.target = target;
      setControls(controls);

      // loadGLTFModel(scene, "desktop_pc/model.glb", {
      // loadGLTFModel(scene, "desktop_pc/modelDraco.gltf", {
        loadGLTFModel(scene, "gaming_desktop_pc/scene.gltf", {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);
        frame = frame <= 100 ? frame + 1 : frame;
        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotaionspeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotaionspeed) * p.z * Math.sin(rotaionspeed);
          camera.position.z =
            p.z * Math.sin(rotaionspeed) - p.x * Math.cos(rotaionspeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };
      return () => {
        console.log("unmount");
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth
  );

  return (
    <div
      ref={refBody}
      style={{
        width: width < 600 ? "500px" : "100%", //window not defined
        height: "100%",
      }}
    >
      {loading && (
        <Loading
          color="primary"
          size="xl"
          css={{ paddingLeft: "430px", paddingTop: "230px" }}
          className={styles.loading}
        >
          Loading
        </Loading>
      )}
    </div>
  );
};

export default Computer;
