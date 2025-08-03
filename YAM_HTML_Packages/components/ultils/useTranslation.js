import { useRouter } from "next/router";
import { useCallback } from "react";
import en from "../../public/locales/en/en";

const TRANSLATIONS = { en };

export default function useTranslation() {
  const router = useRouter();
  const { locale, asPath } = router;

  const setLocale = useCallback(
    (locale) => {
      router.push(asPath, asPath, { locale });
    },
    [asPath, router]
  );

  const t = useCallback(
    (keyString) => {
      return TRANSLATIONS[locale][keyString];
    },
    [locale]
  );

  return { t, locale, setLocale };
}