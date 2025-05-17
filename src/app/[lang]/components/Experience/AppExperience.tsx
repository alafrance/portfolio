import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

export default function AppExperience({t, className}: { t: TranslationDictionary, className?: string}) {
  return (
    <section className={cn("flex justify-center", className)}>
      <div className={"max-w-7xl"}>
        <h1 className={"text-center mt-4 mb-18"}>{t.navbar.experience}</h1>
        {t.experiences.map((experience, index) => (
          <div className={"flex items-center max-w-6xl pb-18 relative"} key={index}>
            <div className={"hidden md:block absolute w-2 bg-primary z-1 top-0 bottom-0 left-21"} />
            <Image src={experience.image} alt={"Logo " + experience.title} width={100} height={100} className={"hidden md:block w-20 mx-12 z-10 bg-background py-6"} />
            <div className={"mx-12 md:mx-0"}>
              <div className={"flex items-center"}>
                <Image src={experience.image} alt={"Logo " + experience.title} width={50} height={50} className={"md:hidden w-12 mr-4"} />
                <h2 className={"font-[bueno] text-4xl"}>{experience.title}</h2>
              </div>
              <p className={"text-base text-secondary pt-2 pb-4"}>{experience.date} | {experience.location}</p>
              <div className={"flex flex-wrap gap-2 pb-4"}>
                {experience.skills.map((skill, index) => (
                  <Badge key={skill + "-" + index}>
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className={"text-lg"}>
                {experience.description.map((description, index) => (
                  <p key={description + "-" + index}>
                    • {description}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}