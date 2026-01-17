"use client";
import Image from "next/image";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "TIZZA",
      subtitle: "HARKATCHANLIK",
      imgSrc: "/tizza.png",
      color: "from-red-50 to-red-100",
    },
    {
      title: "UMURTQA",
      subtitle: "MOSLASHUVCHANLIK",
      imgSrc: "/umurtqa.png",
      color: "from-gray-50 to-gray-100",
    },
    {
      title: "YELKA",
      subtitle: "KUCH VA QUVVAT",
      imgSrc: "/yelka.png",
      color: "from-red-100 to-red-200",
    },
  ];

  return (
    <section
      id="gym"
      className="w-full py-4 md:py-4 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - SEO va Accessibility optimallashgan */}
        <div className="mb-14 space-y-4 text-center md:text-left">
          <h2 className="text-[32px] md:text-[48px] font-[1000] italic tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">ARTRO</span>
            <span className="text-[#CC1D24]">WELL</span>
            <span className="text-[#1A1A1A] ml-0 md:ml-4 not-italic font-black text-2xl md:text-3xl block md:inline mt-2 md:mt-0">
              BILAN FAOL HAYOT
            </span>
          </h2>
          <p className="text-gray-400 text-[11px] md:text-[13px] font-bold max-w-[600px] leading-relaxed uppercase tracking-[3px]">
            Bo'g'imlardagi og'riqni kamaytirish va elastiklikni{" "}
            <br className="hidden md:block" />
            oshirish uchun maxsus ishlab chiqilgan gimnastika
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[220px] bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 border border-gray-50 overflow-hidden"
            >
              {/* Matnlar (Kontrast va Readability uchun Z-index baland) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A1A1A] text-2xl font-[1000] leading-[0.85] tracking-tighter uppercase italic">
                  {card.title} <br />
                  <span className="text-[10px] text-[#CC1D24] font-black tracking-[3px] not-italic">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (Placeholderlar bo'g'im mashqlari uchun) */}
              <div
                className={`absolute right-0 top-0 w-[65%] h-full bg-gradient-to-l ${card.color} z-10 transition-all duration-500 group-hover:w-full`}
              >
                <div className="relative w-full h-full transition-transform duration-1000 group-hover:scale-110">
                  <Image
                    src={card.imgSrc} // Masalan:
                    alt={`${card.title} uchun mashqlar`}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center mix-blend-multiply opacity-90 grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>

              {/* Raqamli bezak (Aesthetic micro-ui) */}
              <span className="absolute -bottom-6 -left-3 text-[100px] font-[1000] text-gray-50/50 z-0 select-none italic">
                {idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Vizual ajratgich */}
        <div className="mt-16 flex justify-center">
          <div className="h-1.5 w-24 bg-gradient-to-r from-transparent via-[#CC1D24]/20 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
