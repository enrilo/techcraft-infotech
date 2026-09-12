import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieConsent from "@/components/CookieConsent";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.enrilotechnologies.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#152238",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Enrilo Technologies | Software products and custom web & mobile apps",
    template: "%s | Enrilo Technologies",
  },
  description:
    "Enrilo Technologies is a software company building its own products and custom web and mobile applications. Our product AcadTracker is a CRM for study abroad and domestic college-placement consultancies.",
  keywords: [
    "Enrilo Technologies",
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
  authors: [{ name: "Enrilo Technologies" }],
  creator: "Enrilo Technologies",
  publisher: "Enrilo Technologies",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Enrilo Technologies",
    title:
      "Enrilo Technologies | Software products and custom web & mobile apps",
    description:
      "A software company building its own products and custom web and mobile applications — including AcadTracker, a CRM for education consultancies.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Enrilo Technologies | Software products and custom web & mobile apps",
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
    icon: "/enrilo-icon-regular.svg",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Enrilo Technologies",
      url: siteUrl,
      email: "hello@enrilotechnologies.com",
      foundingDate: "2026",
      description:
        "Enrilo Technologies is a software company building its own products and custom web and mobile applications.",
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
        email: "hello@enrilotechnologies.com",
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
      name: "Enrilo Technologies",
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
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500
              });
            `,
          }}
        />
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
        <CookieConsent />
      </body>
    </html>
  );
}
