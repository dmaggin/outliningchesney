import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Outlining Chesney — Deconstructing Paradise, One Chorus at a Time",
    template: "%s | Outlining Chesney",
  },
  description:
    "Kenny Chesney songs are so formulaic you can reduce them to bullet-point outlines and they still make perfect sense. We have the outlines to prove it.",
  keywords: ["Kenny Chesney", "song outlines", "music", "humor", "country music"],
  openGraph: {
    title: "Outlining Chesney",
    description:
      "Every song is the same song. We have the outlines to prove it.",
    siteName: "Outlining Chesney",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-full flex flex-col bg-sky text-charcoal">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
