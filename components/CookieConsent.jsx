"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "tc-cookie-consent";

/** Event other components dispatch to reopen the banner. */
export const OPEN_CONSENT_EVENT = "tc-open-cookie-consent";

/**
 * Cookie consent banner wired to Google Consent Mode v2.
 *
 * On first visit, analytics storage is denied by default (see GoogleAnalytics).
 * The banner lets the visitor accept or decline; the choice is saved in
 * localStorage and replayed to gtag on every subsequent load, so the banner
 * only appears once.
 */
function updateConsent(granted) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  const value = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {
      // localStorage unavailable — show the banner
    }

    if (saved === "granted") {
      updateConsent(true);
    } else if (saved === "denied") {
      updateConsent(false);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- the choice lives in localStorage, which is only readable after mount
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  function choose(granted) {
    try {
      localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {
      // ignore persistence failures
    }
    updateConsent(granted);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-50 sm:inset-x-auto sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md"
    >
      <div className="flex flex-col gap-4 rounded-2xl bg-ink px-5 py-5 text-paper shadow-2xl shadow-ink/30 text-[1.1rem] sm:px-6">
        <p className="m-0 max-w-none opacity-90">
          We use cookies to analyse site traffic and improve your experience.
          See our{" "}
          <Link href="/privacy" className="text-brass underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-full border border-paper/40 px-4 py-2 font-medium text-paper transition-colors hover:bg-paper/10"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-full bg-brass px-4 py-2 font-medium text-ink transition-colors hover:bg-brassdark"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
