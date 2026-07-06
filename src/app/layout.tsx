import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../../public/styles/bg.css"
import "../../public/styles/main.css"
import "../../public/styles/button.scss"
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kopi-Tolaki",
  description: "Distributor Resmi Kopi Khas Tolaki",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full h-full flex flex-col bg">
        {children}
      </body>
    </html>
  );
}
