"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Locale} from "@/i18n";

export default function ButtonResume({message}: {message: string}) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] as Locale;
  return (
    <Link href={`/resume/resume_${locale}.pdf`}>
      <Button className={"cursor-pointer px-4"} variant={"default"}>{message}</Button>
    </Link>
  )
}