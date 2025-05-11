import ThemeSwitch from "./ThemeSwitch";
import {TranslationDictionary} from "@/i18n";
import LanguageSwitch from "./LanguageSwitch";
import {Menu} from "lucide-react";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";

export function AppNavbar({t}: { t: TranslationDictionary}) {
  return (
    <nav className={"flex justify-between items-center font-bueno my-6 mx-4"}>
      <span className={"font-[bueno] text-2xl"}>A</span>
      <div className={"text-2xl flex gap-6 "}>
        <div className={"gap-4 hidden md:flex"}>
          <a className={"font-[bueno] cursor-pointer"}>{t.navbar.skills}</a>
          <a className={"font-[bueno] cursor-pointer"}>{t.navbar.experience}</a>
          <a className={"font-[bueno] cursor-pointer"}>{t.navbar.projects}</a>
          <a className={"font-[bueno] cursor-pointer"}>{t.navbar.contact}</a>
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
                  <a className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.skills}</a>
                  <a className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.experience}</a>
                  <a className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.projects}</a>
                  <a className={"font-[bueno] border-b-2 pb-2"}>{t.navbar.contact}</a>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}