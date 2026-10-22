import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PROVE IT — Maths Club | 26–27 October",
  description:
    "Official website of the college Mathematics Club. Join us for PROVE IT on 26–27 October at 1:00 PM at BPTRC — two days, two ways to grow.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`h-full antialiased ${caveat.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
