import {Ref} from "react";
import {cn} from "@/lib/utils";

export default function Japan({ref, className}: {ref: Ref<SVGSVGElement>, className?: string}) {
  return (
    <svg viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}
         className={cn("absolute size-11", className)}>
      <circle cx="12" cy="10.5" r="3" className={"fill-my-accent"}/>
      <path
        d="M20 3H4C2.89543 3 2 3.95939 2 5.14286V15.8571C2 17.0406 2.89543 18 4 18H20C21.1046 18 22 17.0406 22 15.8571V5.14286C22 3.95939 21.1046 3 20 3Z"
        className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}