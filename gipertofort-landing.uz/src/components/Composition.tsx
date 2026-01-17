"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    vessels: [
      "tomirlarning me’yoriy tonusini saqlashga yordam beradi",
      "yurak-qon tomir tizimi faoliyatini qo‘llab-quvvatlaydi",
      "hissiy muvozanatni saqlashga  yordam beradi.",
      "organizmning umumiy holatini  saqlab turadi",
    ],
    complex: [
      "ginkgo biloba",
      "do‘lana",
      "valeriana",
      "limono‘t"
    ],
  };

  const components = [
    { name: "Do'lana", desc: "Yurak quvvati" },
    { name: "ginkgo biloba", desc: "Xolesterin muozanati" },
    { name: "limono‘t", desc: "Tomirlar elastikligi" },
    { name: "Valeriana", desc: "Tinchlantiruvchi" },
  ];

  return (
    <section className="w-full py-6 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha */}
        <div className="text-center mb-12">
          <h2 className="text-[#1A1A1A] text-2xl md:text-4xl font-[1000] italic leading-tight uppercase tracking-tighter">
            TABIIY <span className="text-[#CC1D24]">KOMPONENTLAR</span>
          </h2>
          <p className="text-gray-400 font-bold mt-3 uppercase text-[10px] tracking-[3px]">
            Yuqori texnologiyali tozalash usuli
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* 1-Karta: Tomirlar uchun */}
          <div className="w-full lg:w-[380px] bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-red-600/5">
            <div className="mb-6">
              <h3 className="text-[#CC1D24] text-xl font-black uppercase italic">
                HIMOYA
              </h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Tomirlar tizimi
              </p>
              <div className="h-1 w-10 bg-[#CC1D24] mt-2 rounded-full" />
            </div>
            <ul className="space-y-5">
              {mainFeatures.vessels.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CC1D24]" />
                  </div>
                  <p className="text-[#333] text-[11px] font-bold leading-snug uppercase tracking-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-44 h-44 md:w-56 md:h-56 relative">
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center p-2 border border-gray-50">
                <Image
                  src="/center.png"
                  alt="Vessel Health"
                  fill
                  className="object-contain p-4 transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>

            {/* Komponentlar setkasi */}
            <div className="grid grid-cols-2 gap-2 w-full max-w-[360px]">
              {components.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50/50 p-3 rounded-xl border border-gray-100 text-center transition-colors duration-300 hover:bg-white hover:shadow-md"
                >
                  <h4 className="text-[#CC1D24] font-black text-[9px] uppercase leading-tight">
                    {m.name}
                  </h4>
                  <p className="text-[8px] text-gray-400 font-bold leading-tight mt-1">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Kompleks ta'sir */}
          <div className="w-full lg:w-[380px] bg-white rounded-[32px] p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-red-600/5">
            <div className="mb-6">
              <h3 className="text-[#CC1D24] text-xl font-black uppercase italic">
                Tarkibi
              </h3>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Gipertofort tarkibiga o‘simliklardan olingan biologik faol
                komponentlar kiradi, jumladan:
              </p>
              <div className="h-1 w-10 bg-[#CC1D24] mt-2 rounded-full" />
            </div>
            <ul className="space-y-5">
              {mainFeatures.complex.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#CC1D24]" />
                  </div>
                  <p className="text-[#333] text-[11px] font-bold leading-snug uppercase tracking-tight">
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
