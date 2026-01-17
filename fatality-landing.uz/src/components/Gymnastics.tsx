"use client";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Gymnastics() {
  const resultCards = [
    {
      title: "ERITISH",
      subtitle: "YOG' QATLAMLARI",
      imgSrc: "/eritish.png", // Ozish jarayonini ifodalovchi rasm
      color: "from-pink-50 to-pink-100",
    },
    {
      title: "NAZORAT",
      subtitle: "ISHTAHA ME'YORI",
      imgSrc: "/nazorat.png", // Sog'lom ovqatlanish yoki nazorat rasmi
      color: "from-slate-100 to-slate-200",
    },
    {
      title: "tashqi ko‘rinishi",
      subtitle: "va salomatligi haqida qayg‘uradiganlar",
      imgSrc: "/tonus.png", // Fitnes natijasi rasmi
      color: "from-pink-100 to-pink-200",
    },
  ];

  return (
    <section id="results" className="w-full py-6 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - YANGILANGAN FATALITY LOGO BILAN */}
        <div className="mb-12">
          <h2 className="flex flex-wrap items-center text-[32px] md:text-[42px] font-[1000] italic mb-4 tracking-tighter leading-none">
            {/* FATALITY LOGO QISMI */}
            <div className="flex items-center select-none mr-3 md:mr-5 uppercase">
              <span className="text-[#000000] italic leading-none">FATA</span>
         
              <span className="text-[#E91E63] italic leading-none">LITY</span>
            </div>

            {/* QO'SHIMCHA MATN */}
            <span className="text-[#000000] not-italic font-[1000] text-2xl md:text-3xl uppercase">
              BILAN MUKAMMAL NATIJA
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base font-bold max-w-[650px] leading-tight uppercase tracking-[1px] opacity-80">
            Fatality kompleksi metabolizmni eng yuqori nuqtaga olib chiqadi va
            tanangizdagi ortiqcha energiyani (yog'larni) samarali sarflashga
            majbur qiladi.
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resultCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[280px] bg-white rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:shadow-pink-900/10 transition-all duration-500 hover:-translate-y-2 border border-pink-50 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#000000] text-3xl font-[1000] leading-[0.85] tracking-tighter uppercase italic">
                  {card.title} <br />
                  <span className="text-[10px] md:text-xs text-[#E91E63] font-black tracking-[4px] not-italic">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (O'ng tomonda) */}
              <div
                className={`absolute right-0 top-0 w-[70%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover object-center mix-blend-multiply opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:from-transparent" />
                </div>
              </div>

              {/* Bezak (Orqa fondagi raqam) */}
              <span className="absolute -bottom-6 -left-2 text-[120px] font-[1000] text-pink-50 z-0 select-none opacity-40 italic">
                {idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ chiziq */}
        <div className="mt-20 flex justify-center">
          <div className="h-[4px] w-24 bg-gradient-to-r from-transparent via-[#E91E63] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
