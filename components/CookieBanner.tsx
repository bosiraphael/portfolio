import { useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from "react-ga4";

export default function CookieBanner() {
  const handleAcceptCookie = () => {
    ReactGA.initialize([
      {
        trackingId: "G-T5KZEQ07BN",
      },
    ]);
  };

  useEffect(() => {
    const acceptButton = document.getElementById("accept");

    acceptButton?.addEventListener("mouseenter", () => {
      acceptButton.style.background = "#ffffff";
      acceptButton.style.color = "#183f1b";
    });
    acceptButton?.addEventListener("mouseleave", () => {
      acceptButton.style.background = "#183f1b";
      acceptButton.style.color = "#ffffff";
    });

    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);

  return (
    <CookieConsent
      enableDeclineButton
      location="bottom"
      buttonText="Accept"
      onAccept={handleAcceptCookie}
      onDecline={() => {}}
      style={{
        height: "10rem",
        background: "#ffffff",
        color: "#121212",
        fontSize: "1.6rem",
        borderTop: "1px solid #616161",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingRight: "10rem",
        paddingLeft: "5rem",
      }}
      buttonStyle={{
        background: "#183f1b",
        color: "#ffffff",
        fontSize: "1.6rem",
        borderRadius: "0.5rem",
      }}
      buttonId="accept"
      declineButtonText="Decline"
      declineButtonId="decline"
      declineButtonStyle={{
        background: "#ffffff",
        color: "#616161",
        border: "1px solid #616161",
        fontSize: "1.6rem",
        borderRadius: "0.5rem",
      }}
    >
      <span>This website uses cookies 🍪</span>
    </CookieConsent>
  );
}
