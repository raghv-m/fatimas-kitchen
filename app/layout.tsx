import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Fatima Karahi Corner - Best Karahi Restaurant in Calgary",
  description: "Elegant & Famous. Delivering excellent food and hospitality. Specializing in Karahi, BBQ, curries, and traditional Pakistani cuisine. Locations in Calgary and Edmonton.",
  keywords: "karahi, restaurant, Calgary, Edmonton, Pakistani food, BBQ, curry, halal food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ChatBot />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

