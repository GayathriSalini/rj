import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RJ CAREPLUS | Corporate Supply & Repair Hub",
  description: "Enterprise IT hardware supply, repair services, and annual maintenance for businesses across India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
