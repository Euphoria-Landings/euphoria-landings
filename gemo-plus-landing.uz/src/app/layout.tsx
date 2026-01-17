import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Futura fontini saqlab qoldik, lekin variable orqali optimallashtirdik
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
  display: "swap", // SEO va Performance uchun muhim
});

export const metadata: Metadata = {
  title: "Gemo Plus - Gemorroyga qarshi tabiiy efir moyi",
  description:
    "Bavosil va anal kanali sohasidagi noqulayliklarni kamaytirish uchun tabiiy shuvoq efir moyi asosidagi vosita. 100% tabiiy tarkib.",
  keywords: [
    "Gemo Plus",
    "gemorroy",
    "bavosil",
    "tabiiy davolash",
    "shuvoq moyi",
    "parvarish",
  ],
  openGraph: {
    title: "Gemo Plus - Tabiiy Qulaylik",
    description:
      "Bavosilda gigiyenik parvarish va qulaylikni saqlash uchun tabiiy vosita.",
    type: "website",
    locale: "uz_UZ",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Mobil versiyada keraksiz zoomni oldini oladi
  themeColor: "#C5A358", // Brend tillarang rangi
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${futura.variable} font-sans antialiased bg-white text-[#1A1A1A]`}
        suppressHydrationWarning
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
