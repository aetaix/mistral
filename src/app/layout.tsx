import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layouts/Header";
import { Footer } from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Models for the next | Mistral",
  description: "Discover Mistral model library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
