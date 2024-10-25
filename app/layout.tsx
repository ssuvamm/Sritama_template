import type { Metadata } from "next";
import "@fontsource/montserrat"; // Corrected import for Montserrat variable font
import "./globals.css";
import AnimatedBody from "./components/AnimatedBody";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Sritama's Artistry",
  description: "A collection of my art",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AnimatedBody>
          <Navbar />
          {children}
          <Footer />
        </AnimatedBody>
      </body>
    </html>
  );
}
