import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { Be_Vietnam_Pro, Space_Grotesk } from "next/font/google";

export const metadata = {
 title: "Home | Liam Doyle @limegorilla",
 description:
  "Building beautiful experiences on the web for desktop and mobile. With experience in React, Next.JS and the JamStack ecosystem, Infrastructure with Linux and Windows server enviroments, design in Sketch, Figma and much more.",
};

const spaceGrotesk = Space_Grotesk({
 subsets: ["latin"],
 variable: "--font-default",
});

const beVietnamPro = Be_Vietnam_Pro({
 subsets: ["latin"],
 variable: "--font-default",
 weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en" className={spaceGrotesk.variable}>
   <body className="grid h-screen place-items-center">{children}</body>
   <Analytics />
  </html>
 );
}
