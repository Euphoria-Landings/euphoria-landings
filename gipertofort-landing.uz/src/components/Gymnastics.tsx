"use client";
import Image from "next/image";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "YURAK",
      subtitle: "KARDIO MASHQLAR",
      imgSrc: "/yurak.png",
      color: "from-red-50 to-red-100",
    },
    {
      title: "TOMIRLAR",
      subtitle: "ELASTIKLIK",
      imgSrc: "/tomir.png",
      color: "from-gray-50 to-gray-100",
    },
    {
      title: "NAFAS",
      subtitle: "RELAX MASHQLARI",
      imgSrc: "/nafas.png",
      color: "from-red-100 to-red-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-5 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-12 space-y-3">
          <h2 className="text-[28px] md:text-[42px] font-[1000] italic tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">ГИПЕР</span>
            <span className="text-[#CC1D24]">ТОФОРТ</span>
            <span className="text-[#1A1A1A] ml-4 not-italic font-black text-2xl md:text-3xl block md:inline">
              BILAN SALOMATLIK
            </span>
          </h2>
          <p className="text-gray-400 text-[10px] md:text-[11px] font-bold max-w-[500px] leading-tight uppercase tracking-[2px]">
            Qon aylanishini yaxshilash va arterial bosimni <br />
            barqarorlashtirish uchun tavsiya etilgan mashqlar
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[200px] bg-white rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              {/* Matnlar (Z-index baland qilib o'rnatildi) */}
              <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A1A1A] text-xl font-black leading-[0.9] tracking-tighter uppercase">
                  {card.title} <br />
                  <span className="text-[10px] text-[#CC1D24] font-black tracking-widest">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi */}
              <div
                className={`absolute right-0 top-0 w-[100%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center mix-blend-multiply opacity-80"
                  />
                </div>
              </div>

              {/* Raqamli bezak */}
              <span className="absolute -bottom-4 -left-2 text-[80px] font-black text-gray-50 z-0 select-none">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ pastki qism */}
        <div className="mt-12 flex justify-center">
          <div className="h-1 w-20 bg-[#CC1D24] rounded-full opacity-20" />
        </div>
      </div>
    </section>
  );
}
