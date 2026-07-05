import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Torsbeanie | Corner Cafe, Catering & Bakes in Halstead",
  description:
    "Torsbeanie is a family-run corner cafe and mobile catering truck in Halstead, Essex, run by Ian and Vicki. Home of Cakes & Bakes by Tors — dine in, book the truck, or order a cake.",
  keywords: [
    "Torsbeanie",
    "Halstead cafe",
    "Essex food truck",
    "wedding catering Essex",
    "Cakes and Bakes by Tors",
  ],
  openGraph: {
    title: "Torsbeanie | Corner Cafe, Catering & Bakes in Halstead",
    description:
      "A family-run cafe, mobile catering truck, and bakery in Halstead, Essex — run by Ian and Vicki.",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${heading.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
