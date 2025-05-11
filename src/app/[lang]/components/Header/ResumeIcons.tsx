"use client";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {usePathname} from "next/navigation";
import {Locale} from "@/i18n";

export default function ResumeIcons({message}: {message: string}) {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] as Locale;
  return (
    <Link href={`/images/resume_${locale}.pdf`}>
      <Button className={"cursor-pointer"}>{message}</Button>
    </Link>
  )
}