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

function Eyebrow({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-brass/40 bg-brass/10 px-4 py-1.5 font-serif font-semibold text-[1.14rem] text-brassdark">
      {children}
    </span>
  );
}

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
        <div className="relative mx-auto grid max-w-shell grid-cols-1 items-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-24">
          <div>
            <h1 className="max-w-[16ch] text-[clamp(2.3rem,4.6vw,3.6rem)]">
              We build software the way a craftsperson builds a tool.
            </h1>
            <span className="mt-5 inline-flex w-fit font-semibold items-center rounded-full border border-paper/20 bg-paper/5 px-4 py-1.5 text-[1.1rem] tracking-wide text-paper">
              Based in India, building for the world
            </span>
            <p className="mt-5 max-w-[48ch] text-[1.18rem] text-paper/80">
              We build our own software products and custom web and
              mobile applications for businesses whose workflows do not
              fit off-the-shelf tools. AcadTracker, our CRM for education
              consultancies, is where we started — not where we stop.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#services" className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-[1.09rem] font-semibold text-ink no-underline shadow-lg shadow-brass/20 transition-colors hover:bg-[#c79549]">
                What We Do
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-[1.09rem] font-semibold text-paper no-underline transition-colors hover:border-paper hover:bg-paper/5">
                Get in touch
              </a>
            </div>
            <dl className="mt-11 grid max-w-[48ch] grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-paper/10 bg-paper/5 px-4 py-3.5">
                <dt className="font-serif font-semibold text-[1.22rem] text-paper">2026</dt>
                <dd className="mt-0.5 text-[1.02rem] text-paper/60">
                  Year founded
                </dd>
              </div>
              <div className="rounded-2xl border border-paper/10 bg-paper/5 px-4 py-3.5">
                <dt className="font-serif font-semibold text-[1.22rem] text-paper">
                  Product + custom
                </dt>
                <dd className="mt-0.5 text-[1.02rem] text-paper/60">
                  Two sides of one team
                </dd>
              </div>
              <div className="rounded-2xl border border-paper/10 bg-paper/5 px-4 py-3.5">
                <dt className="font-serif font-semibold text-[1.22rem] text-paper">
                  Web &amp; mobile
                </dt>
                <dd className="mt-0.5 text-[1.02rem] text-paper/60">
                  End to end, in-house
                </dd>
              </div>
            </dl>
          </div>
          <HeroSchematic />
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-paper" id="about">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-14 flex flex-col gap-4">
            <Eyebrow>About Us</Eyebrow>
            <h2 className="max-w-[26ch] text-[clamp(1.85rem,3.2vw,2.55rem)] text-ink">
              A small, self-funded team building our own product and
              custom software for clients.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[200px_1fr]">
            <dl className="grid gap-3">
              <div className="rounded-2xl bg-paper2 px-4 py-3.5">
                <dt className="text-[0.9rem] text-slatesoft">What We Do</dt>
                <dd className="mt-0.5 font-serif font-semibold text-[1.08rem] text-ink">
                  Products &amp; custom software
                </dd>
              </div>
              <div className="rounded-2xl bg-paper2 px-4 py-3.5">
                <dt className="text-[0.9rem] text-slatesoft">
                  Our Product
                </dt>
                <dd className="mt-0.5 font-serif font-semibold text-[1.08rem] text-ink">
                  AcadTracker
                </dd>
              </div>
              <div className="rounded-2xl bg-paper2 px-4 py-3.5">
                <dt className="text-[0.9rem] text-slatesoft">Model</dt>
                <dd className="mt-0.5 font-serif font-semibold text-[1.08rem] text-ink">
                  Self-funded, hands-on
                </dd>
              </div>
            </dl>
            <div>
              <p className="max-w-[58ch] text-[1.18rem] text-ink2">
                We started by building AcadTracker for study-abroad and
                college-placement consultancies running their business on
                spreadsheets and tools never built for how they work.
                Fitting the software to the business, not the other way
                around, is still how we work today — whether what we're
                building is our own product or something custom for you.
              </p>
              <p className="mt-4 max-w-[58ch] text-[1.18rem] text-ink2">
                We are self-funded, so we choose the projects we can do
                justice to instead of taking on more than one team can
                handle well. That is what lets the same people stay with
                you from the first conversation through years of support
                afterward.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                  <dt className="font-serif font-semibold text-[1.12rem] text-ink">
                    Built around your work
                  </dt>
                  <dd className="mt-1.5 text-[1.06rem] text-slate">
                    Software shaped to your process, not a template you
                    have to adapt to.
                  </dd>
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                  <dt className="font-serif font-semibold text-[1.12rem] text-ink">
                    One team, start to finish
                  </dt>
                  <dd className="mt-1.5 text-[1.06rem] text-slate">
                    You work directly with the people writing the code —
                    no account manager relaying messages in between.
                  </dd>
                </div>
                <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-sm">
                  <dt className="font-serif font-semibold text-[1.12rem] text-ink">Built to last</dt>
                  <dd className="mt-1.5 text-[1.06rem] text-slate">
                    We think in years of upkeep, not a quick exit.
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-paper2" id="services">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-14 flex flex-col gap-4">
            <Eyebrow>What We Do</Eyebrow>
            <h2 className="max-w-[26ch] text-[clamp(1.85rem,3.2vw,2.55rem)] text-ink">
              Software products, web development, mobile development, and
              support.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-serif font-semibold text-[1.13rem] text-brassdark">
                  01
                </span>
                <h3 className="font-serif text-[1.4rem] text-ink">
                  Software Products
                </h3>
                <p className="mt-3 max-w-[68ch] text-[1.13rem] text-ink2">
                  We build products we run ourselves, so we feel every
                  rough edge before a client would. AcadTracker is the
                  first — a CRM for study-abroad and domestic education
                  consultancies, covering everything from first enquiry
                  to a confirmed admission. It is not a side project; it
                  is a business we operate, which means every feature
                  earns its place before it ships.
                </p>
                <ul className="m-0 mt-4 grid grid-cols-1 gap-x-8 gap-y-2 list-disc pl-5 text-[1.08rem] text-ink2 sm:grid-cols-2">
                  <li>Lead and applicant tracking, end to end</li>
                  <li>Student records and document management</li>
                  <li>Multi-branch and multi-user access</li>
                  <li>Payments and plan management</li>
                </ul>
                <a href="#product" className="mt-5 inline-flex items-center gap-2 text-[1.12rem] font-medium text-brassdark no-underline hover:underline">
                  More about AcadTracker →
                </a>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-serif font-semibold text-[1.13rem] text-brassdark">
                  02
                </span>
                <h3 className="font-serif text-[1.4rem] text-ink">
                  Web Development
                </h3>
                <p className="mt-3 max-w-[68ch] text-[1.13rem] text-ink2">
                  When off-the-shelf tools do not fit, we design and
                  build the web application your business actually runs
                  on. We work in the MERN stack and Next.js, backed by
                  PostgreSQL, so what you get loads fast, holds up under
                  real traffic, and is straightforward for another
                  engineer to pick up later.
                </p>
                <ul className="m-0 mt-4 grid grid-cols-1 gap-x-8 gap-y-2 list-disc pl-5 text-[1.08rem] text-ink2 sm:grid-cols-2">
                  <li>Customer and client portals</li>
                  <li>Internal tools and admin dashboards</li>
                  <li>Booking and workflow systems</li>
                  <li>Company and product websites</li>
                </ul>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[1.12rem] font-medium text-brassdark no-underline hover:underline">
                  Tell us what you need →
                </a>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-serif font-semibold text-[1.13rem] text-brassdark">
                  03
                </span>
                <h3 className="font-serif text-[1.4rem] text-ink">
                  Mobile Development
                </h3>
                <p className="mt-3 max-w-[68ch] text-[1.13rem] text-ink2">
                  For teams and customers who need it in their pocket, we
                  build Android and iOS apps that feel native rather than
                  a web page wrapped in an app shell — for field teams
                  working outside the office, and for customer-facing
                  apps people come back to every day.
                </p>
                <ul className="m-0 mt-4 grid grid-cols-1 gap-x-8 gap-y-2 list-disc pl-5 text-[1.08rem] text-ink2 sm:grid-cols-2">
                  <li>Field and operations apps</li>
                  <li>Customer-facing apps</li>
                  <li>Apps that sync with your existing web platform</li>
                  <li>Publishing and app store listing support</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-serif font-semibold text-[1.13rem] text-brassdark">
                  04
                </span>
                <h3 className="font-serif text-[1.4rem] text-ink">
                  Support &amp; Maintenance
                </h3>
                <p className="mt-3 max-w-[68ch] text-[1.13rem] text-ink2">
                  Launch is the start of the relationship, not the end of
                  it. We maintain and improve what we build — fixing
                  issues, shipping small improvements, and making changes
                  as your business changes — with a direct line to the
                  person who actually knows your project, not a ticket
                  queue.
                </p>
                <ul className="m-0 mt-4 grid grid-cols-1 gap-x-8 gap-y-2 list-disc pl-5 text-[1.08rem] text-ink2 sm:grid-cols-2">
                  <li>Bug fixes and uptime monitoring</li>
                  <li>Ongoing feature improvements</li>
                  <li>Onboarding for new team members</li>
                  <li>A direct line to your original team</li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-paper" id="process">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-14 flex flex-col gap-4">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="max-w-[22ch] text-[clamp(1.85rem,3.2vw,2.55rem)] text-ink">
              Four steps from first call to running day-to-day.
            </h2>
          </div>
          <div>
            <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0">
              {[
                {
                  n: "01",
                  t: "Understand the work",
                  d: "We sit with your team and map how work actually moves today — the steps, the people, and where time gets lost.",
                },
                {
                  n: "02",
                  t: "Design the fit",
                  d: "Whether it is configuring AcadTracker or scoping a custom build, we shape the software around your process, roles, and stages.",
                },
                {
                  n: "03",
                  t: "Build, migrate, and train",
                  d: "We build in short cycles, migrate your existing data, and train every team on the workflow they will use each day.",
                },
                {
                  n: "04",
                  t: "Support for the long run",
                  d: "Ongoing maintenance, improvements, and a direct line to the people who built it — not a ticket lottery.",
                },
              ].map((s) => (
                <li key={s.n} className="grid grid-cols-[3rem_1fr] gap-5 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 font-serif font-semibold text-[1.02rem] text-brassdark">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.16rem] text-ink">
                      {s.t}
                    </h3>
                    <p className="mt-1.5 max-w-[62ch] text-[1.1rem] text-ink2">
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
      <section className="bg-paper2" id="product">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-14 flex flex-col gap-4">
            <Eyebrow>Our Product</Eyebrow>
            <h2 className="max-w-[22ch] text-[clamp(1.85rem,3.2vw,2.55rem)] text-ink">
              AcadTracker — the CRM for education consultancies.
            </h2>
          </div>
          <div>
            <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-xl shadow-ink/10">
                <a href="https://acadtracker.com" target="_blank" rel="noopener noreferrer" className="block bg-ink">
                  <Image src={acadtrackerLogo} alt="AcadTracker — empowering consultancies, simplifying admissions" priority={false} sizes="(max-width: 768px) 100vw, 700px" className="h-auto w-full object-contain" />
                </a>

                <div className="p-6 sm:p-10">
                <div className="mb-4 flex flex-wrap items-baseline justify-between gap-3">
                  <span className="text-[1.5rem] font-serif font-semibold text-ink">
                    AcadTracker
                  </span>
                  <span className="rounded-full border border-brass bg-brass/10 px-3 py-1 text-[0.9rem] text-brassdark">
                    Live
                  </span>
                </div>
                <p className="mb-2 max-w-[62ch] text-[1.12rem] text-slate">
                  AcadTracker brings enquiries, applications, documents,
                  and payments into one place — built for study-abroad
                  consultancies and domestic college-placement
                  consultancies running multiple branches.
                </p>
                <p className="mb-7 text-[1.12rem] text-slate">
                  Learn more at{" "}
                  <a href="https://acadtracker.com" target="_blank" rel="noopener noreferrer" className="font-medium text-brassdark underline underline-offset-2">
                    acadtracker.com
                  </a>
                </p>
                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <div className="rounded-2xl bg-paper2 p-5">
                    <h4 className="mb-2.5 text-[1.08rem] font-semibold font-sans text-slatesoft">
                      What it handles
                    </h4>
                    <ul className="m-0 list-disc space-y-2 pl-5 text-[1.09rem] text-ink2">
                      <li>Lead and applicant tracking, end to end</li>
                      <li>Student records and document management</li>
                      <li>College and university application pipelines</li>
                      <li>Employee and branch-level access</li>
                      <li>Payments and plan management</li>
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-paper2 p-5">
                    <h4 className="mb-2.5 text-[1.08rem] font-semibold font-sans text-slatesoft">
                      Built for
                    </h4>
                    <ul className="m-0 list-disc space-y-2 pl-5 text-[1.09rem] text-ink2">
                      <li>Study abroad and overseas education agencies</li>
                      <li>Domestic & international college-placement consultancies</li>
                      <li>Multi-branch consultancy networks</li>
                      <li>Teams replacing spreadsheets or legacy CRMs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-ink2 text-white px-6 py-3.5 text-[1.09rem] font-semibold no-underline shadow-lg shadow-ink/20 transition-colors hover:bg-ink">
                    Request A Walkthrough
                  </a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-paper" id="contact">
        <div className="mx-auto max-w-shell px-5 py-20 sm:px-8 sm:py-24">
          <div className="mb-14 flex flex-col gap-4">
            <Eyebrow>Contact Us</Eyebrow>
            <h2 className="max-w-[22ch] text-[clamp(1.85rem,3.2vw,2.55rem)] text-ink">
              Talk to us about AcadTracker or a project of your own.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_320px]">
            <div className="rounded-3xl border border-ink/10 bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
            <div className="rounded-3xl bg-paper2 p-6 sm:p-8">
              <h4 className="mb-3 font-serif font-semibold text-[1.13rem] text-ink">Direct</h4>
              <p className="mb-1.5 text-[1.09rem] text-slate">
                contactus@enrilotechnologies.com
              </p>
              <p className="mb-1.5 text-[1.09rem] text-slate">
                Mon–Fri, 10am–6pm IST
                <br />
                Sat, 10am-4pm IST
              </p>
              <h4 className="mb-3 mt-6 font-serif font-semibold text-[1.13rem] text-ink">
                Based in
              </h4>
              <p className="mb-1.5 text-[1.09rem] text-slate">India</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
