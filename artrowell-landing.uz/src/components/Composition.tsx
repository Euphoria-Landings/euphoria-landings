"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    joints: [
      "bo‘g‘imlarning funksional holatini saqlashga yordam beradi.",
      "harakat paytida noqulaylik hissini kamaytirishga yordam beradi",
      "harakatchanlik va moslashuvchanlikni qo‘llab-quvvatlaydi",
      "vitaminlar va mikroelementlarning o‘rnini to‘ldirishga yordam beradi."
    ],
    complex: [
      "vitaminlar",
      "makro- va mikroelementlar",
      "o‘simlik ekstraktlari ",
      "antioksidant komponentlar"
    ],
  };

  const components = [
    { name: "vitaminlar", desc: "A, E, D, B guruhlari" },
    { name: "makro", desc: "va mikroelementlar" },
    { name: "o‘simlik", desc: "ekstraktlari" },
    { name: "Minerallar", desc: "makro va mikroelementlar" },
  ];

  return (
    <section
      id="composition"
      className="w-full py-10 md:py-1 bg-white overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha: Professional va SEO uchun optimallashgan */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A1A1A] text-2xl md:text-[45px] font-[1000] italic leading-none uppercase tracking-tighter">
            TABIIY <span className="text-[#CC1D24]">TARKIB</span>
          </h2>
          <p className="text-gray-400 font-black mt-4 uppercase text-[10px] md:text-[12px] tracking-[4px]">
            Artrowell - bu bo‘g‘imlar va tayanch-harakat tizimini har tomonlama
            qo‘llab-quvvatlash uchun mo‘ljallangan biologik faol oziq-ovqat
            qo‘shimchasi. Mahsulot tarkibiga bo‘g‘imlarning harakatchanligi,
            egiluvchanligi va umumiy qulayligini saqlashga yordam beradigan
            vitaminlar, mikroelementlar va o‘simlik tarkibiy qismlari kiradi.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
          {/* 1-Karta: Bo'g'imlar Tiklanishi */}
          <div className="w-full lg:w-[360px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-500 hover:shadow-red-600/5 group">
            <div className="mb-8">
              <h3 className="text-[#CC1D24] text-2xl font-black uppercase italic tracking-tighter transition-transform group-hover:translate-x-1">
                Asosiy
              </h3>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-[2px] mt-2">
               xususiyatlari
              </p>
              <div className="h-1 w-12 bg-[#CC1D24] mt-3 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.joints.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    <div className="w-2 h-2 rounded-full bg-[#CC1D24]" />
                  </div>
                  <p className="text-[#333] text-[12px] md:text-[13px] font-bold leading-tight uppercase tracking-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Anatomik vizualizatsiya */}
          <div className="flex flex-col items-center gap-8 order-first lg:order-none">
            <div className="w-56 h-56 md:w-64 md:h-64 relative">
              {/* Pulsatsiya effekti */}
              <div className="absolute inset-0 bg-[#CC1D24]/5 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border border-gray-50 z-10">
                <Image
                  src="/image.png" // Bo'g'im anatomiyasi yoki ARTROWELL logotipi
                  alt="Joint Health Anatomy"
                  fill
                  className="object-cover p-6 rounded-[50%] transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Komponentlar setkasi: Micro-ui */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
              {components.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/50 p-4 rounded-2xl border border-gray-100 text-center transition-all duration-300 hover:bg-white hover:shadow-lg group"
                >
                  <h4 className="text-[#CC1D24] font-[1000] text-[10px] md:text-[11px] uppercase leading-none mb-1 group-hover:scale-105 transition-transform">
                    {m.name}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-black uppercase tracking-tighter opacity-70">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Kompleks ta'sir */}
          <div className="w-full lg:w-[360px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-500 hover:shadow-red-600/5 group">
            <div className="mb-8">
              <h3 className="text-[#CC1D24] text-2xl font-black uppercase italic tracking-tighter transition-transform group-hover:translate-x-1">
                Tarkibi
              </h3>
              <p className="text-[10px] text-gray-400 font-black uppercase tracking-[2px] mt-2">
         Artrowell tarkibiga tabiiy kelib chiqishga ega bo‘lgan biologik faol komponentlar kiradi, jumladan:
              </p>
              <div className="h-1 w-12 bg-[#CC1D24] mt-3 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.complex.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                    <div className="w-2 h-2 rounded-full bg-[#CC1D24]" />
                  </div>
                  <p className="text-[#333] text-[12px] md:text-[13px] font-bold leading-tight uppercase tracking-tight">
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
