"use client";
import Image from "next/image";

export default function Composition() {
  // Diabetga qarshi asosiy xususiyatlar
  const mainFeatures = {
    vessels: [
      "qonda qand miqdorini me’yorda ushlab turishga yordam beradi.",
      "uglevod va energiya almashinuvini qo‘llab-quvvatlaydi.",
      "umumiy metabolik muvozanatni ta’minlaydi",
      "qon tomir va umumiy holatni qo‘llab-quvvatlaydi",
    ],
    complex: [
      "vitaminlar",
      "mikro va makroelementlar",
      "antioksidant komponentlar",
    ],
  };

  // Diabetga qarshi o'simliklar va minerallar
  const components = [
    { name: "o‘simlik ekstraktlari", desc: "Qand nazorati" },
    { name: "vitaminlar", desc: "A, E, D, B guruhlari" },
    { name: "antioksidant", desc: "komponentlar" },
    { name: "mikro", desc: "va makroelementlar" },
  ];

  return (
    <section className="w-full py-4 bg-white overflow-hidden" id="composition">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha - Custom DIASTØP Logo Style */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A1A1A] text-2xl md:text-4xl font-[1000] italic leading-tight uppercase tracking-tighter">
            <span className="text-[#1A1A1A]">DIA</span>
            <span className="text-[#CC1D24]">ST</span>
            <span className="relative inline-block text-[#CC1D24]">
              O
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[3px] bg-[#b80000] rotate-[-45deg] rounded-full"></span>
            </span>
            <span className="text-[#CC1D24]">P</span> TARKIBI
          </h2>
          <p className="text-gray-400 font-bold mt-4 uppercase text-[10px] tracking-[4px]">
            DIASTOP - bu ovqatga biologik faol qo‘shimcha bo‘lib, organizmning
            normal uglevod almashinuvi va funksional holatini qo‘llab-quvvatlash
            uchun ishlab chiqilgan. Vitaminlar, mikroelementlar va o‘simlik
            komponentlari majmuasi sog‘lom turmush tarzi doirasida qondagi qand
            miqdorini barqaror saqlashga yordam beradi.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* 1-Karta: Glyukoza nazorati */}
          <div className="w-full lg:w-[380px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-500 hover:border-[#CC1D24]/20 hover:shadow-red-600/5">
            <div className="mb-8">
              <h3 className="text-[#CC1D24] text-2xl font-black uppercase italic">
                Asosiy{" "}
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                xususiyatlari{" "}
              </p>
              <div className="h-1 w-12 bg-[#CC1D24] mt-3 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.vessels.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#CC1D24]" />
                  </div>
                  <p className="text-[#333] text-[12px] font-bold leading-snug uppercase italic tracking-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual rasm */}
          <div className="flex flex-col items-center gap-8">
            <div className="w-48 h-48 md:w-64 md:h-64 relative">
              <div className="absolute inset-0 bg-[#CC1D24]/5 rounded-full blur-[60px]" />
              <div className="relative w-full h-full bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.1)] flex items-center justify-center p-4 border border-gray-100">
                <Image
                  src="/object.png" // Bu yerda o'simliklar yoki mahsulot rasmi bo'ladi
                  alt="Diastop Composition"
                  fill
                  className="object-cover rounded-[50%] p-6 transition-transform duration-700 hover:rotate-6 hover:scale-105"
                />
              </div>
            </div>

            {/* Komponentlar setkasi */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[380px]">
              {components.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h4 className="text-[#CC1D24] font-black text-[10px] md:text-[11px] uppercase leading-tight">
                    {m.name}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-bold leading-tight mt-1 uppercase">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Kompleks ta'sir */}
          <div className="w-full lg:w-[380px] bg-white rounded-[40px] p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-gray-50 transition-all duration-500 hover:border-[#CC1D24]/20 hover:shadow-red-600/5">
            <div className="mb-8">
              <h3 className="text-[#CC1D24] text-2xl font-black uppercase italic">
                Tarkibi
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
              DIASTOP tarkibiga kelib chiqishi tabiiy bo‘lgan biologik faol komponentlar kiradi, jumladan:
              </p>
              <div className="h-1 w-12 bg-[#CC1D24] mt-3 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.complex.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#CC1D24]" />
                  </div>
                  <p className="text-[#333] text-[12px] font-bold leading-snug uppercase italic tracking-tight">
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
