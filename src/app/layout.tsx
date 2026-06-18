import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saranya Srija - Data Analyst",
  description:
    "Portfolio of Saranya Srija (@saranbud) - data analyst turning raw data into clear insights, from SQL and dashboards to predictive models.",
  openGraph: {
    title: "Saranya Srija - Data Analyst",
    description:
      "Data analyst turning raw data into clear insights, from SQL and dashboards to predictive models.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saranya Srija - Data Analyst",
    description:
      "Data analyst turning raw data into clear insights, from SQL and dashboards to predictive models.",
    creator: "@saranbud",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}