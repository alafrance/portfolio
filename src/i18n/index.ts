import "server-only";
import type fr from './locales/fr.json';
export type TranslationDictionary = typeof fr;

export const i18n = {
  defaultLocale: "fr",
  locales: ["en", "fr"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

const dictionaries: {en: () => Promise<TranslationDictionary>, fr: () => Promise<TranslationDictionary>}  = {
  en: () => import("./locales/en.json").then((module) => module.default) ,
  fr: () => import("./locales/fr.json").then((module) => module.default),
};

export const getTranslation = async (locale: Locale): Promise<TranslationDictionary> =>
  dictionaries[locale]?.() ?? await dictionaries.fr();