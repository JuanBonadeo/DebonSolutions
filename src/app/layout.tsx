import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TopMenu } from "../components/ui/TopMenu";
import { Footer } from "@/components/ui/Footer";
import { Head } from "next/document";

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
      <Head>
          <link rel="icon" href="/favicon.ico" /> {/* Asegúrate de que la ruta sea correcta */}
        </Head>
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
