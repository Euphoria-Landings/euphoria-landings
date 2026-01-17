"use client";
import Image from "next/image";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "METABOLIZM",
      subtitle: "YENGIL HARAKAT",
      imgSrc: "/meto.png",
      color: "from-red-50 to-red-100",
    },
    {
      title: "GLYUKOZA",
      subtitle: "NAZORAT MASHQLARI",
      imgSrc: "/glyu.png",
      color: "from-gray-50 to-gray-100",
    },
    {
      title: "ENERGİYA",
      subtitle: "TONUSNI TIKLASH",
      imgSrc: "/fast.png",
      color: "from-red-100 to-red-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-3 md:py-5 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA - DIASTØP Custom Logo */}
        <div className="mb-10 space-y-4">
          <h2 className="text-[24px] md:text-[36px] font-[1000] italic tracking-tighter leading-none uppercase flex flex-wrap items-center gap-x-3">
            <span className="flex items-center">
              <span className="text-[#1A1A1A]">DIA</span>
              <span className="text-[#CC1D24]">ST</span>
              <span className="relative inline-block text-[#CC1D24]">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[3px] bg-[#750909] rotate-[-45deg] rounded-full"></span>
              </span>
              <span className="text-[#CC1D24]">P</span>
            </span>
            <span className="text-[#1A1A1A] not-italic font-black text-xl md:text-2xl">
              BILAN FAOLLIK
            </span>
          </h2>
          <p className="text-gray-400 text-[9px] md:text-[10px] font-bold max-w-[450px] leading-tight uppercase tracking-[2px]">
            Qondagi qand miqdorini tabiiy pasaytirish va metabolizmni <br />
            tezlashtirish uchun tavsiya etilgan kundalik mashqlar
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* TO'G'RILANGAN JOY: gymCards.map ishlatildi */}
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[180px] bg-white rounded-[28px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Matnlar */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A1A1A] text-lg font-black leading-[0.9] tracking-tighter uppercase italic">
                  {card.title} <br />
                  <span className="text-[8px] text-[#CC1D24] font-black tracking-[2px]">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi */}
              <div
                className={`absolute right-0 top-0 w-[60%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-110">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center mix-blend-multiply opacity-70"
                  />
                </div>
              </div>

              {/* Raqamli bezak */}
              <span className="absolute -bottom-3 -left-1 text-[60px] font-black text-gray-50 z-0 select-none">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
