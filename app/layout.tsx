import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JPEATSBC",
  description: "JPEATSBC Catch & Cook Field Guide - Pacific Northwest ingredients",
  icons: {
    icon: "/ingredients/banana-slug.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
