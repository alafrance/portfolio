import type { Metadata } from "next";
import "@/styles/global.css";
import "@/styles/fonts.css";
import {Providers} from "@/app/providers";
import React from "react";
import {AppNavbar} from "./components/Navbar/AppNavbar";
import {getTranslation, Locale} from "@/i18n";
import { Toaster } from "@/components/ui/sonner"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Alexis LAFRANCE - Portfolio",
  description: "Portfolio of Alexis LAFRANCE, a full-stack developer.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;

  const t = await getTranslation(lang)
  return (
    <html suppressHydrationWarning>
      <head/>
      <body suppressHydrationWarning>
        <Providers>
          <AppNavbar t={t} />
          {children}
          <Toaster richColors closeButton />
        </Providers>
      </body>
    </html>
  );
}
