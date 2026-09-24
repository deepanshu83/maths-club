import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROVE IT — Maths Club | 13–14 October",
  description:
    "Official website of the college Mathematics Club. Join us for PROVE IT on 13–14 October at BPTRC — two days, two ways to grow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
