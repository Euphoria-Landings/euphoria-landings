"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    vision: [
      "normal ko‘rish qobiliyatini saqlashga yordam beradi",
      "ko‘rish charchog‘ini kamaytirishga yordam beradi",
      "to‘r pardaning funksional holatini ta’minlaydi.",
      "ko‘zni oksidlovchi stressdan himoya qilishga yordam beradi.",
    ],
    protection: [
      "oddiy chernika",
      "dorivor tirnoqgul",
      "oddiy ayir",
    ],
  };

  const components = [
    { name: "tirnoqgul", desc: "Himoydorivora" },
    { name: "chernika", desc: "Tiniqlik" },
    { name: "teshik dalachoy", desc: "Tiklanish" },
    { name: "katta zubturum", desc: "Quvvat" },
  ];

  return (
    <section className="w-full py-10 bg-white" id="composition">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha - Ixcham VisuCaps Style */}
        <div className="text-center mb-12">
          <h2 className="text-[#1A1A1A] text-xl md:text-3xl font-[1000] italic leading-none uppercase tracking-tighter">
            <span className="text-[#1A1A1A]">VISU</span>
            <span className="text-[#4B2C82]">CAPS</span> TARKIBI
          </h2>
          <p className="text-gray-400 font-bold mt-3 uppercase text-[8px] md:text-[9px] tracking-[4px]">
            Tabiiy va xavfsiz komponentlar
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
          {/* 1-Karta: Vision Control */}
          <div className="w-full lg:w-[320px] bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-50 hover:border-[#4B2C82]/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-[#4B2C82] text-xl font-black uppercase italic leading-none">
                Asosiy
              </h3>
              <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest mt-1">
                xususiyatlar
              </p>
              <div className="h-0.5 w-10 bg-[#4B2C82] mt-2 rounded-full" />
            </div>
            <ul className="space-y-4">
              {mainFeatures.vision.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2C82]" />
                  </div>
                  <p className="text-[#333] text-[10px] md:text-[11px] font-bold leading-tight uppercase italic tracking-tight opacity-90">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual rasm (Kichraytirilgan) */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-40 h-40 md:w-56 md:h-56 relative">
              <div className="absolute inset-0 bg-[#4B2C82]/5 rounded-full blur-[50px]" />
              <div className="relative w-full h-full bg-white rounded-full shadow-lg flex items-center justify-center p-6 border border-gray-100">
                <Image
                  src="/tarkib.png"
                  alt="VisuCaps Formula"
                  fill
                  className="object-contain p-4 transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* Komponentlar setkasi - Ixcham */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-[320px]">
              {components.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white py-3 px-4 rounded-xl border border-gray-50 text-center hover:shadow-md transition-all"
                >
                  <h4 className="text-[#4B2C82] font-black text-[9px] md:text-[10px] uppercase leading-none">
                    {m.name}
                  </h4>
                  <p className="text-[8px] text-gray-400 font-bold leading-none mt-1 uppercase">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Protection Complex */}
          <div className="w-full lg:w-[320px] bg-white rounded-[32px] p-6 md:p-8 shadow-sm border border-gray-50 hover:border-[#4B2C82]/20 transition-all duration-500">
            <div className="mb-6">
              <h3 className="text-[#4B2C82] text-xl font-black uppercase italic leading-none">
                Tarkibi
              </h3>
              <p className="text-[9px] text-gray-300 font-bold uppercase tracking-widest mt-1">
                Vizu Caps tarkibiga o‘simliklardan olingan biologik faol
                komponentlar kiradi, jumladan:
              </p>
              <div className="h-0.5 w-10 bg-[#4B2C82] mt-2 rounded-full" />
            </div>
            <ul className="space-y-4">
              {mainFeatures.protection.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4B2C82]" />
                  </div>
                  <p className="text-[#333] text-[10px] md:text-[11px] font-bold leading-tight uppercase italic tracking-tight opacity-90">
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
