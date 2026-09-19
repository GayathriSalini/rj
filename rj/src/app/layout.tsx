import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RJ CAREPLUS | Corporate Supply & Repair Hub",
  description: "Enterprise IT hardware supply, repair services, and annual maintenance for businesses across India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
