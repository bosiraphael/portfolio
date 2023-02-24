import { useRouter } from "next/router";

const LanguageSelect = () => {
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
    </select>
  );
};

export default LanguageSelect;
