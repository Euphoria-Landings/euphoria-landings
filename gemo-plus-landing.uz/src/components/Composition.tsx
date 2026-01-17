"use client";
import Image from "next/image";

export default function Composition() {
  const mainFeatures = {
    oil: [
      "Anal kanali sohasida gigiyenik parvarishni ta'minlaydi",
      "Teri va shilliq qavatlarning qulayligini saqlashga yordam beradi",
    ],
    extracts: [
      "Isiriq (Shuvoq) efir moyi — tetiklashtiruvchi ta'sirga ega",
      "O'simlik moylari majmuasi — terini yumshatadi va oziqlantiradi",
      "Tabiiy komponentlar — yuqori sezuvchanlikni pasaytiradi",
    ],
  };

  const components = [
    { name: "Shuvoq", desc: "Efir moyi" },
    { name: "Kanakunjut", desc: "O'simlik moyi" },
    { name: "Ekstraktlar", desc: "Tabiiy majmua" },
    { name: "Efir Moyi", desc: "Tetiklantiruvchi" },
  ];

  return (
    <section
      id="ingredients"
      className="w-full py-5 bg-gray-50/50 overflow-hidden"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A1A1A] text-3xl md:text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            TABIIY <span className="text-[#C5A358]">TARKIB</span>
          </h2>
          <div className="h-1 w-20 bg-[#C5A358] mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 font-bold mt-4 uppercase text-[10px] md:text-xs tracking-[4px]">
            Efir moylari va o'simlik ekstraktlari majmuasi
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 1-Karta: Gigiyenik parvarish */}
          <div className="w-full lg:w-[380px] bg-white rounded-[45px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10 transition-transform hover:scale-[1.02] duration-300">
            <div className="mb-8">
              <h3 className="text-[#C5A358] text-2xl font-black uppercase italic">
                PARVARISH
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Gigiyenik qulaylik
              </p>
              <div className="h-1 w-12 bg-[#1A1A1A] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.oil.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A358]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C5A358]" />
                  </div>
                  <p className="text-[#1A1A1A] text-[13px] md:text-[14px] font-extrabold leading-snug uppercase tracking-tight">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Vizual element */}
          <div className="flex flex-col items-center gap-8 z-20">
            <div className="w-56 h-56 md:w-72 md:h-72 relative">
              {/* O'simlik yoki moy tomchisi rasmi uchun joy */}
              <div className="absolute inset-0 bg-white rounded-full shadow-2xl flex items-center justify-center p-6 border-[12px] border-[#C5A358]/5">
                <div className="relative w-full h-full opacity-90">
                  <Image
                    src="/center.png" // O'simliklar yoki tarkibiy qismlar rasmi
                    alt="Gemo Plus Natural Composition"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Komponentlar setkasi */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[420px]">
              {components.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-[25px] border border-gray-100 shadow-sm text-center hover:border-[#C5A358]/30 transition-colors"
                >
                  <h4 className="text-[#C5A358] font-black text-[11px] uppercase mb-1 leading-tight tracking-tighter">
                    {c.name}
                  </h4>
                  <p className="text-[9px] text-gray-400 font-bold leading-tight uppercase">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Tabiiy komponentlar */}
          <div className="w-full lg:w-[380px] bg-white rounded-[45px] p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 relative z-10 transition-transform hover:scale-[1.02] duration-300">
            <div className="mb-8">
              <h3 className="text-[#C5A358] text-2xl font-black uppercase italic">
                KOMPONENT
              </h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
                Tabiiy moylar majmuasi
              </p>
              <div className="h-1 w-12 bg-[#1A1A1A] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.extracts.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#C5A358]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#C5A358]" />
                  </div>
                  <p className="text-[#1A1A1A] text-[13px] md:text-[14px] font-extrabold leading-snug uppercase tracking-tight">
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
