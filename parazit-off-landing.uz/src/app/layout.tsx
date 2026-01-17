import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

// 1. FONT OPTIMIZATION (Tabiiy va scannable shriftlar)
const futura = localFont({
  src: [
    { path: "../fonts/FuturaNowHeadlineThin.ttf", weight: "100" },
    { path: "../fonts/FuturaNowHeadlineLight.ttf", weight: "300" },
    { path: "../fonts/FuturaNowHeadline.ttf", weight: "400" },
    { path: "../fonts/FuturaNowHeadlineMedium.ttf", weight: "500" },
    { path: "../fonts/FuturaNowHeadlineBold.ttf", weight: "700" },
    { path: "../fonts/FuturaNowHeadlineBlack.ttf", weight: "900" },
  ],
  variable: "--font-futura",
  display: "swap",
});

// 2. SEO & METADATA (ParazitOff brendi uchun)
export const metadata: Metadata = {
  metadataBase: new URL("https://parazitoff.uz"),
  title: {
    default: "ParazitOff - Gelmint va parazitlardan tozalash majmuasi",
    template: "%s | ParazitOff",
  },
  description:
    "ParazitOff tabiiy tomchilari bilan organizmni parazitlardan xavfsiz tozalang. Artemisia va efir moylari asosidagi samarali formula.",
  keywords: [
    "ParazitOff",
    "gelmintlarga qarshi",
    "parazitlarni tozalash",
    "antiparazitar dori",
    "tabiiy tozalash",
    "Artemisia",
    "parazitlardan qutilish",
  ],
  authors: [{ name: "ParazitOff Laboratory" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ParazitOff - Organizmni parazitlardan 1 kursda xalos qiling",
    description:
      "Gelmintlarga qarshi 100% tabiiy efir moylari majmuasi. GMOsiz va xavfsiz.",
    url: "https://parazitoff.uz",
    siteName: "ParazitOff",
    images: [
      {
        url: "/og-parazitoff.jpg",
        width: 1200,
        height: 630,
        alt: "ParazitOff Tabiiy Majmuasi",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#004D40", // ParazitOff to'q yashil brend rangi
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
        {/* ANALYTICS: GOOGLE TAG (ParazitOff ID sini qo'yish kerak) */}
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
        className={`${futura.variable} font-sans antialiased selection:bg-[#8BC34A] selection:text-white bg-white text-slate-900`}
        suppressHydrationWarning
      >
        <main>{children}</main>

        {/* GLOBAL DISCLAIMER (Yashil tonlarda) */}
        <div className="fixed bottom-0 left-0 w-full border-t border-green-100 py-3 bg-white/90 backdrop-blur-md z-[9999]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-green-800 font-bold text-[10px] md:text-xs tracking-[2px] uppercase">
              BIOLOGIK FAOL QO'SHIMCHA. DORI VOSITASI HISOBLANMAYDI.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}