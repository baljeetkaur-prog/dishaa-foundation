
import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import SiteLayout from "./components/SiteLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title:
    "Dishaa Foundation | Counselling, Women's Wellbeing & Professional Support",

  description:
    "Dishaa Foundation offers individual counselling, women's wellbeing support, professional supervision, training and consultancy in Australia. Supporting individuals, women and communities through evidence-informed, person-centred services.",
};

const headingFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Toaster position="top-right" />
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
