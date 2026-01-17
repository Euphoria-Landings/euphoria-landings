"use client";
import Image from "next/image";

export default function Usage() {
  const usageInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#CC1D24]">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "KUNIGA 1 MAHAL",
      desc: "Ertalab nonushtadan oldin 1 kapsula",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#CC1D24]">
          <path
            d="M12 2L12 22M2 12L22 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="12"
            r="6"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      ),
      title: "SUV BILAN ISTE'MOL",
      desc: "Ko'p miqdorda suv bilan qabul qiling",
    },
  ];

  return (
    <section
      id="usage"
      className="w-full py-4 md:py-5 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* CHAP TOMON: QABUL QILISH */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h2 className="text-[24px] md:text-[36px] font-[1000] italic leading-none tracking-tighter uppercase text-[#1A1A1A]">
              QABUL QILISH <br />
              <span className="text-[#CC1D24]">QOIDALARI</span>
            </h2>

            {/* Kichikroq Logo Subtitle */}
            <div className="flex items-center gap-1.5 opacity-80 scale-90 origin-left">
              <span className="text-[#1A1A1A] text-[9px] font-black italic uppercase tracking-[2px]">
                DIA
              </span>
              <span className="text-[#CC1D24] text-[9px] font-black italic uppercase tracking-[2px]">
                ST
              </span>
              <span className="relative inline-block text-[#CC1D24] text-[9px] font-black italic uppercase tracking-[2px]">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1.5px] bg-[#1A1A1A] rotate-[-45deg] rounded-full"></span>
              </span>
              <span className="text-[#CC1D24] text-[9px] font-black italic uppercase tracking-[2px]">
                P
              </span>
              <span className="text-gray-400 text-[8px] font-bold uppercase tracking-[2px] ml-1">
                Kurs tartibi
              </span>
            </div>
          </div>

          <div className="space-y-4">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="shrink-0 p-3 rounded-xl bg-red-50/50 group-hover:bg-[#CC1D24] group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[#1A1A1A] font-black text-[10px] md:text-[11px] tracking-widest uppercase italic">
                    {info.title}
                  </h4>
                  <p className="text-gray-500 text-[9px] md:text-[10px] font-bold leading-tight max-w-[240px] uppercase mt-1">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ixchamroq Kurs kartasi */}
          <div className="bg-[#1A1A1A] rounded-[24px] p-6 border-l-[4px] border-[#CC1D24] shadow-xl max-w-[280px]">
            <p className="text-white/60 text-[8px] font-black uppercase tracking-[2px] mb-2 leading-tight">
              TAVSIYA ETILGAN KURSNING <br /> DAVOMIYLIGI
            </p>
            <h3 className="text-[#CC1D24] text-3xl font-[1000] italic uppercase leading-none">
              30 KUN
            </h3>
            <p className="text-white/30 text-[7px] font-bold uppercase mt-2 italic">
              *To'liq kurs maksimal natija beradi
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[5/4] md:aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl border-4 border-white bg-gray-50">
            <Image
              src="/qabul.png"
              alt="Diastop Usage"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Kichikroq Badge */}
          <div className="absolute -bottom-4 -right-4 bg-[#CC1D24] text-white px-5 py-4 rounded-[20px] shadow-xl rotate-2">
            <p className="text-[7px] font-black uppercase tracking-tighter opacity-80 leading-none">
              Har doim
            </p>
            <p className="text-[14px] font-[1000] italic uppercase leading-tight">
              YONINGIZDA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
