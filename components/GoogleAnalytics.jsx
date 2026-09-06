import Script from "next/script";

/**
 * Loads Google Analytics 4 (gtag.js) site-wide.
 *
 * Reads the Measurement ID from NEXT_PUBLIC_GA_MEASUREMENT_ID so the ID is
 * never hardcoded. Set it in .env.local (see .env.local.example). Renders
 * nothing if the env var is unset, so local dev doesn't send test traffic
 * to a real property.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!gaId || gaId === "G-XXXXXXXXXX") {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
