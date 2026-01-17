import type { Metadata } from "next";
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
  display: "swap", // Shrift yuklanguncha tizim shriftini ko'rsatib turish uchun
});

// DIASTOP loyihasi uchun METADATA
export const metadata: Metadata = {
  title: "DIASTOP - Qondagi qand miqdorini tabiiy normallashtirish",
  description:
    "Diastop — qon tarkibidagi qand miqdorini xavfsiz nazorat qilish, diabet simptomlarini yengillashtirish va organizmni tabiiy moddalar bilan quvvatlantirish uchun samarali kompleks.",
  keywords: [
    "diastop",
    "qand miqdori",
    "diabet",
    "salomatlik",
    "tabiiy kompleks",
    "glyukoza",
  ],
  authors: [{ name: "Diastop Uzbekistan" }],
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://diastop.uz",
  },
  openGraph: {
    title: "DIASTOP - Sog'lom hayot sari qadam",
    description: "Qondagi qand miqdorini tabiiy yo'l bilan nazorat qiling.",
    url: "https://diastop.uz",
    siteName: "Diastop",
    locale: "uz_UZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${futura.variable} font-sans antialiased bg-white text-[#1A1A1A] selection:bg-[#CC1D24] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
