import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 px-5 py-8 text-[0.91rem] sm:px-8">
        <div className="flex items-center gap-3 opacity-75">
          <img src="/enrilo-icon-transparent.svg" alt="Enrilo Technologies" className="h-6 w-6 object-contain" />
          <span>
            © {new Date().getFullYear()} Enrilo Technologies LLP. All rights
            reserved.
          </span>
        </div>
        <ul className="m-0 flex list-none gap-6 p-0">
          <li>
            <Link href="/privacy" className="text-paper no-underline hover:text-brass">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-paper no-underline hover:text-brass">
              Terms of Service
            </Link>
          </li>
          <li>
            <CookiePreferencesButton />
          </li>
        </ul>
      </div>
    </footer>
  );
}
