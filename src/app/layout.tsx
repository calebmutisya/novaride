import type { Metadata } from "next";
import { Epilogue, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NextTopLoader from "nextjs-toploader";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaRide Car Hire",
  description: "Your Trusted Car Hire Partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${epilogue.variable} ${dmSans.variable} antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#FF3600" />
        <Navbar />
        <div className="min-h-[60vh]">
          {children}
        </div>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
