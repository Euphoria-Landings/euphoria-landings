"use client";
import Image from "next/image";

export default function Usage() {
  const usageInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#4B2C82]">
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
      title: "KUNIGA 2 MAHAL",
      desc: "Ertalab ovqatdan so'ng 1 kapsula",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#4B2C82]">
          <path
            d="M20 7L9 18L4 13"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "SUV BILAN QABUL",
      desc: "Kamida bir stakan suv bilan iching",
    },
  ];

  return (
    <section
      id="usage"
      className="w-full py-6 md:py-10 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-6 md:gap-10">
        {/* CHAP TOMON: QOIDALAR */}
        <div className="w-full md:w-1/2 space-y-5 md:space-y-6">
          <div className="space-y-2">
            <h2 className="text-[22px] md:text-[32px] font-[1000] italic leading-none tracking-tighter uppercase text-[#1A1A1A]">
              QABUL QILISH <br />
              <span className="text-[#4B2C82]">TARTIBI</span>
            </h2>

            {/* Kichik Subtitle */}
            <div className="flex items-center gap-1.5 opacity-70 scale-90 origin-left">
              <span className="text-[#1A1A1A] text-[8px] font-black italic uppercase tracking-[2px]">
                VISU
              </span>
              <span className="text-[#4B2C82] text-[8px] font-black italic uppercase tracking-[2px]">
                CAPS
              </span>
              <span className="text-gray-400 text-[8px] font-bold uppercase tracking-[2px] ml-1">
                Kurs bo'yicha
              </span>
            </div>
          </div>

          <div className="space-y-3">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="shrink-0 p-2.5 rounded-lg bg-purple-50 group-hover:bg-[#4B2C82] group-hover:text-white transition-all duration-300">
                  {info.icon}
                </div>
                <div className="pt-0.5">
                  <h4 className="text-[#1A1A1A] font-black text-[9px] md:text-[10px] tracking-widest uppercase italic">
                    {info.title}
                  </h4>
                  <p className="text-gray-400 text-[8px] md:text-[9px] font-bold leading-tight max-w-[220px] uppercase mt-0.5">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Ixcham Kurs kartasi */}
          <div className="bg-[#1A1A1A] rounded-[20px] p-5 border-l-[3px] border-[#4B2C82] shadow-lg max-w-[240px]">
            <p className="text-white/50 text-[7px] font-black uppercase tracking-[1px] mb-1.5">
              DAVOMIYLIK KURSI
            </p>
            <h3 className="text-[#7B52AB] text-2xl font-[1000] italic uppercase leading-none">
              28 KUN
            </h3>
            <p className="text-white/20 text-[6px] font-bold uppercase mt-1.5 italic">
              *Natija individual xususiyatga bog'liq
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-[32px] overflow-hidden shadow-xl border-2 border-gray-50 bg-gray-50">
            <Image
              src="/qabul.png"
              alt="VisuCaps Usage"
              fill
              className="object-cover"
              priority
            />
          </div>

        
        </div>
      </div>
    </section>
  );
}
