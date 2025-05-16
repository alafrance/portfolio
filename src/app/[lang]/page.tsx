import {getTranslation, Locale} from "@/i18n";
import AppHeader from "@/app/[lang]/components/Header/AppHeader";
import AppSkills from "@/app/[lang]/components/Skills/AppSkills";
import AppExperience from "@/app/[lang]/components/Experience/AppExperience";
import AppProjects from "@/app/[lang]/components/Projects/AppProjects";
import AppContact from "@/app/[lang]/components/Contact/AppContact";
import AppFooter from "@/app/[lang]/components/Footer/AppFooter";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getTranslation(lang)
  return (
    <main>
      <AppHeader t={t} className={"mx-12 lg:mx-24 my-24 lg:my-34"}/>
      <AppSkills t={t} className={"py-12"} />
      <AppExperience t={t} className={"my-12"} />
      <AppProjects t={t} className={"py-12"} />
      <AppContact t={t} className={"my-12"} />
      <AppFooter />
    </main>
  )
}
