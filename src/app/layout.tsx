import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TopMenu } from "../components/ui/TopMenu";
import { Footer } from "@/components/ui/Footer";

const geistSans = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: {
    template: "%s - Debon Solutions",
    default: "Debon Solutions",
  },
  description: "Debon Solutions is a software development company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        <TopMenu/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
