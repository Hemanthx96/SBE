import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sree Balaji Enterprises - BDA Sites in Bangalore",
  description: "Buying & Selling B.D.A. Sites & B.D.A. Approved Sites in Bangalore. Contact us for your real estate needs.",
  keywords: "BDA sites, Bangalore real estate, BDA approved sites, property for sale, property for buy, J.P. Nagar",
  icons: {
    icon: "/balaji-logo.png",
    apple: "/balaji-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

