"use client";
import Image from "next/image";
import { Activity } from "lucide-react";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "KICHIK TOS",
      subtitle: "MASHQLARI",
      imgSrc: "/tos.png",
      color: "from-red-50 to-white",
    },
    {
      title: "PROSTATA",
      subtitle: "TONUSI",
      imgSrc: "/prostata.png",
      color: "from-slate-50 to-white",
    },
    {
      title: "QUVVATNI",
      subtitle: "TIKLASH",
      imgSrc: "/quvvat.png",
      color: "from-red-100/50 to-white",
    },
  ];

  return (
    <section
      id="gym"
      className="w-full py-4 bg-white overflow-hidden relative"
    >
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* SARLAVHA */}
        <div className="mb-14 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-[#E31E24]" size={24} />
            <span className="h-[1px] w-12 bg-slate-200" />
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[4px]">
              Health & Power
            </span>
          </div>

          <h2 className="text-[36px] md:text-[52px] font-[1000] italic mb-4 tracking-tighter leading-none uppercase">
            <span className="text-[#1A2B3C]">URO</span>
            <span className="text-[#E31E24]">PRO</span>
            <span className="text-[#1A2B3C] ml-4 not-italic font-extrabold text-2xl md:text-3xl block md:inline">
              BILAN FAOLLIK
            </span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-bold max-w-[550px] leading-tight uppercase tracking-tight">
            Qon aylanishini yaxshilash va <br />
            erkaklik quvvatini saqlash uchun maxsus kompleks
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[260px] bg-white rounded-[40px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[#E31E24]/10 transition-all duration-500 hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none">
                <h3 className="text-[#1A2B3C] text-2xl font-[1000] leading-[0.85] tracking-tighter uppercase italic">
                  {card.title} <br />
                  <span className="text-lg text-[#E31E24]">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi */}
              <div
                className={`absolute right-0 top-0 w-[65%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-1000 ease-out">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                    className="object-cover object-center mix-blend-multiply opacity-90"
                  />
                  {/* Oq qoplama (Overlay) - Rasm va matnni ajratish uchun */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
                </div>
              </div>

              {/* Bezak (Orqa fondagi raqam) */}
              <span className="absolute -bottom-6 -left-4 text-[120px] font-[1000] text-slate-100 z-0 select-none italic">
                {idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativ element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[500px] bg-red-500/5 blur-[120px] rounded-full -z-0 pointer-events-none" />
    </section>
  );
}
