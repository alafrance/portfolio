"use client";
import Mountain from "@/components/svg/Mountain";
import Music from "@/components/svg/Music";
import Travel from "@/components/svg/Travel";
import Code from "@/components/svg/Code";
import Book from "@/components/svg/Book";
import Japan from "@/components/svg/Japan";
import {RefObject, useRef} from "react";
import {useMotionSatellite} from "@/hooks/useMotionSatellite";

export default function Globe() {
  const iconRef : RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef2: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef3: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef4: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef5: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef6: RefObject<SVGSVGElement | null> = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const refs : RefObject<SVGSVGElement | null>[] = [iconRef, iconRef2, iconRef3, iconRef4, iconRef5, iconRef6]

  useMotionSatellite(refs, containerRef);

  return (
    <div className={"w-auto lg:size-120 relative flex justify-center items-center mb-16 lg:mb-0"} ref={containerRef}>
      {/* Images */}
      <img src={"/images/loudmer.png"} className={"w-48 md:size-64 lg:size-84 xl:size-102"} alt={"Wolf appear between seas aka Loudmer"} />

      {/* Icons */}
      <Music ref={iconRef2} className={"opacity-0"} />
      <Travel ref={iconRef3} className={"opacity-0"} />
      <Code ref={iconRef4} className={"opacity-0"} />
      <Book ref={iconRef5} className={"opacity-0"} />
      <Japan ref={iconRef6} className={"opacity-0"} />
      <Mountain ref={iconRef} className={"opacity-0"} />

      {/* Paths */}
      <svg
        viewBox="0 0 152 152"
        className="size-68 md:size-84 lg:size-104 xl:size-122 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M151.3 76.4C151.3 30 114.5 1.00014 75.9994 1C24.5005 0.999814 1 43.5 1 77.0015C1 110.503 32.0005 151 75.9994 151C107 151 151.3 122.8 151.3 76.4Z"
          id={"road"}
        />

      </svg>

    </div>
  )
}