import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {RefObject} from "react";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

export const useMotionSatellite = (refs: RefObject<SVGSVGElement | null>[],
                                   containerRef: RefObject<HTMLDivElement | null>,) => {
                                   // idPath = "#road") => {
  gsap.registerPlugin(MotionPathPlugin)
  useGSAP(() => {
    const animate = () => {
      refs.map((ref, index) => {
        const step = index * .17;
        gsap.to(ref.current, {
          motionPath: {
            path: "#road",
            align: "#road",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: step,
            end: 1 + step,
          },
          duration: 60,
          repeat: -1,
          ease: "none"
        })
      })
    }
    animate(); // initial animation
    const resizeHandler = () => {
      gsap.killTweensOf(containerRef.current); // kill old animation
      animate(); // reinit
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      gsap.killTweensOf(containerRef.current);
    };
  }, [])
}