import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";
import CookieBanner from "../components/CookieBanner";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }: AppProps) {
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
      <div className="app">
        <Navbar />
        {/* <FPSStats /> */}
        <Component {...pageProps} />
        <Footer />
      </div>
      <CookieBanner />
    </>
  );
}

export default appWithTranslation(App);
