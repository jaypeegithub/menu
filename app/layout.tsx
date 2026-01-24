import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JPEATSBC",
  description: "JPEATSBC Catch & Cook Field Guide - British Columbia ingredients",
  icons: {
    icon: "/favicon.png",
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
