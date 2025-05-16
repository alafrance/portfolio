import {Ref} from "react";

export default function Music({ref, className}: {ref: Ref<SVGSVGElement>, className?: string}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}
         className={"absolute size-9 " + className}>
      <path
        d="M11.0001 7.601L5.00609 15.791C4.86505 15.9837 4.7976 16.2204 4.81594 16.4585C4.83429 16.6966 4.9372 16.9202 5.10609 17.089L5.92309 17.907C6.09444 18.0782 6.32208 18.1813 6.56375 18.1973C6.80541 18.2133 7.04467 18.1411 7.23709 17.994L15.0901 12"
        className={"fill-my-accent"}/>
      <path
        d="M11.0001 7.601L5.00609 15.791C4.86505 15.9837 4.7976 16.2204 4.81594 16.4585C4.83429 16.6966 4.9372 16.9202 5.10609 17.089L5.92309 17.907C6.09444 18.0782 6.32208 18.1813 6.56375 18.1973C6.80541 18.2133 7.04467 18.1411 7.23709 17.994L15.0901 12"
        className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16.5 21.174C15.5 20.5 14.372 20 13 20C10.942 20 9.07204 22.356 7.00004 22C4.92804 21.644 4.22504 18.631 5.50004 17.5"
        className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M16 12C18.7614 12 21 9.76142 21 7C21 4.23858 18.7614 2 16 2C13.2386 2 11 4.23858 11 7C11 9.76142 13.2386 12 16 12Z"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"  className={"fill-background stroke-primary"}/>
    </svg>

  )
}