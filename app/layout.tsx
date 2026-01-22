import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ingredient Field Guide",
  description: "A Pokemon-themed ingredient field guide with neo-brutalism design",
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
