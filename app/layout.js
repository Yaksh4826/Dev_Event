import { Geist, Geist_Mono } from "next/font/google";
import { Schibsted_Grotesk } from "next/font/google";
import { Martian_Mono } from "next/font/google";
import LightRays from "@/components/LightRays";
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



<div className="absolute z-[-1] inset-0 min-h-screen">
  <LightRays
    raysOrigin="top-center"
    raysColor="#ffffff"
    raysSpeed={1}
    lightSpread={0.5}
    rayLength={3}
    followMouse={true}
    mouseInfluence={0.1}
    noiseAmount={0}
    distortion={0}
    className="custom-rays"
    pulsating={false}
    fadeDistance={1}
    saturation={1}
/>
</div>
<main>
          {children}
</main>

      </body>
    </html>
  );
}
