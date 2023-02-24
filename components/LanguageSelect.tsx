import { useRouter } from "next/router";

const LanguageSelect = () => {
  const router = useRouter();
  const { pathname, asPath, query } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <select
      onChange={(e) => changeLanguage(e.target.value)}
      value={router.locale}
    >
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
    </select>
  );
};

export default LanguageSelect;
