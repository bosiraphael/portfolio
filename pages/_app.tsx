import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { appWithTranslation } from "next-i18next";
import CookieBanner from "../components/CookieBanner";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pathName = router.pathname;

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
        {pathName !== "/skills" && <Footer />}
      </div>
      <CookieBanner />
    </>
  );
}

export default appWithTranslation(App);
