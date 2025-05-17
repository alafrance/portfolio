import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faGlobe, faRobot, faSitemap, faSquareArrowUpRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function AppProjects({t, className}: { t: TranslationDictionary, className?: string}) {
  return (
    <section className={cn("bg-background-variant", className)} id={"projects"}>
      <h1 className={"text-center mt-4 mb-8"}>{t.navbar.projects}</h1>
      <div className={"flex justify-center"}>
        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-12 max-w-7xl"}>
          {t.projects.map((project, index) => (
            <Card key={index + project.title} className={"pb-6 pt-0"}>
              <div className={"w-full h-32"}>
                <Image src={project.image} alt={"Image to represent " + project.title} width={"1920"} height={"1080"} className={"w-full h-32 object-cover rounded-t-xl"}/>
              </div>
              <CardHeader>
                <CardTitle className={"flex items-center mb-2"}>
                  {project.icon === "web" && (
                    <FontAwesomeIcon icon={faGlobe} className={"mr-2"} />
                  )}
                  {project.icon === "devops" && (
                    <FontAwesomeIcon icon={faSitemap} className={"mr-2"} />
                  )}
                  {project.icon === "ia" && (
                    <FontAwesomeIcon icon={faRobot} className={"mr-2"} />
                  )}
                  <span>{project.title}</span>
                </CardTitle>
                <CardDescription className={"flex flex-wrap gap-2"}>
                  {project.skills.map((skill, index) => (
                    <Badge key={skill + index}>{skill}</Badge>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={"mb-2 h-48 overflow-truncate"}>{project.description}</p>
                <div className={"flex items-center"}>
                  <Link href={project.link_github}>
                    <FontAwesomeIcon icon={faGithub} className={"text-2xl"}/>
                  </Link>
                  {project.link && (
                    <Link href={project.link}>
                      <FontAwesomeIcon icon={faSquareArrowUpRight} className={"text-2xl ml-4"} />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}