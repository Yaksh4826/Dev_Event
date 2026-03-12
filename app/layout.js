import { Geist, Geist_Mono } from "next/font/google";
import { Schibsted_Grotesk } from "next/font/google";
import { Martian_Mono } from "next/font/google";
import DotGrid from "@/components/DotGrid";
import "./globals.css";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevEvent",
  description: "Hub with events you musn't miss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} antialiased`}
      >


<div className="inset-0 absolute z-[-1] min-h-screen">
  <DotGrid
    dotSize={5}
    gap={15}
    baseColor="#271E37"
    activeColor="#A5E1Eb"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>
<main>
          {children}
</main>

      </body>
    </html>
  );
}
