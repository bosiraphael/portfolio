import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationsEn from "../translations/en.json";
import translationsFr from "../translations/fr.json";
import CookieBanner from "../components/CookieBanner";
import { Toaster } from "react-hot-toast";
import FPSStats from "react-fps-stats";

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
      <Toaster
        containerStyle={{
          top: "7rem",
          zIndex: 9999,
        }}
        toastOptions={{
          style: {
            position: "relative",
            background: "#fff",
            color: "#000",
          },
        }}
      />

      <Navbar />
      {/* <FPSStats /> */}
      <Component {...pageProps} />
      <CookieBanner />
      <Footer />
    </>
  );
}
