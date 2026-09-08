import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/15 bg-paper">
      <div className="mx-auto flex h-[72px] max-w-shell items-center justify-between px-8 sm:px-5">
        <Link href="/" className="flex items-baseline gap-2 font-serif text-[1.05rem] font-semibold tracking-tight no-underline">
          TechCraft <span className="text-brassdark">Infotech</span>
        </Link>
        <ul className="flex gap-8 list-none m-0 p-0">
          <li>
            <a href="/#about" className="border-b border-transparent pb-0.5 text-[0.94rem] text-slate no-underline hover:border-brass hover:text-ink">
              About Us
            </a>
          </li>
          <li>
            <a href="/#services" className="border-b border-transparent pb-0.5 text-[0.94rem] text-slate no-underline hover:border-brass hover:text-ink">
              What We Do
            </a>
          </li>
          <li>
            <a href="/#product" className="border-b border-transparent pb-0.5 text-[0.94rem] text-slate no-underline hover:border-brass hover:text-ink">
              AcadTracker
            </a>
          </li>
          <li>
            <a href="/#contact" className="border-b border-transparent pb-0.5 text-[0.94rem] text-slate no-underline hover:border-brass hover:text-ink">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}