import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  title: "یوسف عبدل زاده",
  description: "رزومه و پورتفولیو",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
