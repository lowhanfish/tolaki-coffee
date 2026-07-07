import type { Metadata } from "next";
import "./globals.css";
import "../../public/styles/bg.css"
import "../../public/styles/main.css"
import "../../public/styles/button.scss"
import "../../public/styles/sun-editor.scss"

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full h-full flex flex-col bg">
        {children}
      </body>
    </html>
  );
}
