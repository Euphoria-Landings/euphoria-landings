import type { Metadata, Viewport } from "next"; // Viewport alohida import qilindi (Next.js 14+ standarti)
import localFont from "next/font/local";
import "./globals.css";

// Futura shriftlarini sozlash
const futura = localFont({
  src: [
    {
      path: "../fonts/FuturaNowHeadline.ttf",
      weight: "400",
      style: "normal",
    },
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
  display: "swap",
});

// SEO va Performance uchun Viewport sozlamasi
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4B2C82", // Brauzer tepa qismi rangi
};

// VISUCAPS loyihasi uchun METADATA (SEO Best Practice)
export const metadata: Metadata = {
  title: "VisuCaps - Ko'rish qobiliyatini tabiiy tiklash va himoya qilish",
  description:
    "VisuCaps — ko'z nuri xiralashishi, charchoq va ko'z bosimini kamaytirishga yordam beruvchi tabiiy kompleks. Ko'z salomatligini 100% tabiiy komponentlar bilan asrang.",
  keywords: [
    "visucaps",
    "ko'z salomatligi",
    "ko'rishni tiklash",
    "glaukoma profilaktika",
    "ko'z charchog'i",
    "tabiiy dori",
    "ko'z nuri",
  ],
  authors: [{ name: "VisuCaps Uzbekistan" }],
  alternates: {
    canonical: "https://visucaps.uz",
  },
  openGraph: {
    title: "VisuCaps - Dunyoni tiniqroq ko'ring",
    description:
      "Ko'z nurini tabiiy yo'l bilan tiklash va himoya qilish uchun samarali kapsulalar.",
    url: "https://visucaps.uz",
    siteName: "VisuCaps",
    images: [
      {
        url: "/og-image.jpg", // Ulashganda chiqadigan rasm
        width: 1200,
        height: 630,
        alt: "VisuCaps Ko'z salomatligi kapsulalari",
      },
    ],
    locale: "uz_UZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${futura.variable} font-sans antialiased bg-white text-[#1A1A1A] 
        selection:bg-[#4B2C82] selection:text-white`}
      >
        {/* Selection rangini brend rangiga (binafsha) o'zgartirdik */}
        {children}
      </body>
    </html>
  );
}
