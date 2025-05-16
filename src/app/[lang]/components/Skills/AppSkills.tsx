"use client";
import {TranslationDictionary} from "@/i18n";
import {cn} from "@/lib/utils";
import {Fragment} from "react";
import Image from "next/image";

export default function AppSkills({t, className}: { t: TranslationDictionary, className?: string}) {
  return (
    <section className={cn("bg-background-variant", className)}>
      <h1 className={"text-center mt-4 mb-18"}>{t.navbar.skills}</h1>
      <div className={"grid grid-cols-3 lg:grid-cols-8 gap-x-0 gap-y-24 justify-items-center max-w-5xl mx-auto"}>
        {t.skills.map((info, index) => (
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