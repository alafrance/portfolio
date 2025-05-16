"use client";
import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";
import {Fragment} from "react";
import Image from "next/image";

export default function AppSkills({t, className}: { t: TranslationDictionary, className?: string}) {
  const infos = [
    {
      title: "Frontend",
      items: [
        {
          url: "/images/skills/react.svg",
          title: "React",
        },
        {
          url: "/images/skills/nextjs.svg",
          title: "Next.js",
        },
        {
          url: "/images/skills/vue.svg",
          title: "Vue",
        },
        {
          url: "/images/skills/nuxt.svg",
          title: "Nuxt",
        },
        {
          url: "/images/skills/tailwind.svg",
          title: "Tailwind CSS",
        },
        {
          url: "/images/skills/vitest.svg",
          title: "Vitest",
        }
      ]
    },
    {
      title: "Backend",
      items: [
        {
          url: "/images/skills/fastapi.svg",
          title: "FastAPI",
        },
        {
          url: "/images/skills/django.svg",
          title: "Django",
        },
        {
          url: "/images/skills/nodejs.svg",
          title: "Node.js",
        },
        {
          url: "/images/skills/nestjs.svg",
          title: "NestJS",
        },
        {
          url: "/images/skills/firebase.svg",
          title: "Firebase",
        },
      ]
    },
    {
      title: "Database",
      items: [
        {
          url: "/images/skills/postgresql.svg",
          title: "PostgreSQL",
        },
        {
          url: "/images/skills/mongodb.svg",
          title: "MongoDB",
        },
        {
          url: "/images/skills/mysql.svg",
          title: "MySQL",
        },
        {
          url: "/images/skills/aws_s3.svg",
          title: "AWS S3",
        }
      ]
    },
    {
      title: "IA/ML",
      items: [
        {
          url: "/images/skills/pandas.svg",
          title: "Pandas",
        },
        {
          url: "/images/skills/numpy.svg",
          title: "NumPy",
        },
        {
          url: "/images/skills/matplotlib.svg",
          title: "Matplotlib",
        },
        {
          url: "/images/skills/scikit-learn.svg",
          title: "Scikit-learn",
        },
        {
          url: "/images/skills/keras.svg",
          title: "Keras",
        }
      ]
    },
    {
      title: "DevOps",
      items: [
        {
          url: "/images/skills/aws.svg",
          title: "AWS",
        },
        {
          url: "/images/skills/docker.svg",
          title: "Docker",
        },
        {
          url: "/images/skills/kubernetes.svg",
          title: "Kubernetes",
        },
        {
          url: "/images/skills/github.svg",
          title: "GitHub Actions",
        },
        {
          url: "/images/skills/gitlab.svg",
          title: "GitLab",
        }
      ]
    },
    {
      title: t.skills.language,
      items: [
        {
          url: "/images/skills/python.svg",
          title: "Python",
        },
        {
          url: "/images/skills/typescript.svg",
          title: "TypeScript",
        },
        {
          url: "/images/skills/c.svg",
          title: "C",
        },
        {
          url: "/images/skills/c++.svg",
          title: "C++",
        },
        {
          url: "/images/skills/c_sharp.svg",
          title: "C#",
        },
        {
          url: "/images/skills/rust.svg",
          title: "Rust",
        }
      ]
    },
    {
      title: "Design",
      items: [
        {
          url: "/images/skills/figma.svg",
          title: "Figma"
        },
        {
          url: "/images/skills/adobe_xd.svg",
          title: "Adobe XD"
        }
      ]
    }
  ]

  return (
    <section className={cn("bg-background-variant", className)}>
      <h1 className={"text-center"}>{t.skills.title}</h1>
      <div className={"grid grid-cols-3 lg:grid-cols-8 gap-x-0 gap-y-24 justify-items-center mt-24 max-w-5xl mx-auto"}>
        {infos.map((info, index) => (
          <Fragment key={index}>
            <div className={"col-span-3 lg:col-span-2 text-4xl justify-self-center lg:justify-self-end flex items-center justify-center"}>
              <h2 key={info.title} className={"lg:pr-24"}>
                {info.title}
              </h2>
            </div>
            {info.items.map((item) => (
              <div key={item.title} className={"flex flex-col items-center justify-between h-24"}>
                <Image src={item.url} alt={item.title} width={12} height={12} className={"w-12"} />
                <p className={"font-[bueno] text-2xl"}>{item.title}</p>
              </div>
            ))}
            {[...Array(6 - info.items.length)].map((_, i) => (
              <div key={"empty-" + i}></div>
            ))}
          </Fragment>
        ))}
      </div>
    </section>
  )
}