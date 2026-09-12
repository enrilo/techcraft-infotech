export const metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the enrilotechnologies.com website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="mb-2 text-[2rem]">Terms of Service</h1>
      <p className="mb-10 text-md font-semibold text-slate">
        Effective From: 8 September, 2026.
        <br />
        Last Updated On: 8 September, 2026.
      </p>

      <p className="text-[1rem] text-ink2">
        These Terms of Service (&quot;Terms&quot;) govern your access to and use
        of this website, enrilotechnologies.com, operated by Enrilo Technologies
        (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By using this
        website, you agree to these Terms. If you do not agree, please do not
        use the site.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Use of this site
      </h2>
      <p className="text-[1rem] text-ink2">
        You may browse this website and use the contact form to reach us for
        legitimate business purposes. You agree not to misuse the site,
        including by submitting unlawful, harmful, misleading, or abusive
        content, attempting to gain unauthorised access, interfering with its
        operation, or scraping or harvesting data at scale without our
        permission.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        AcadTracker
      </h2>
      <p className="text-[1rem] text-ink2">
        This website describes our product, AcadTracker, but does not itself
        provide it. Use of AcadTracker is governed by AcadTracker&rsquo;s own
        Terms of Service and Terms and Conditions, which are published
        separately on the AcadTracker website, together with any order form or
        subscription agreement entered into at signup. Those documents — NOT THESE TERMS — apply to the AcadTracker product.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Intellectual property
      </h2>
      <p className="text-[1rem] text-ink2">
        The content, branding, text, graphics, and design of this website
        belong to Enrilo Technologies or its licensors and are protected by
        applicable laws. You may not copy, reproduce, republish, or create
        derivative works from any part of the site. {/* without our prior written
        permission, except for personal, non-commercial reference. */}
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Links to other websites
      </h2>
      <p className="text-[1rem] text-ink2">
        This site may link to other websites, including the AcadTracker
        website. Those sites have their own terms and conditions and privacy
        policies, and we encourage you to review them if you have any
        questions about how they operate.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Disclaimers
      </h2>
      <p className="text-[1rem] text-ink2">
        This website and its content are provided &quot;as is&quot; and &quot;as
        available&quot; without warranties of any kind, whether express or
        implied, including warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the
        site will be uninterrupted, error-free, or free of harmful components,
        or that the information on it is complete or current.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Limitation of liability
      </h2>
      <p className="text-[1rem] text-ink2">
        To the maximum extent permitted by law, Enrilo Technologies will not be
        liable for any indirect, incidental, special, consequential, or
        punitive damages, or for any loss of profits, revenue, data, or
        goodwill, arising out of or relating to your use of (or inability to
        use) this website.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Governing law
      </h2>
      <p className="text-[1rem] text-ink2">
        These Terms are governed by the laws of India, without regard to its
        conflict-of-laws rules. The courts located in India will have exclusive
        jurisdiction over any dispute arising from these Terms or your use of
        this website.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Changes to these terms
      </h2>
      <p className="text-[1rem] text-ink2">
        We may update these Terms from time to time. When we make material
        changes, we will update the &ldquo;Last Updated On&rdquo; date above.
        Continued use of the site after changes take effect means you accept
        the updated Terms.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.3rem] font-semibold">
        Contact
      </h2>
      <p className="text-[1rem] text-ink2">
        Questions about these Terms:{" "}
        <a
          href="mailto:hello@enrilotechnologies.com"
          className="text-brass underline"
        >
          hello@enrilotechnologies.com
        </a>
      </p>
    </div>
  );
}
