import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-between gap-4 px-8 py-8 text-[0.85rem] opacity-75 sm:px-5">
        <span>
          © {new Date().getFullYear()} TechCraft Infotech. All rights
          reserved.
        </span>
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
        </ul>
      </div>
    </footer>
  );
}
