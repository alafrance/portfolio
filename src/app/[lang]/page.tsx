import {getTranslation, Locale} from "@/i18n";
import AppHeader from "@/app/[lang]/components/Header/AppHeader";
import AppSkills from "@/app/[lang]/components/Skills/AppSkills";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getTranslation(lang)
  return (
    <main>
      <AppHeader t={t} className={"mx-12 lg:mx-24 my-24"}/>
      <AppSkills t={t} className={"py-12"}/>
    </main>
  )
}
