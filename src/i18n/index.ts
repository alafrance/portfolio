import "server-only";
import type en from './locales/en.json';
export type TranslationDictionary = typeof en;

export const i18n = {
  defaultLocale: "fr",
  locales: ["en", "fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

const dictionaries = {
  en: () => import("./locales/en.json").then((module) => module.default),
  fr: () => import("./locales/fr.json").then((module) => module.default),
};

export const getTranslation = async (locale: Locale): Promise<TranslationDictionary> =>
  dictionaries[locale]?.() ?? await dictionaries.fr();