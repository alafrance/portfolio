import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {RefObject} from "react";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";

export const useMotionSatellite = (refs: RefObject<SVGSVGElement | null>[], planetRef: RefObject<SVGSVGElement | null>) => {
  gsap.registerPlugin(MotionPathPlugin)
  useGSAP(() => {
    const animate = () => {
      refs.map((ref, index) => {
        const step = index * .17;
        const tween = gsap.to(ref.current, {
          motionPath: {
            path: "#road",
            align: "#road",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
            start: step,
            end: 1 + step,
          },
          onUpdate: function () {
            const pathProgress = (tween.totalTime() % tween.duration()) / tween.duration();
            const progress = (pathProgress + step) % 1;

            if (ref?.current) {
              if (progress > 0.5 && progress < 0.9) {
                ref.current.classList.add("z-1");
                ref.current.classList.remove("z-12");
              } else {
                ref.current.classList.add("z-12");
                ref.current.classList.remove("z-1");
              }
            }
          },
          duration: 60,
          repeat: -1,
          ease: "none"
        })
      })
    }
    animate(); // initial animation
    const resizeHandler = () => {
      gsap.killTweensOf(planetRef.current); // kill old animation
      animate(); // reinit
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      gsap.killTweensOf(planetRef.current);
    };
  }, [])
}