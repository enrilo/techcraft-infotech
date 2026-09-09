import Script from "next/script";

/**
 * Loads Google Analytics 4 (gtag.js) site-wide, gated by Consent Mode v2.
 *
 * Reads the Measurement ID from NEXT_PUBLIC_GA_MEASUREMENT_ID so the ID is
 * never hardcoded. Set it in .env.local (see .env.local.example).
 *
 * Consent Mode defaults (all denied) are set by an inline script in the root
 * layout <head> so they run before this tag; the CookieConsent banner then
 * calls `gtag('consent', 'update', ...)` on the visitor's choice. The GA tag
 * only loads when a real Measurement ID is set, so local dev sends no traffic.
 */
export default function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const enabled = gaId && gaId !== "G-XXXXXXXXXX";

  if (!enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
