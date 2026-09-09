"use client";

import { OPEN_CONSENT_EVENT } from "@/components/CookieConsent";

/** Footer link that reopens the cookie consent banner. */
export default function CookiePreferencesButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))} className="bg-transparent p-0 text-paper no-underline hover:text-brass">
      Cookie Preferences
    </button>
  );
}
