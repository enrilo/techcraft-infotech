import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.techcraftinfotech.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TechCraft Infotech | Software company building AcadTracker",
    template: "%s | TechCraft Infotech",
  },
  description:
    "TechCraft Infotech is a software company building practical, well-crafted products for niche industries. Our first product, AcadTracker, is a CRM built for study abroad and overseas education consultancies.",
  keywords: [
    "TechCraft Infotech",
    "TechCraft",
    "AcadTracker",
    "education consultancy software",
    "study abroad CRM",
    "overseas education CRM",
    "education CRM software",
    "student lead management software",
    "education consultancy management system",
    "software company",
    "SaaS product studio",
  ],
  authors: [{ name: "TechCraft Infotech" }],
  creator: "TechCraft Infotech",
  publisher: "TechCraft Infotech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TechCraft Infotech",
    title: "TechCraft Infotech | Software company building AcadTracker",
    description:
      "A software company building practical, well-crafted products for niche industries — starting with AcadTracker, a CRM for education consultancies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechCraft Infotech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCraft Infotech | Software company building AcadTracker",
    description:
      "A software company building practical, well-crafted products for niche industries — starting with AcadTracker, a CRM for education consultancies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechCraft Infotech",
  url: siteUrl,
  description:
    "TechCraft Infotech is a software company building practical, well-crafted products for niche industries.",
  brand: [
    {
      "@type": "SoftwareApplication",
      name: "AcadTracker",
      applicationCategory: "BusinessApplication",
      description:
        "CRM platform for education consultancies to manage leads, students, employees, payments, and documents.",
      audience: {
        "@type": "Audience",
        audienceType: "Study abroad and overseas education consultancies",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
