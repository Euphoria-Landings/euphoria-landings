import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
});

export const metadata: Metadata = {
  title: "UroPro - Erkaklar salomatligi uchun innovatsion yechim",
  description:
    "UroPro bilan erkaklik quvvati va salomatligini qayta tiklang. Tabiiy va xavfsiz.",
  viewport:
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0", // Mobil qurilmalar uchun optimallash
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${futura.variable} font-sans antialiased bg-white text-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
