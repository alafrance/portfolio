import type {NextRequest} from "next/server";
import {i18n} from "@/i18n";


export function getLocale(request: NextRequest): string | undefined {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return i18n.defaultLocale;

  const acceptedLanguages = parseAcceptLanguage(acceptLanguage);
  for (const lang of acceptedLanguages) {
    const matched = i18n.locales.find(
      (locale) => locale.toLowerCase() === lang.toLowerCase() || locale.startsWith(lang)
    );
    if (matched) return matched;
  }

  return i18n.defaultLocale;
}

function parseAcceptLanguage(header: string): string[] {
  return header
  .split(',')
  .map((part) => {
    const [lang, q] = part.trim().split(';q=');
    return {
      lang,
      quality: q ? parseFloat(q) : 1.0,
    };
  })
  .sort((a, b) => b.quality - a.quality)
  .map((item) => item.lang);
}