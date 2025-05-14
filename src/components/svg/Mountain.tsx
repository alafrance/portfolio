import {Ref} from "react";

export default function Mountain({ref, className}: {ref: Ref<SVGSVGElement>, className?: string}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}
         className={"absolute size-9 " + className}
    >
        <path
          d="M17 17H7C5.34315 17 4 17.6716 4 18.5V20.5C4 21.3284 5.34315 22 7 22H17C18.6569 22 20 21.3284 20 20.5V18.5C20 17.6716 18.6569 17 17 17Z"
          className={"fill-red"}/>
        <path d="M10 3H10.01" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2H14.01" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 9L22 4" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 12V6.5" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path
          d="M17 12H7C5.34315 12 4 13.3431 4 15V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V15C20 13.3431 18.6569 12 17 12Z"
          className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12V17" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 12V17" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 17H20" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}