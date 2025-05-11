"use client";
import {
  Globe,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import {Locale} from "@/i18n";
import {usePathname} from "next/navigation";
import Link from "next/link";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] as Locale;

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Globe className={"cursor-pointer"}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" sideOffset={12}>
          <Link href={redirectedPathname("fr")}>
            <DropdownMenuItem className={"text-2xl cursor-pointer " + (locale === "fr" ? "text-accent-foreground bg-accent" : "")} >
                <p className={"mr-2"}>🇫🇷</p>
                <p className={"font-[bueno]"}>Français</p>
            </DropdownMenuItem>
          </Link>
          <Link href={redirectedPathname("en")}>
            <DropdownMenuItem className={"text-2xl cursor-pointer " + (locale === "en" ? "text-accent-foreground bg-accent" : "")}>
                <p className={"mr-2"}>🇬🇧</p>
                <p className={"font-[bueno]"}>English</p>
            </DropdownMenuItem>
          </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
