import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Eastern Hydraulics | Hydraulic Specialists Since 1989",
    template: "%s | Eastern Hydraulics",
  },
  description:
    "Eastern Hydraulics (Pty) Ltd specializes in the supply, repair, manufacture and design of high pressure hydraulic pumps, motors, cylinders, power packs and water pumps. B-BBEE listed, ISO 9001 accredited.",
  keywords: [
    "hydraulic pumps",
    "hydraulic motors",
    "hydraulic cylinders",
    "pneumatic cylinders",
    "hydraulic power packs",
    "water pumps",
    "hydraulic repair",
    "South Africa",
    "Johannesburg",
    "mining hydraulics",
  ],
  openGraph: {
    title: "Eastern Hydraulics | Hydraulic Specialists Since 1989",
    description:
      "Supply, repair, manufacture and design of high pressure hydraulic equipment. B-BBEE listed, ISO 9001 accredited. Serving mining, construction and industrial sectors.",
    url: "https://www.easterns.co.za",
    siteName: "Eastern Hydraulics",
    type: "website",
    locale: "en_ZA",
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
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
