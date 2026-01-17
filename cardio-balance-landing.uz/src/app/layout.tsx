import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

// 1. FONT OPTIMIZATION
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
  display: "swap", // Performance uchun muhim
});

// 2. SEO & METADATA BEST PRACTICES
export const metadata: Metadata = {
  metadataBase: new URL("https://cardiobalance.uz"), // O'z domeningizni qo'ying
  title: {
    default: "Cardio Balance - Sog'lom yurak va tomirlar",
    template: "%s | Cardio Balance",
  },
  description:
    "Cardio Balance bilan yurak urishini me'yorga keltiring va qon bosimidan xalos bo'ling. 100% tabiiy va xavfsiz formula.",
  keywords: [
    "Cardio Balance",
    "yurak salomatligi",
    "qon bosimi",
    "gipertoniya",
    "natural health",
  ],
  authors: [{ name: "Cardio Balance Team" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cardio Balance - Sog'lom yurak va tomirlar",
    description: "Yurak-qon tomir tizimini tiklash uchun innovatsion yechim.",
    url: "https://cardiobalance.uz",
    siteName: "Cardio Balance",
    images: [
      {
        url: "/og-cardio.jpg", // public/og-cardio.jpg rasm bo'lishi kerak
        width: 1200,
        height: 630,
        alt: "Cardio Balance Health Solution",
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

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
        {/* 3. ANALYTICS: GOOGLE TAG (GA4) */}
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
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* 4. ANALYTICS: FACEBOOK PIXEL */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
      </head>
      <body
        className={`${futura.variable} font-sans antialiased selection:bg-red-600 selection:text-white`}
        suppressHydrationWarning
      >
        <main>{children}</main>

        {/* 5. GLOBAL BFQ DISCLAIMER (Fixed at bottom) */}
        <div className="fixed bottom-0 left-0 w-full border-t border-red-600/10 py-3 bg-white/90 backdrop-blur-md z-[9999]">
          <div className="container mx-auto px-4 text-center">
            <p className="text-red-600 font-black text-[10px] md:text-xs tracking-[2px] uppercase italic">
              BFQ. DORI VOSITASI HISOBLANMAYDI.
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}
