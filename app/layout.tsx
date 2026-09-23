import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maths Club — Where Logic Meets Infinity",
  description:
    "Official website of the college Mathematics Club. Explore events, workshops, competitions and join a community of math enthusiasts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
