import Image from "next/image";
import HeroSchematic from "@/components/HeroSchematic";
import ContactForm from "@/components/ContactForm";
import acadtrackerLogo from "./assets/images/acadtracker/with-tagline/acadtrack-with-tagline-1920x1080.png";

export const metadata = {
  title: "Enrilo Technologies | Software products and custom web & mobile app development",
  description: "Enrilo Technologies is an India-based software company building its own products and custom web and mobile applications. Our product AcadTracker is a CRM for study abroad and domestic college-placement consultancies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Enrilo Technologies | Software products and custom web & mobile app development",
    description: "India-based software company building its own products and custom web and mobile applications, including AcadTracker, a CRM for education consultancies.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="absolute inset-0 bg-blueprint-grid bg-grid opacity-50"
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />
        <div className="relative mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-20">
          <div>
            <p className="mb-4 text-[0.82rem] tracking-wide text-paper/60">
              Software company · est. in India
            </p>
            <h1 className="max-w-[16ch] text-[clamp(2.1rem,4.2vw,3.3rem)]">
              We build software the way a craftsperson builds a tool.
            </h1>
            <p className="mt-5 max-w-[48ch] text-[1.08rem] text-paper/80">
              Enrilo Technologies builds its own software products and
              designs custom web and mobile applications for businesses
              that need something built around the way they actually work.
              AcadTracker, our CRM for education consultancies, is where we
              started — not where we stop.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 border border-transparent bg-brass px-5 py-3 text-[0.95rem] font-medium text-ink no-underline hover:bg-[#c79549]">
                What we do
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-paper/20 px-5 py-3 text-[0.95rem] font-medium text-paper no-underline hover:border-paper">
                Get in touch
              </a>
            </div>
            <dl className="mt-10 grid max-w-[46ch] grid-cols-2 gap-x-6 gap-y-5 border-t border-paper/15 pt-6 sm:grid-cols-3">
              <div>
                <dt className="font-serif text-[1.15rem] text-paper">2026</dt>
                <dd className="mt-0.5 text-[0.82rem] text-paper/60">
                  Year founded
                </dd>
              </div>
              <div>
                <dt className="font-serif text-[1.15rem] text-paper">
                  Product + custom
                </dt>
                <dd className="mt-0.5 text-[0.82rem] text-paper/60">
                  Two sides of one team
                </dd>
              </div>
              <div>
                <dt className="font-serif text-[1.15rem] text-paper">
                  Web &amp; mobile
                </dt>
                <dd className="mt-0.5 text-[0.82rem] text-paper/60">
                  End to end, in-house
                </dd>
              </div>
            </dl>
          </div>
          <HeroSchematic />
        </div>
      </section>

      {/* ABOUT */}
      <section className="border-b border-ink/15" id="about">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr] md:gap-10">
            <span className="h-fit border-l-2 border-brass pl-3.5 font-serif text-[0.95rem] text-slatesoft">
              About Us
            </span>
            <h2 className="max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
              A small company, built to stay close to what we ship.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
            <dl className="grid gap-5">
              <div>
                <dt className="text-[0.78rem] text-slatesoft">What we do</dt>
                <dd className="mt-0.5 font-serif text-[1rem] text-ink">
                  Products &amp; custom software
                </dd>
              </div>
              <div>
                <dt className="text-[0.78rem] text-slatesoft">
                  Our product
                </dt>
                <dd className="mt-0.5 font-serif text-[1rem] text-ink">
                  AcadTracker
                </dd>
              </div>
              <div>
                <dt className="text-[0.78rem] text-slatesoft">Model</dt>
                <dd className="mt-0.5 font-serif text-[1rem] text-ink">
                  Self-funded, hands-on
                </dd>
              </div>
            </dl>
            <div>
              <p className="max-w-[58ch] text-[1.08rem] text-ink2">
                Enrilo Technologies started by building AcadTracker, a CRM
                for education consultancies that were running their
                business on spreadsheets and generic tools never meant for
                the way they work. That work taught us how to build
                software that fits a business exactly — and we now do the
                same for clients as custom web and mobile applications.
              </p>
              <p className="mt-4 max-w-[58ch] text-[1.08rem] text-ink2">
                We stay deliberately small and hands-on. Whether it is our
                own product or your project, the same team designs it,
                builds it, and supports it for the long run.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="border-t border-ink/15 pt-3.5">
                  <dt className="font-serif text-[0.98rem]">
                    Built around your work
                  </dt>
                  <dd className="mt-1.5 text-[0.93rem] text-slate">
                    Software shaped to your process, not the other way
                    around.
                  </dd>
                </div>
                <div className="border-t border-ink/15 pt-3.5">
                  <dt className="font-serif text-[0.98rem]">
                    One team, start to finish
                  </dt>
                  <dd className="mt-1.5 text-[0.93rem] text-slate">
                    Design, build, and support without handoffs.
                  </dd>
                </div>
                <div className="border-t border-ink/15 pt-3.5">
                  <dt className="font-serif text-[0.98rem]">Built to last</dt>
                  <dd className="mt-1.5 text-[0.93rem] text-slate">
                    Long-term maintenance and support, not a quick exit.
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-ink/15" id="services">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr] md:gap-10">
            <span className="h-fit border-l-2 border-brass pl-3.5 font-serif text-[0.95rem] text-slatesoft">
              What we do
            </span>
            <h2 className="max-w-[24ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
              Our own products, and custom software built for you.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
            <div aria-hidden="true" className="hidden md:block" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="relative border border-ink/15 p-6 sm:p-8">
                <span className="absolute -left-px -top-px h-3.5 w-3.5 border-l border-t border-brass" />
                <h3 className="font-serif text-[1.15rem] text-ink">
                  Software products
                </h3>
                <p className="mt-2.5 text-[0.96rem] text-ink2">
                  Focused products we build, run, and keep improving.
                  AcadTracker is the first — a CRM for study abroad and
                  domestic education consultancies, covering everything
                  from the first enquiry to a confirmed admission.
                </p>
                <a
                  href="#product"
                  className="mt-4 inline-flex items-center gap-2 text-[0.92rem] font-medium text-brassdark no-underline hover:underline"
                >
                  More about AcadTracker →
                </a>
              </div>
              <div className="relative border border-ink/15 p-6 sm:p-8">
                <span className="absolute -left-px -top-px h-3.5 w-3.5 border-l border-t border-brass" />
                <h3 className="font-serif text-[1.15rem] text-ink">
                  Custom web &amp; mobile apps
                </h3>
                <p className="mt-2.5 text-[0.96rem] text-ink2">
                  When off-the-shelf tools do not fit, we design and build
                  the application you need — customer portals, internal
                  tools, dashboards, booking and workflow systems — as
                  responsive web apps and native-feeling mobile apps.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[0.92rem] font-medium text-brassdark no-underline hover:underline"
                >
                  Tell us what you need →
                </a>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <h4 className="font-serif text-[1rem] text-ink">
                  Web applications
                </h4>
                <p className="mt-1.5 text-[0.92rem] text-slate">
                  Dashboards, portals, and internal tools built to load
                  fast and scale with your team.
                </p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <h4 className="font-serif text-[1rem] text-ink">
                  Mobile applications
                </h4>
                <p className="mt-1.5 text-[0.92rem] text-slate">
                  Android and iOS apps for field teams, customers, and
                  on-the-go operations.
                </p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <h4 className="font-serif text-[1rem] text-ink">
                  APIs &amp; integrations
                </h4>
                <p className="mt-1.5 text-[0.92rem] text-slate">
                  Connect the systems you already use so data stops living
                  in separate silos.
                </p>
              </div>
              <div className="border-t border-ink/15 pt-4">
                <h4 className="font-serif text-[1rem] text-ink">
                  Ongoing support
                </h4>
                <p className="mt-1.5 text-[0.92rem] text-slate">
                  Maintenance, improvements, and a direct line to the
                  people who built it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-b border-ink/15" id="process">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr] md:gap-10">
            <span className="h-fit border-l-2 border-brass pl-3.5 font-serif text-[0.95rem] text-slatesoft">
              How we work
            </span>
            <h2 className="max-w-[22ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
              Four steps from first call to running day-to-day.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
            <div aria-hidden="true" className="hidden md:block" />
            <ol className="m-0 grid list-none grid-cols-1 gap-0 p-0">
              {[
                {
                  n: "01",
                  t: "Understand the work",
                  d: "We sit with your team and map how things actually move today — the steps, the people, and where time gets lost.",
                },
                {
                  n: "02",
                  t: "Design the fit",
                  d: "Whether it is configuring AcadTracker or scoping a custom build, we shape the software around your process, roles, and stages.",
                },
                {
                  n: "03",
                  t: "Build, migrate, and train",
                  d: "We build in short cycles, bring across your existing data, and train every team on the workflow they will use each day.",
                },
                {
                  n: "04",
                  t: "Support for the long run",
                  d: "Ongoing maintenance, improvements, and a direct line to the people who built it — not a ticket lottery.",
                },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-5 border-t border-ink/15 py-5 last:border-b">
                  <span className="font-serif text-[1.1rem] text-brassdark">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.05rem] text-ink">
                      {s.t}
                    </h3>
                    <p className="mt-1.5 max-w-[62ch] text-[0.95rem] text-ink2">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRODUCT */}
      <section className="border-b border-ink/15" id="product">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr] md:gap-10">
            <span className="h-fit border-l-2 border-brass pl-3.5 font-serif text-[0.95rem] text-slatesoft">
              Our product
            </span>
            <h2 className="max-w-[22ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
              AcadTracker — the CRM for education consultancies.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
            <div aria-hidden="true" className="hidden md:block" />
            <div>
              <div className="relative border border-ink/15">
                <span className="absolute -left-px -top-px z-10 h-3.5 w-3.5 border-l border-t border-brass" />
                <span className="absolute -bottom-px -right-px z-10 h-3.5 w-3.5 border-b border-r border-brass" />

                <a href="https://acadtracker.com" target="_blank" rel="noopener noreferrer" className="block bg-ink">
                  <Image src={acadtrackerLogo} alt="AcadTracker — empowering consultancies, simplifying admissions" priority={false} sizes="(max-width: 768px) 100vw, 700px" className="h-auto w-full object-contain" />
                </a>

                <div className="p-6 sm:p-10">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
                  <span className="text-[1.4rem] font-serif">
                    AcadTracker
                  </span>
                  <span className="border border-brass px-2.5 py-1 text-[0.78rem] text-brassdark">
                    Live
                  </span>
                </div>
                <p className="mb-2 max-w-[62ch] text-[1.02rem] text-slate">
                  A CRM built for study abroad consultancies and for
                  domestic consultancies guiding students through college
                  placement in your country; one place to run enquiries,
                  applications, documents, and payments across every
                  branch.
                </p>
                <p className="mb-7 text-[0.92rem] text-slate">
                  Learn more at{" "}
                  <a href="https://acadtracker.com" target="_blank" rel="noopener noreferrer" className="font-medium text-brassdark underline underline-offset-2">
                    acadtracker.com
                  </a>
                </p>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div>
                    <h4 className="mb-2.5 text-[0.88rem] font-semibold font-sans text-slatesoft">
                      What it handles
                    </h4>
                    <ul className="m-0 list-disc space-y-2 pl-5 text-[0.95rem] text-ink2">
                      <li>Lead and applicant tracking, end to end</li>
                      <li>Student records and document management</li>
                      <li>College and university application pipelines</li>
                      <li>Employee and branch-level access</li>
                      <li>Payments and plan management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2.5 text-[0.88rem] font-semibold font-sans text-slatesoft">
                      Built for
                    </h4>
                    <ul className="m-0 list-disc space-y-2 pl-5 text-[0.95rem] text-ink2">
                      <li>Study abroad and overseas education agencies</li>
                      <li>Domestic & international college-placement consultancies</li>
                      <li>Multi-branch consultancy networks</li>
                      <li>Teams replacing spreadsheets or legacy CRMs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <a href="#contact" className="inline-flex items-center gap-2 bg-brass px-5 py-3 text-[0.95rem] font-medium text-ink no-underline hover:bg-[#c79549]">
                    Request a walkthrough
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="mx-auto max-w-shell px-5 py-16 sm:px-8 sm:py-20">
          <div className="mb-12 grid grid-cols-1 gap-3 md:grid-cols-[200px_1fr] md:gap-10">
            <span className="h-fit border-l-2 border-brass pl-3.5 font-serif text-[0.95rem] text-slatesoft">
              Contact Us
            </span>
            <h2 className="max-w-[22ch] text-[clamp(1.5rem,2.6vw,2.1rem)]">
              Talk to us about AcadTracker or a project of your own.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr_320px]">
            <div aria-hidden="true" className="hidden md:block" />
            <ContactForm />
            <div className="border-t border-ink/15 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <h4 className="mb-3 font-serif text-[1.05rem]">Direct</h4>
              <p className="mb-1.5 text-[0.95rem] text-slate">
                contactus@enrilotechnologies.com
              </p>
              <p className="mb-1.5 text-[0.95rem] text-slate">
                Mon–Fri, 10am–6pm IST
                <br />
                Sat, 10am-4pm IST
              </p>
              <h4 className="mb-3 mt-6 font-serif text-[1.05rem]">
                Based in
              </h4>
              <p className="mb-1.5 text-[0.95rem] text-slate">India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
