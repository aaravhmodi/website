import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aarav Modi | Software, Data, AI/ML",
  description:
    "Aarav Modi is a Systems Design Engineering student at the University of Waterloo building software, data, AI/ML, fintech dashboards, products, and music.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
