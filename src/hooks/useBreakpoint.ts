import {useEffect, useState} from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState("xs" as Breakpoint);

  useEffect(() => {
    const sm = window.matchMedia('(min-width: 640px)');
    const md = window.matchMedia('(min-width: 768px)');
    const lg = window.matchMedia('(min-width: 1024px)');
    const xl = window.matchMedia('(min-width: 1280px)');
    const x2l = window.matchMedia('(min-width: 1536px)');

    function check() {
      if (x2l.matches) setBreakpoint('2xl');
      else if (xl.matches) setBreakpoint('xl');
      else if (lg.matches) setBreakpoint('lg');
      else if (md.matches) setBreakpoint('md');
      else if (sm.matches) setBreakpoint('sm');
      else setBreakpoint('xs');
    }

    check();

    sm.addEventListener('change', check);
    md.addEventListener('change', check);
    lg.addEventListener('change', check);
    xl.addEventListener('change', check);
    x2l.addEventListener('change', check);

    return () => {
      sm.removeEventListener('change', check);
      md.removeEventListener('change', check);
      lg.removeEventListener('change', check);
      xl.removeEventListener('change', check);
      x2l.removeEventListener('change', check);
    };
  }, []);

  return breakpoint;
}