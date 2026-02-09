import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

const siteUrl = "https://yousef42.github.io";

export const metadata: Metadata = {
  title: {
    default: "یوسف عبدل زاده | رزومه و پورتفولیو",
    template: "%s | یوسف عبدل زاده",
  },
  description:
    "رزومه یوسف عبدل زاده — توسعه‌دهنده اندروید، iOS و وب. تجربه در Kotlin، Flutter، .NET و React. مشاهده پروژه‌ها و مهارت‌ها.",
  keywords: [
    "یوسف عبدل زاده",
    "رزومه یوسف عبدل زاده",
    "رزومه برنامه‌نویس",
    "توسعه‌دهنده اندروید",
    "توسعه‌دهنده Flutter",
    "پورتفولیو",
  ],
  authors: [{ name: "یوسف عبدل زاده", url: siteUrl }],
  creator: "یوسف عبدل زاده",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "رزومه یوسف عبدل زاده",
    title: "یوسف عبدل زاده | رزومه و پورتفولیو",
    description: "رزومه یوسف عبدل زاده — توسعه‌دهنده اندروید، iOS و وب. پروژه‌ها و مهارت‌ها.",
  },
  twitter: {
    card: "summary_large_image",
    title: "یوسف عبدل زاده | رزومه",
    description: "رزومه یوسف عبدل زاده — توسعه‌دهنده اندروید، iOS و وب.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "یوسف عبدل زاده",
  url: siteUrl,
  jobTitle: "توسعه‌دهنده نرم‌افزار",
  description: "رزومه یوسف عبدل زاده — توسعه‌دهنده اندروید، iOS و وب با تجربه در Kotlin، Flutter، .NET و React.",
  knowsAbout: [
    "Android",
    "Kotlin",
    "Flutter",
    "iOS",
    ".NET",
    "React",
    "توسعه موبایل",
    "توسعه وب",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
