"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "What We Do" },
  { href: "/#process", label: "How We Work" },
  { href: "/#product", label: "Our Product" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-paper/85 shadow-[0_1px_0_rgba(21,34,56,0.08)] backdrop-blur-md">
      <div className="mx-auto flex h-[64px] max-w-shell items-center justify-between px-5 sm:h-[76px] sm:px-8">
        <Link href="/" onClick={() => setOpen(false)} className="flex items-baseline font-serif text-[1.13rem] gap-1 font-semibold tracking-tight no-underline sm:text-[1.22rem]">
          Enrilo<span className="text-brassdark">Technologies</span>
        </Link>

        {/* desktop nav */}
        <ul className="hidden items-center gap-1 list-none m-0 p-0 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-4 py-2 text-[1.08rem] text-slate no-underline transition-colors hover:bg-ink/5 hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button type="button" aria-label={open ? "Close Menu" : "Open Menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink/5 md:hidden">
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-transform ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-ink transition-transform ${
                open ? "top-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <nav className="px-3 pb-3 md:hidden">
          <ul className="m-0 flex list-none flex-col gap-1 rounded-2xl border border-ink/10 bg-paper p-2 shadow-lg shadow-ink/5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3.5 text-[1.12rem] text-slate no-underline hover:bg-paper2 hover:text-ink">
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