"use client";
import Image from "next/image";

export default function Usage() {
  const usageInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#CC1D24]">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "KUNIGA 2 MAHAL",
      desc: "2 ta kapsuladan",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#CC1D24]">
          <path
            d="M12 2L12 22M2 12L22 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "SUV BILAN QABUL QILING",
      desc: "Kamida 200ml gazlanmagan toza suv bilan ichish tavsiya etiladi",
    },
  ];

  return (
    <section
      id="usage"
      className="w-full py-4 md:py-4 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* CHAP TOMON: QABUL QILISH TARTIBI */}
        <div className="w-full md:w-1/2 space-y-8 md:space-y-10">
          <div className="space-y-3">
            <h2 className="text-[22px] md:text-[30px] font-[1000] italic leading-[0.9] tracking-tighter uppercase text-[#1A1A1A]">
              Qabul qilish <br />
              <span className="text-[#CC1D24]">tartibi</span>
            </h2>
            <p className="text-gray-400 font-black text-[10px] md:text-[12px] uppercase tracking-[4px]">
              Artrowell — Sog'lom harakat sari
            </p>
          </div>

          <div className="space-y-6">
            {usageInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-5 group transition-all duration-300 hover:translate-x-2"
              >
                <div className="p-4 rounded-[20px] bg-red-50 group-hover:bg-[#CC1D24] group-hover:text-white transition-all duration-300 shadow-sm">
                  <div className="w-6 h-6 transition-colors duration-300 group-hover:text-white">
                    {info.icon}
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A1A1A] font-black text-[12px] md:text-[13px] tracking-wider uppercase italic">
                    {info.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] md:text-[12px] font-bold leading-relaxed max-w-[280px] uppercase mt-2">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Davomiylik kartasi */}
          <div className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)] max-w-[340px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#CC1D24]/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700" />

            <p className="text-[#CC1D24] text-[10px] font-black uppercase tracking-[3px] mb-3 leading-tight">
              TAVSIYA ETILGAN <br /> TO'LIQ KURS
            </p>
            <h3 className="text-[#1A1A1A] text-4xl md:text-5xl font-[1000] italic uppercase leading-none">
              20-30 kun
            </h3>
            <p className="text-gray-400 text-[10px] font-black uppercase mt-4 italic opacity-80">
              * 1 qadoqda 40 ta kapsula mavjud
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUALIZATSIYA */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px]">
          <div
            className="relative w-full h-full rounded-[48px] overflow-hidden border border-gray-50 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] bg-gray-50"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            }}
          >
            <Image
              src="/qabul.png" // Bu yerda dori ichayotgan inson yoki flakon rasmi bo'ladi
              alt="Artrowell qo'llash usuli"
              fill
              className="object-cover hover:scale-110 transition-transform duration-1000 ease-out"
              priority
            />
          </div>

          {/* Qo'shimcha dekorativ element - Red Aura */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#CC1D24]/10 rounded-full -z-10 blur-[80px]" />
        </div>
      </div>
    </section>
  );
}
