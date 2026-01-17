"use client";
import Image from "next/image";
import { Leaf } from "lucide-react";

export default function Results() {
  const resultCards = [
    {
      title: "ParazitOFF",
      subtitle: "ishlash prinsipi",
      imgSrc: "/parazit.png", // Parazitlardan tozalanishni ifodalovchi rasm
      color: "from-green-50 to-green-100",
    },
    {
      title: "TIKLASH",
      subtitle: "ICHAK MIKROFLORASI",
      imgSrc: "/tiklash.png", // Sog'lom ichak yoki mikroflora rasmi
      color: "from-slate-50 to-slate-100",
    },
    {
      title: "HIMOYA",
      subtitle: "KUCHLI IMMUNITET",
      imgSrc: "/ximoya.png", // Himoya qalqoni yoki sog'lom inson
      color: "from-green-100 to-green-200",
    },
  ];

  return (
    <section id="results" className="w-full py-3 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - PARAZITOFF USLUBIDA */}
        <div className="mb-12">
          <h2 className="flex flex-wrap items-center text-[32px] md:text-[42px] font-black italic mb-4 tracking-tighter leading-none">
            {/* LOGO QISMI */}
            <div className="flex items-center select-none mr-2 md:mr-4 uppercase not-italic">
              <span className="text-[#004D40]">Parazit</span>
              <span className="text-[#8BC34A] italic ml-1">OFF</span>
              <div className="flex items-center justify-center ml-2">
           
              </div>
            </div>

            {/* QO'SHIMCHA MATN */}
            <span className="text-[#004D40] not-italic font-extrabold text-2xl md:text-3xl uppercase">
              BILAN ICHKI TOZALIKKA ERISHING
            </span>
          </h2>

          <p className="text-slate-500 text-sm md:text-base font-bold max-w-[600px] leading-tight uppercase tracking-tight opacity-80">
            ParazitOff efir moylari majmuasi organizmni nafaqat parazitlardan,
            balki ularning hayot faoliyati natijasida to'plangan toksinlardan
            ham samarali tozalaydi.
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resultCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[260px] bg-white rounded-[32px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-50 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#004D40] text-2xl font-black leading-[0.9] tracking-tighter uppercase">
                  {card.title} <br />
                  <span className="text-sm md:text-base text-[#8BC34A] font-black tracking-widest">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (O'ng tomonda) */}
              <div
                className={`absolute right-0 top-0 w-[65%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover object-center opacity-90 group-hover:opacity-100"
                  />
                  {/* Overlay gradient - Matn o'qilishi uchun */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent md:from-transparent" />
                </div>
              </div>

              {/* Bezak (Orqa fondagi raqam) */}
              <span className="absolute -bottom-4 -left-2 text-[100px] font-black text-green-50 z-0 select-none opacity-50">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ chiziq */}
        <div className="mt-16 flex justify-center">
          <div className="h-[3px] w-24 bg-gradient-to-r from-transparent via-[#8BC34A] to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}
