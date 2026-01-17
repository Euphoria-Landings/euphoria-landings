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
  // Brend nomini o'zgartirishni unutmang
  title: "СустаФлекс - Sog'lom bo'g'imlar",
  description: "СустаФлекс bilan harakat erkinligini his qiling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning - brauzer kengaytmalari HTMLga klass qo'shsa,
    // React hydration xatosini tashlamasligi uchun qo'shiladi.
    <html lang="uz" suppressHydrationWarning>
      <body
        className={`${futura.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
