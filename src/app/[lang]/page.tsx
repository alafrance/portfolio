import {AppNavbar} from "@/components/Navbar/AppNavbar";
import {getTranslation, Locale} from "@/i18n";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getTranslation(lang);
  return (
    <>
      <AppNavbar t={t}/>
    </>
  )
}
