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
      desc: "Ovqat paytida yoki ovqatdan keyin 2 ta kapsuladan",
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
      title: "SUV BILAN ICHING",
      desc: "Kamida 200ml toza suv bilan qabul qilish tavsiya etiladi",
    },
  ];

  return (
    <section
      id="usage"
      className="w-full py-5 md:py-20 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* CHAP TOMON: MATNLAR */}
        <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
          <div className="space-y-2">
            <h2 className="text-[28px] md:text-[42px] font-[1000] italic leading-none tracking-tighter uppercase text-[#1A1A1A]">
              Qabul qilish <br />
              <span className="text-[#CC1D24]">juda oson</span>
            </h2>
            <p className="text-gray-400 font-bold text-[10px] uppercase tracking-[3px]">
              Gipertofort qon bosimi nazorati uchun
            </p>
          </div>

          <div className="space-y-5">
            {usageInfo.map((info, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 group transition-transform duration-300 hover:translate-x-1"
              >
                <div className="p-3 rounded-2xl bg-red-50 group-hover:bg-red-100 transition-colors">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A1A1A] font-black text-[11px] tracking-wider uppercase">
                    {info.title}
                  </h4>
                  <p className="text-gray-500 text-[10.5px] font-bold leading-tight max-w-[260px] uppercase mt-1">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_10px_40px_rgba(204,29,36,0.05)] max-w-[320px]">
            <p className="text-[#CC1D24] text-[9px] font-black uppercase tracking-[2px] mb-2 leading-tight">
              TAVSIYA ETILGAN <br /> DAVOMIYLIK KURSI
            </p>
            <h3 className="text-[#1A1A1A] text-3xl font-[1000] italic uppercase leading-none">
              30 kun
            </h3>
            <p className="text-gray-400 text-[9px] font-bold uppercase mt-2">
              *Individual holatga qarab o'zgarishi mumkin
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[450px]">
          <div
            className="relative w-full h-full rounded-[40px] overflow-hidden border border-gray-50 shadow-2xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 40%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
            }}
          >
            <Image
              src="/right.png"
              alt="Gipertofort Usage"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Qo'shimcha dekorativ element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-50 rounded-full -z-10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
