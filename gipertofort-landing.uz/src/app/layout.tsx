import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
  src: [
    { path: "../fonts/FuturaNowHeadline.ttf", weight: "400" },
    { path: "../fonts/FuturaNowHeadlineBold.ttf", weight: "700" },
    { path: "../fonts/FuturaNowHeadlineBlack.ttf", weight: "900" },
  ],
  variable: "--font-futura",
});

export const metadata: Metadata = {
  title: "ГИПЕРТОФОРТ - Arterial bosimni normallashtirish",
  description:
    "Qon tomirlarini himoya qilish va arterial bosimni tabiiy yo'l bilan normallashtirish uchun vosita.",
  alternates: { canonical: "https://gipertofort.uz" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${futura.variable} font-sans antialiased bg-white text-[#333]`}
      >
        {children}
      </body>
    </html>
  );
}
