import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

// 1. FONT OPTIMIZATION (Futura saqlanib qoladi, u Fatality brendiga ham juda mos)
const futura = localFont({
  src: [
    { path: "../fonts/FuturaNowHeadlineThin.ttf", weight: "100" },
    { path: "../fonts/FuturaNowHeadlineLight.ttf", weight: "300" },
    { path: "../fonts/FuturaNowHeadline.ttf", weight: "400" },
    { path: "../fonts/FuturaNowHeadlineMedium.ttf", weight: "500" },
    { path: "../fonts/FuturaNowHeadlineBold.ttf", weight: "700" },
    { path: "../fonts/FuturaNowHeadlineExtraBold.ttf", weight: "800" },
    { path: "../fonts/FuturaNowHeadlineBlack.ttf", weight: "900" },
  ],
  variable: "--font-futura",
  display: "swap",
});

// 2. SEO & METADATA (Fatality uchun yangilandi)
export const metadata: Metadata = {
  metadataBase: new URL("https://fatality.uz"),
  title: {
    default: "Fatality - Mukammal qomat va sog'lom ozish majmuasi",
    template: "%s | Fatality",
  },
  description:
    "Fatality bilan ortiqcha vazndan voz keching. Tabiiy tarkibli kapsulalar metabolizmni tezlashtiradi va ishtahani nazorat qiladi.",
  keywords: [
    "Fatality",
    "ozish uchun dori",
    "dietasiz ozish",
    "vazn tashlash",
    "metabolizmni tezlashtirish",
    "tabiiy ozish",
    "Fatality kapsula",
  ],
  authors: [{ name: "Fatality Health Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fatality - Sog'lom ozishning innovatsion yechimi",
    description:
      "Tabiiy o'simlik moddalaridan iborat kompleks qomatni shakllantirishga yordam beradi.",
    url: "https://fatality.uz",
    siteName: "Fatality",
    images: [
      {
        url: "/og-fatality.jpg",
        width: 1200,
        height: 630,
        alt: "Fatality Slimming Complex",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#E91E63", // Fatality urg'u rangi (Magenta/Pink)
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/* ANALYTICS: GOOGLE TAG (ID o'zgartirilishi mumkin) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`${futura.variable} font-sans antialiased selection:bg-[#E91E63] selection:text-white bg-white text-[#000000]`}
        suppressHydrationWarning
      >
        <main>{children}</main>

      
      </body>
    </html>
  );
}
