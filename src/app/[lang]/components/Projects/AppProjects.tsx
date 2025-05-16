import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";

export default function AppProjects({t, className}: { t: TranslationDictionary, className?: string}) {
  return (
    <section className={"bg-background-variant"}>
      <h1 className={cn("text-center mt-4 mb-18", className)}>{t.navbar.projects}</h1>
    </section>
  )
}