'use client'
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const {resolvedTheme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    if (resolvedTheme === "dark") {
        return (
          <Sun onClick={() => setTheme("light")} className="cursor-pointer" />
        )
    }
    return (
      <Moon onClick={() => setTheme("dark")} className="cursor-pointer" />
    )
}