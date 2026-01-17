"use client";
import Image from "next/image";

export default function Usage() {
  const usageInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-red-600">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "1 TA KAPSULA",
      desc: "kuniga",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-red-600">
          <path
            d="M17.5 7.5L6.5 18.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M18 11.5C18 15.0899 15.0899 18 11.5 18C7.91015 18 5 15.0899 5 11.5C5 7.91015 7.91015 5 11.5 5C15.0899 5 18 7.91015 18 11.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
      title: "YUTISH OSON",
      desc: "kapsulaning silliq yuzasi va soddalashtirilgan shakli tufayli",
    },
  ];

  return (
    <section id="usage" className="w-full py-10 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* CHAP TOMON: MATNLAR */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-black italic leading-tight tracking-tighter">
            <span className="text-[#1A1A1A]">СУСТА</span>
            <span className="text-red-600">ФЛЕКС</span>
            <br />
            <span className="text-[#1A1A1A] not-italic text-[28px] md:text-[38px]">
              olish uchun{" "}
            </span>
            <span className="text-red-600 italic text-[28px] md:text-[38px]">
              qulay
            </span>
          </h2>

          <div className="space-y-6">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="p-2 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A1A1A] font-black text-sm tracking-wider uppercase">
                    {info.title}
                  </h4>
                  <p className="text-[#1A1A1A] text-sm font-medium leading-tight max-w-[280px]">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-red-50 shadow-lg shadow-red-100/30 max-w-[320px]">
            <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-2">
              KONDROPROTEKTORLARNING <br /> TAVSIYA ETILGAN KURSI
            </p>
            <h3 className="text-[#FF9F43] text-4xl font-black italic">
              Yiliga 2-3 marta
            </h3>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL (Animatsiyasiz, gradient maskali) */}
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[500px]">
          <div
            className="relative w-full h-full rounded-[20px] overflow-hidden"
            style={{
              // Chapdan o'ngga qarab prazrachniy qilish
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 50%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 50%)",
            }}
          >
            <Image
              src="/icon.png"
              alt="SustaFlex Icon"
              fill
              className="object-cover rounded-[20px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
