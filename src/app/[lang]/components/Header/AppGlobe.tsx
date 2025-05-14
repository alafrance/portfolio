"use client";
import {RefObject, useRef} from 'react';
import Mountain from "@/components/svg/Mountain";
import Japan from "@/components/svg/Japan";
import Travel from "@/components/svg/Travel";
import Music from "@/components/svg/Music";
import Code from "@/components/svg/Code";
import Book from "@/components/svg/Book";
import Planet from "@/components/svg/Planet";
import {useMotionSatellite} from "@/hooks/useMotionSatellite";

export default function AppGlobe() {

  const iconRef : RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef2: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef3: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef4: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef5: RefObject<SVGSVGElement | null> = useRef(null);
  const iconRef6: RefObject<SVGSVGElement | null> = useRef(null);
  const planetRef = useRef<SVGSVGElement | null>(null);
  const refs : RefObject<SVGSVGElement | null>[] = [iconRef, iconRef2, iconRef3, iconRef4, iconRef5, iconRef6]

  useMotionSatellite(refs, planetRef);
  return (
    <div className={"flex justify-center xl:size-150 lg:size-125"}>
      {/* Background */}
      <Planet ref={planetRef} />

      {/* Icons */}
      <Mountain ref={iconRef} />
      <Music ref={iconRef2}/>
      <Travel ref={iconRef3}/>
      <Code ref={iconRef4} />
      <Book ref={iconRef5} />
      <Japan ref={iconRef6}/>
    </div>
  )
}