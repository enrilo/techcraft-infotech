export const metadata = {
  title: "Terms of Service",
  description:
    "Terms governing the use of the TechCraft Infotech website and our products, including AcadTracker.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-[72ch] px-5 py-16 sm:px-8 sm:py-24">
      <h1 className="mb-2 text-[2rem]">Terms of Service</h1>
      <p className="mb-10 text-[0.88rem] text-slatesoft">
        Last updated: [insert date] — replace this placeholder before
        publishing.
      </p>

      <p className="text-[0.98rem] text-ink2">
        These Terms govern your use of this website, operated by TechCraft
        Infotech. This draft is a starting structure — have it reviewed by
        counsel before publishing, especially the sections covering
        AcadTracker as a paid product.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Use of this site
      </h2>
      <p className="text-[0.98rem] text-ink2">
        You may browse this site and use the contact form to reach us. You
        may not use the site to submit unlawful, harmful, or abusive
        content.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        AcadTracker
      </h2>
      <p className="text-[0.98rem] text-ink2">
        Use of the AcadTracker product itself is governed by a separate
        agreement or subscription terms provided at signup, which take
        precedence over this website&apos;s terms for anything related to
        the product itself.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Intellectual property
      </h2>
      <p className="text-[0.98rem] text-ink2">
        The content, branding, and design of this site belong to TechCraft
        Infotech unless otherwise noted, and may not be reproduced without
        permission.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Limitation of liability
      </h2>
      <p className="text-[0.98rem] text-ink2">
        This site and its content are provided &quot;as is&quot; without
        warranties of any kind. TechCraft Infotech is not liable for
        damages arising from use of this website.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Changes to these terms
      </h2>
      <p className="text-[0.98rem] text-ink2">
        We may update these Terms from time to time. Continued use of the
        site after changes means you accept the updated Terms.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Contact
      </h2>
      <p className="text-[0.98rem] text-ink2">
        Questions about these terms: hello@techcraftinfotech.com
      </p>
    </div>
  );
}
