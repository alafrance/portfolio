import ThemeSwitch from "./ThemeSwitch";
import {TranslationDictionary} from "@/i18n";
import LanguageSwitch from "./LanguageSwitch";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Link from "next/link";

export function AppNavbar({t}: { t: TranslationDictionary}) {
  return (
    <div className={"w-full fixed top-0 left-0 bg-background z-50"}>
      <nav className={"flex justify-between items-center font-bueno my-6 mx-4"}>
        <span className={"font-[bueno] text-2xl"}>A</span>
        <div className={"text-2xl flex gap-6 "}>
          <div className={"gap-4 hidden md:flex"}>
            <Link href={"#skills"} className={"font-[bueno] cursor-pointer"}>{t.navbar.skills}</Link>
            <Link href={"#experience"} className={"font-[bueno] cursor-pointer"}>{t.navbar.experience}</Link>
            <Link href={"#projects"} className={"font-[bueno] cursor-pointer"}>{t.navbar.projects}</Link>
            <Link href={"#contact"} className={"font-[bueno] cursor-pointer"}>{t.navbar.contact}</Link>
          </div>
          <LanguageSwitch />
          <ThemeSwitch />
          <Sheet>
            <SheetTrigger className={"md:hidden cursor-pointer"} asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent className={"md:hidden cursor-pointer"}>
              <SheetHeader>
                <SheetTitle className={"text-2xl"}>Menu</SheetTitle>
                <SheetDescription className={"flex flex-col gap-4 text-2xl mt-10 cursor-pointer"}>
                    <Link href={"#skills"} className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.skills}</Link>
                    <Link href={"#skills"} className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.experience}</Link>
                    <Link href={"#skills"} className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.projects}</Link>
                    <Link href={"#skills"} className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.contact}</Link>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  )
}