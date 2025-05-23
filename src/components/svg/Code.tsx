import {Ref} from "react";
import {cn} from "@/lib/utils";

export default function Code({ref, className}: {ref: Ref<SVGSVGElement>, className?: string}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref}
         className={cn("absolute size-9", className)}>
      <path d="M14.1201 3.88L16.0001 2" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.97 5C20.97 7.1 19.37 8.8 17.47 9" className="stroke-primary" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M3 21C3 18.9 4.7 17.1 6.8 17" className="stroke-primary" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M6 13H2" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" className="stroke-primary" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"/>
      <path d="M8 2L9.88 3.88" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M9.00007 7.13V6.13C8.98194 5.72475 9.04611 5.32003 9.1887 4.94025C9.33129 4.56048 9.54934 4.21353 9.8297 3.92035C10.1101 3.62717 10.4469 3.39383 10.8199 3.23441C11.193 3.07499 11.5944 2.99281 12.0001 2.99281C12.4057 2.99281 12.8072 3.07499 13.1802 3.23441C13.5532 3.39383 13.8901 3.62717 14.1704 3.92035C14.4508 4.21353 14.6689 4.56048 14.8114 4.94025C14.954 5.32003 15.0182 5.72475 15.0001 6.13V7.13"
        className={"fill-background"}/>
      <path
        d="M9.00007 7.13V6.13C8.98194 5.72475 9.04611 5.32003 9.1887 4.94025C9.33129 4.56048 9.54934 4.21353 9.8297 3.92035C10.1101 3.62717 10.4469 3.39383 10.8199 3.23441C11.193 3.07499 11.5944 2.99281 12.0001 2.99281C12.4057 2.99281 12.8072 3.07499 13.1802 3.23441C13.5532 3.39383 13.8901 3.62717 14.1704 3.92035C14.4508 4.21353 14.6689 4.56048 14.8114 4.94025C14.954 5.32003 15.0182 5.72475 15.0001 6.13V7.13"
        className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M18 11C18 9.93913 17.5786 8.92172 16.8284 8.17157C16.0783 7.42143 15.0609 7 14 7H10C8.93913 7 7.92172 7.42143 7.17157 8.17157C6.42143 8.92172 6 9.93913 6 11V14C6.00232 14.8479 6.18137 15.686 6.52573 16.4608C6.87009 17.2356 7.37219 17.9301 8 18.5"
        className={"fill-background"}/>
      <path
        d="M18 11C18 9.93913 17.5786 8.92172 16.8284 8.17157C16.0783 7.42143 15.0609 7 14 7H10C8.93913 7 7.92172 7.42143 7.17157 8.17157C6.42143 8.92172 6 9.93913 6 11V14C6.00232 14.8479 6.18137 15.686 6.52573 16.4608C6.87009 17.2356 7.37219 17.9301 8 18.5"
        className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path
        d="M12.765 21.522C12.6893 21.5693 12.6023 21.5955 12.5131 21.5978C12.4239 21.6002 12.3357 21.5786 12.2576 21.5353C12.1796 21.4921 12.1145 21.4287 12.0692 21.3518C12.0239 21.2749 12 21.1873 12 21.098V12.902C12 12.8127 12.0239 12.7251 12.0692 12.6482C12.1145 12.5713 12.1796 12.5079 12.2576 12.4647C12.3357 12.4214 12.4239 12.3998 12.5131 12.4022C12.6023 12.4045 12.6893 12.4307 12.765 12.478L18.643 16.152C18.7868 16.2419 18.9054 16.3669 18.9876 16.5152C19.0699 16.6636 19.113 16.8304 19.113 17C19.113 17.1696 19.0699 17.3364 18.9876 17.4848C18.9054 17.6331 18.7868 17.7581 18.643 17.848L12.765 21.522Z"
        className="stroke-primary fill-my-accent" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

    </svg>

  )
}