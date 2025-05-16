import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";

export default function AppContact({t, className}: { t: TranslationDictionary, className?: string}) {
  return (
    <section>
        <h1 className={cn("text-center mt-4 mb-18", className)}>{t.navbar.contact}</h1>
    </section>
  )
}