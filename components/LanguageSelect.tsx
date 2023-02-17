import { useTranslation } from "react-i18next";

const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select onChange={(e) => changeLanguage(e.target.value)}>
      <option value="en">🇬🇧</option>
      <option value="fr">🇫🇷</option>
    </select>
  );
};

export default LanguageSelect;
