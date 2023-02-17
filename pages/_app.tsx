import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import CookieBanner from "../components/CookieBanner";
import FPSStats from "react-fps-stats";

const translationsEn = {};
const translationsFr = {};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationsEn,
    },
    fr: {
      translation: translationsFr,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <FPSStats />
      <Component {...pageProps} />
      <CookieBanner />
      <Footer />
    </>
  );
}
