import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    { path: "../fonts/FuturaNowHeadline.ttf", weight: "400", style: "normal" },
    {
      path: "../fonts/FuturaNowHeadlineBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/FuturaNowHeadlineBlack.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-futura",
  display: "swap", // Performance uchun muhim
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "ARTROWELL - Bo'g'im og'riqlaridan tabiiy xalos bo'ling",
  description:
    "Bo'g'imlarni mustahkamlash, og'riqni qoldirish va harakatlanish erkinligini qaytarish uchun tabiiy kompleks Artrowell.",
  keywords: [
    "artrowell",
    "bo'g'im og'rig'i",
    "sustav",
    "kapsula",
    "bo'g'im davolash",
  ],
  alternates: { canonical: "https://artrowell.uz" },
  openGraph: {
    title: "ARTROWELL - Sog'lom bo'g'imlar kompleksi",
    description: "100% tabiiy tarkib. Bo'g'imlar faoliyatini tiklash.",
    url: "https://artrowell.uz",
    siteName: "Artrowell Uzbekistan",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <head>{/* Accessibility uchun rang kontrasti va font swap */}</head>
      <body
        className={`${futura.variable} font-sans antialiased bg-white text-[#1A1A1A] selection:bg-[#CC1D24] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
