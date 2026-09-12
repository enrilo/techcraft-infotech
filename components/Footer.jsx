import Link from "next/link";
import Image from "next/image";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";
import enriloLogo from "@/app/assets/images/company-logos/no-tagline/regular-bg/enrilo-tech-logo-trimmed.png";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 px-5 py-8 text-[0.85rem] sm:px-8">
        <div className="flex items-center gap-3 opacity-75">
          <Image src={enriloLogo} alt="Enrilo Tech" className="h-6 w-auto object-contain" />
          <span>
            © {new Date().getFullYear()} Enrilo Tech. All rights
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
