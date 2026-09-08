import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.techcraftinfotech.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#152238",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "TechCraft Infotech | Software products and custom web & mobile apps",
    template: "%s | TechCraft Infotech",
  },
  description:
    "TechCraft Infotech is a software company building its own products and custom web and mobile applications. Our product AcadTracker is a CRM for study abroad and domestic college-placement consultancies.",
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
    "college placement consultancy software",
    "software company",
    "custom software development",
    "custom web application development",
    "mobile app development",
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
    title:
      "TechCraft Infotech | Software products and custom web & mobile apps",
    description:
      "A software company building its own products and custom web and mobile applications — including AcadTracker, a CRM for education consultancies.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "TechCraft Infotech | Software products and custom web & mobile apps",
    description:
      "A software company building its own products and custom web and mobile applications — including AcadTracker, a CRM for education consultancies.",
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
    icon: "/techcraft-icon-regular.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "TechCraft Infotech",
      url: siteUrl,
      email: "hello@techcraftinfotech.com",
      foundingDate: "2026",
      description:
        "TechCraft Infotech is a software company building its own products and custom web and mobile applications.",
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Place", name: "Worldwide" },
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@techcraftinfotech.com",
        availableLanguage: ["English"],
      },
      knowsAbout: [
        "Custom software development",
        "Web application development",
        "Mobile application development",
        "CRM software",
        "Education consultancy software",
        "API integration",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom web and mobile application development",
            description:
              "Design and development of custom web applications, Android and iOS mobile apps, dashboards, portals, APIs, and integrations, built around a client's own workflow.",
          },
        },
      ],
      brand: {
        "@type": "SoftwareApplication",
        name: "AcadTracker",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "https://acadtracker.com",
        description:
          "CRM platform for study abroad and domestic college-placement consultancies to manage leads, students, applications, employees, payments, and documents.",
        audience: {
          "@type": "Audience",
          audienceType:
            "Study abroad, overseas education, and domestic college-placement consultancies",
        },
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "TechCraft Infotech",
      description:
        "Software products and custom web and mobile application development.",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
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
