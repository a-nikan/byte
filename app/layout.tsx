import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import localFont from "next/font/local";
import Footer from "./components/Footer";

const SF = localFont({ src: "fonts/SF.otf" });

export const metadata: Metadata = {
  title: "ByteBoutique",
  description: "Where innovation meets style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SF.className}`}>
        <main className="flex flex-col justify-between min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
