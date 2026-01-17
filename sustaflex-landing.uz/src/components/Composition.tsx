"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    // 1-Karta uchun yangi ma'lumotlar
    msm: [
      "Paylarni mustahkamlaydi",
      "Bo'g'imlar atrofidagi yallig'lanishni kamaytiradi",
    ],
    // 2-Karta uchun yangi ma'lumotlar
    extracts: [
      "Bosveliya ekstrakti — yallig'lanishga qarshi xususiyatlarga ega",
      "Vitamin C va maral ildizi — umumiy immunitetni rag'batlantiradi",
      "To'qimalarda tiklanish jarayonlarini faollashtiradi",
    ],
  };

  const minerals = [
    { name: "MSM", desc: "Metilsulfonilmetan" },
    { name: "Bosveliya", desc: "Tabiiy ekstrakt" },
    { name: "Vitamin C", desc: "Immunitet va tiklanish" },
    { name: "Maral ildizi", desc: "Energizer va regeneratsiya" },
  ];

  return (
    <section className="w-full py-1 bg-gray-50/50 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A1A1A] text-3xl md:text-5xl font-black italic leading-tight uppercase tracking-tighter">
            Boyitilgan <span className="text-red-600">Formula</span>
          </h2>
          <p className="text-gray-500 font-bold mt-4 uppercase text-xs tracking-[3px]">
            Sog'lom bo'g'imlar uchun kompleks yondashuv
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* 1-Karta: MSM (Metilsulfonilmetan) */}
          <div className="w-full lg:w-[400px] bg-white rounded-[40px] p-8 md:p-10 shadow-xl border border-gray-100 relative z-10 transition-all hover:-translate-y-2">
            <div className="mb-8">
              <h3 className="text-[#FF9F43] text-2xl font-black uppercase italic">
                MSM
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Metilsulfonilmetan
              </p>
              <div className="h-1 w-12 bg-[#FF9F43] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.msm.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <p className="text-[#1A1A1A] text-[14px] font-extrabold leading-snug uppercase">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Rasm va Asosiy Tarkib */}
          <div className="flex flex-col items-center gap-8 z-20">
            <div className="w-48 h-48 md:w-64 md:h-64 relative group">
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border-8 border-red-600/5">
                <Image
                  src="/bogim.png"
                  alt="Joint Health"
                  fill
                  className="object-contain p-6"
                />
              </div>
            </div>

            {/* Tarkib qismlari setkasi */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px]">
              {minerals.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-center"
                >
                  <h4 className="text-red-600 font-black text-[10px] uppercase mb-1 leading-tight">
                    {m.name}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-bold leading-tight">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Ekstraktlar va Vitaminlar */}
          <div className="w-full lg:w-[400px] bg-white rounded-[40px] p-8 md:p-10 shadow-xl border border-gray-100 relative z-10 transition-all hover:-translate-y-2">
            <div className="mb-8">
              <h3 className="text-[#FF9F43] text-2xl font-black uppercase italic">
                KOMPLEKS
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Ekstraktlar va Vitamin C
              </p>
              <div className="h-1 w-12 bg-[#FF9F43] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.extracts.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                  </div>
                  <p className="text-[#1A1A1A] text-[14px] font-extrabold leading-snug uppercase">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
