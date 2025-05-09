import ThemeSwitch from "@/components/Navbar/ThemeSwitch";
import {TranslationDictionary} from "@/i18n";

export function AppNavbar({t}: { t: TranslationDictionary}) {
  return (
    <nav>
      {t.title}
      <ThemeSwitch />
    </nav>
  )
}