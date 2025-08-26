import type { Metadata } from "next";
import {Merriweather } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import Navbar from "@/components/Home/Navbar/Nav";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";


 const font = Merriweather({
  weight: ['300', '400', '500', '600', '700', '800', '900',],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Product landing page",
  description: "Product landing page using tailwind and next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${font.className}  antialiased`}
      > 
      <Provider>
        <ResponsiveNav />
        {children}
        <Footer />
       {/*  
    <ScrollToTop /> */}
        </Provider>
      </body>
    </html>
  );
}
