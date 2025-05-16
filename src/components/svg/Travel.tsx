import {Ref} from "react";

export default function Travel({ref, className}: {ref: Ref<SVGSVGElement>, className?: string}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}
         className={"absolute size-9 " + className}>
      <path
        d="M4.5 8.00001L15.08 2.94001C15.1999 2.8826 15.3301 2.84969 15.4629 2.8432C15.5957 2.83671 15.7285 2.85678 15.8535 2.90222C15.9784 2.94766 16.0931 3.01756 16.1907 3.10784C16.2883 3.19813 16.367 3.30697 16.422 3.42801L18.5 8.00001"
        className={"fill-my-accent"} />
      <path
        d="M4.5 8.00001L15.08 2.94001C15.1999 2.8826 15.3301 2.84969 15.4629 2.8432C15.5957 2.83671 15.7285 2.85678 15.8535 2.90222C15.9784 2.94766 16.0931 3.01756 16.1907 3.10784C16.2883 3.19813 16.367 3.30697 16.422 3.42801L18.5 8.00001"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={"stroke-primary"}/>
      <path
        d="M20 8H4C2.89543 8 2 8.89543 2 10V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V10C22 8.89543 21.1046 8 20 8Z"
        className={"stroke-primary fill-background"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.5 17H11.727C12.2244 16.9999 12.7039 16.8146 13.072 16.48L18 12" className={"stroke-primary"} strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 13.5L15.75 14" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 10V8" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 14V15" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 19V21" className={"stroke-primary"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  )
}