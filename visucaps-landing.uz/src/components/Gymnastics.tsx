"use client";
import Image from "next/image";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "ko‘rish zo‘riqishini",
      subtitle: "boshdan kechiruvchilar",
      imgSrc: "/relax.png",
      color: "from-purple-50 to-purple-100",
    },
    {
      title: "FOCyorqin yorug‘lik",
      subtitle: "yoki quruq havoda ishlaydiganlar",
      imgSrc: "/focus.png",
      color: "from-gray-50 to-gray-100",
    },
    {
      title: "ko‘rish qobiliyatini",
      subtitle: "saqlab qolish haqida qayg‘uradiganlar",
      imgSrc: "/vision.png",
      color: "from-purple-100 to-purple-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-6 md:py-8 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - VISUCAPS Ixcham Style */}
        <div className="mb-8 space-y-2">
          <h2 className="text-[22px] md:text-[32px] font-[1000] italic tracking-tighter leading-none uppercase flex flex-wrap items-center gap-x-2">
            <span className="text-[#1A1A1A]">VISU</span>
            <span className="text-[#4B2C82]">CAPS</span>
            <span className="text-[#1A1A1A] not-italic font-black text-lg md:text-xl ml-1">
              kimlar uchun mos keladi
            </span>
          </h2>
          <p className="text-gray-400 text-[8px] md:text-[9px] font-bold max-w-[400px] leading-tight uppercase tracking-[2px]">
            Vizu Caps kattalarga tavsiya etilishi mumkin, ular:
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[140px] md:h-[160px] bg-white rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-50 overflow-hidden"
            >
              {/* Matnlar - Ixchamroq */}
              <div className="absolute left-5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A1A1A] text-base font-[900] leading-none tracking-tighter uppercase italic">
                  {card.title} <br />
                  <span className="text-[7px] text-[#4B2C82] font-black tracking-[1.5px] inline-block mt-1">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi - Binafsha gradient bilan */}
              <div
                className={`absolute right-0 top-0 w-[55%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center mix-blend-multiply opacity-60"
                  />
                </div>
              </div>

              {/* Raqamli bezak - Kichikroq */}
              <span className="absolute -bottom-2 -left-1 text-[45px] font-black text-gray-50 z-0 select-none">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
