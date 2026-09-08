"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "What We Do" },
  { href: "/#product", label: "AcadTracker" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ink/15 bg-paper">
      <div className="mx-auto flex h-[64px] max-w-shell items-center justify-between px-5 sm:h-[72px] sm:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-baseline gap-2 font-serif text-[1rem] font-semibold tracking-tight no-underline sm:text-[1.05rem]"
        >
          TechCraft <span className="text-brassdark">Infotech</span>
        </Link>

        {/* desktop nav */}
        <ul className="hidden gap-8 list-none m-0 p-0 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="border-b border-transparent pb-0.5 text-[0.94rem] text-slate no-underline hover:border-brass hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform ${
                open ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="border-t border-ink/15 bg-paper md:hidden">
          <ul className="m-0 flex list-none flex-col p-0">
            {links.map((l) => (
              <li key={l.href} className="border-b border-ink/10 last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-5 py-4 text-[0.98rem] text-slate no-underline hover:bg-paper2 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
