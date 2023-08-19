import { type ReactNode } from "react";
import "~/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "~/lib/utils";
import NavBar from "~/components/chrome/NavBar";
import Footer from "~/components/chrome/Footer";

const spaceGroteskFont = Space_Grotesk({
  display: "swap",
  preload: true,
  variable: "--font-sans",
  subsets: ["latin-ext"],
});

const libreCalsonCondensedFont = localFont({
  src: [
    {
      path: "../assets/fonts/LibreCaslonCondensed-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/LibreCaslonCondensed-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
  ],
  variable: "--font-serif",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={cn(
        spaceGroteskFont.variable,
        libreCalsonCondensedFont.variable
      )}
      lang="en"
    >
      <body className="bg-yellow-50/30">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
