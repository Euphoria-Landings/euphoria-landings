"use client";
import Image from "next/image";

export default function UsageScenarios() {
  const scenarios = [
    {
      title: "TOZALASH",
      subtitle: "ARTEMISIA KUCHI",
      imgSrc: "/toza.png", // Noqulaylikni ifodalovchi rasm
      color: "from-[#C5A358]/5 to-[#C5A358]/10",
    },
    {
      title: "TIKLASH",
      subtitle: "ICHAK MIKROFLORASI",
      imgSrc: "/tiklash.png", // Terini yumshatishni ifodalovchi rasm
      color: "from-gray-50 to-gray-100",
    },
    {
      title: "HIMOYA",
      subtitle: "KUCHLI IMMUNITET",
      imgSrc: "/ximoya.png", // Tabiiy parvarishni ifodalovchi rasm
      color: "from-[#C5A358]/10 to-[#C5A358]/20",
    },
  ];

  return (
    <section id="scenarios" className="w-full py-4 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-12">
          <h2 className="text-[34px] md:text-[46px] font-[1000] italic mb-4 tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">GEMO</span>
            <span className="text-[#C5A358]"> PLUS</span>
            <span className="text-[#1A1A1A] ml-4 not-italic font-black text-2xl md:text-3xl block md:inline tracking-normal">
              QACHON QO‘LLANILADI?
            </span>
          </h2>
          <p className="text-[#1A1A1A] text-sm md:text-base font-bold max-w-[600px] leading-tight uppercase tracking-widest opacity-60 border-l-4 border-[#C5A358] pl-4">
            Kompleks parvarish doirasida qulaylikni saqlash va <br />
            terini yumshatish uchun mo‘ljallangan
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[260px] bg-white rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#f4c96d] text-2xl font-[1000] leading-[0.9] tracking-tighter uppercase">
                  {card.title} <br />
                  <span className="text-lg text-[#efbd52] font-black">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (O'ng tomonda) */}
              <div
                className={`absolute right-0 top-0 w-[100%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="100%"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Tartib raqami */}
              <span className="absolute -bottom-6 -left-2 text-[120px] font-[1000] text-gray-50/80 z-0 select-none">
                {idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ pastki chiziq */}
        <div className="mt-20 flex justify-center">
          <div className="h-[3px] w-32 bg-gradient-to-r from-transparent via-[#C5A358] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
