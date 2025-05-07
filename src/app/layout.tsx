import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
export const metadata: Metadata = {
  title: "Alexis LAFRANCE - Portfolio",
  description: "Portfolio of Alexis LAFRANCE, a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head/>
      <body suppressHydrationWarning>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
