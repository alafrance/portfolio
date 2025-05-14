import {getTranslation, Locale} from "@/i18n";
import Header from "@/app/[lang]/components/Header/Header";



export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const t = await getTranslation(lang)
  return (
    <main className={"m-12 lg:m-24"}>
      <Header t={t} />
    </main>
  )
}
