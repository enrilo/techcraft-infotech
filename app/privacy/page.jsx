export const metadata = {
  title: "Privacy Policy",
  description:
    "How TechCraft Infotech collects, uses, and protects data across our website and products, including AcadTracker.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[72ch] px-8 py-16 sm:px-5 sm:py-24">
      <h1 className="mb-2 text-[2rem]">Privacy Policy</h1>
      <p className="mb-10 text-[0.88rem] text-slatesoft">
        Last updated: [insert date] — replace this placeholder before
        publishing.
      </p>

      <p className="text-[0.98rem] text-ink2">
        This Privacy Policy explains how TechCraft Infotech (&quot;we&quot;,
        &quot;us&quot;) collects and uses information through this website
        and through our product, AcadTracker. Replace the placeholders below
        with your actual practices before this goes live — this draft is a
        starting structure, not legal advice.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Information we collect
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-[0.98rem] text-ink2">
        <li>
          Contact details you submit through our contact form (name, email,
          message)
        </li>
        <li>
          Usage data collected via Google Analytics (pages visited,
          approximate location, device type, referral source)
        </li>
        <li>
          For AcadTracker customers: data entered into the product, such as
          lead and student records, handled under a separate data
          processing agreement
        </li>
      </ul>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        How we use it
      </h2>
      <ul className="list-disc space-y-2 pl-5 text-[0.98rem] text-ink2">
        <li>To respond to enquiries submitted through this site</li>
        <li>To understand site traffic and improve content</li>
        <li>To operate and support AcadTracker for our customers</li>
      </ul>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Cookies and analytics
      </h2>
      <p className="text-[0.98rem] text-ink2">
        We use Google Analytics to understand how visitors use this site.
        Google Analytics sets cookies and collects usage data; you can opt
        out using your browser settings or the Google Analytics opt-out
        browser add-on.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Data sharing
      </h2>
      <p className="text-[0.98rem] text-ink2">
        We do not sell personal data. We share data only with service
        providers that help us operate this site and our products (for
        example, hosting and analytics providers), under confidentiality
        obligations.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Your rights
      </h2>
      <p className="text-[0.98rem] text-ink2">
        You can request access to, correction of, or deletion of your
        personal data by contacting us at hello@techcraftinfotech.com.
      </p>

      <h2 className="mb-3 mt-10 font-sans text-[1.1rem] font-semibold">
        Contact
      </h2>
      <p className="text-[0.98rem] text-ink2">
        Questions about this policy: hello@techcraftinfotech.com
      </p>
    </div>
  );
}
