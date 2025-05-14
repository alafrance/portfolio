import {TranslationDictionary} from "@/i18n";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ResumeIcons from "@/app/[lang]/components/Header/ResumeIcons";
import Link from "next/link";
import AppGlobe from "@/app/[lang]/components/Header/AppGlobe";

export default function Header({t}: { t: TranslationDictionary}) {

  return (
    <section className={"flex lg:justify-between lg:items-center flex-col-reverse lg:flex-row"}>
      <div className={"lg:max-w-6/12 my-12 lg:my-0 flex flex-col lg:block items-center text-center lg:text-left"}>
        <h1 className={"text-7xl xl:text-8xl inline-block bg-linear-to-r from-accent-primary via-accent-primary to-accent-secondary text-transparent bg-clip-text"}>ALEXIS LAFRANCE</h1>
        <h2 className={"text-5xl my-2"}>{t.header.jobTitle}</h2>
        <p className={"max-w-2xl lg:max-w-md my-4 text-sm"}>{t.header.description}</p>
        <div className={"text-2xl my-6 px-12 inline-flex items-center"}>
          <ResumeIcons message={t.header.cv_button} />
          <Link href={"https://github.com/alafrance"} className={"mx-12"}>
            <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link href={"https://www.linkedin.com/in/alexis-lafrance/"}>
            <FontAwesomeIcon icon={faLinkedin} className={"text-[#0077B5]"}/>
          </Link>
        </div>
      </div>
      <AppGlobe />
    </section>
  )
}