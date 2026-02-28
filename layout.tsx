import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "SPPU Academic Tools Hub",
  description: "Academic utilities for SPPU students",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      <body className="bg-gray-100 text-black">
        {children}
      </body>
    </html>
  );
}
