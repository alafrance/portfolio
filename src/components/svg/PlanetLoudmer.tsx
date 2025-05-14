import {Ref} from "react";

export default function PlanetLoudmer({ref}: {ref: Ref<SVGSVGElement>}) {
  return (
    <svg viewBox="0 0 450 377" fill="none" xmlns="http://www.w3.org/2000/svg"
         className={"z-10"}
         ref={ref}>
      {/* Planet */}
      <image
        href="/images/loudmer.png"
        width="310"
        height="310"
        x="60"
        y="20"
      />

      {/* Road */}
      <path
        d="M61.4999 51C7.77299 111.488 40.6703 226.201 121 298C201.329 369.799 311.773 387.497 365.5 327C419.227 266.475 402.32 159.809 322 88C241.67 16.2006 115.227 -9.48778 61.4999 51Z"
        stroke="black"
        strokeWidth="5"
        id="road"
        className={"hidden"}
      />
      <defs>
        <clipPath id="clip0_163_1667">
          <rect width="288" height="288" fill="white" transform="translate(72 42)"/>
        </clipPath>
      </defs>
    </svg>
  )
}