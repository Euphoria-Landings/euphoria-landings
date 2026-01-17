"use client";
import Image from "next/image";

export default function Gymnastics() {
  const gymCards = [
    {
      title: "TIRSAK",
      subtitle: "BO'G'IMI",
      imgSrc: "/rasm1.png",
      color: "from-red-50 to-red-100",
    },
    {
      title: "CHANOQ-SON",
      subtitle: "BO'G'IMI",
      imgSrc: "/rasm2.png",
      color: "from-gray-50 to-gray-100",
    },
    {
      title: "TIZZA",
      subtitle: "BO'G'IMI",
      imgSrc: "/rasm3.png",
      color: "from-red-100 to-red-200",
    },
  ];

  return (
    <section id="gym" className="w-full py-5 bg-gray-50/50">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* SARLAVHA */}
        <div className="mb-12">
          <h2 className="text-[32px] md:text-[42px] font-black italic mb-4 tracking-tighter leading-none">
            <span className="text-[#1A1A1A]">СУСТА</span>
            <span className="text-red-600">ФЛЕКС</span>
            <span className="text-[#1A1A1A] ml-4 not-italic font-extrabold text-3xl md:text-4xl block md:inline uppercase">
              bilan gimnastika
            </span>
          </h2>
          <p className="text-[#1A1A1A] text-sm md:text-base font-bold max-w-[550px] leading-tight uppercase tracking-tight opacity-70">
            Tayanch-harakat tizimi kasalliklari rivojlanish <br />
            xavfini kamaytirishga yordam beradi
          </p>
        </div>

        {/* KARTALAR GRIDI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gymCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative h-[240px] bg-white rounded-[32px] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Matnlar (Chap tomonda) */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <h3 className="text-[#1A1A1A] text-2xl font-black leading-[0.9] tracking-tighter uppercase">
                  {card.title} <br />
                  <span className="text-lg text-red-600 font-bold">
                    {card.subtitle}
                  </span>
                </h3>
              </div>

              {/* Rasm qismi (O'ng tomonda - Width: 60%, Height: 100%) */}
              <div
                className={`absolute right-0 top-0 w-[60%] h-full bg-gradient-to-l ${card.color} z-10`}
              >
                {/* 1. p-4 olib tashlandi (padding bo'lsa rasm kichrayadi)
                   2. Image uchun object-cover yoki object-center ishlatish mumkin
                */}
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700">
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="100%"
                    priority
                    className="object-cover object-center"
                  />
                  {/* Agar rasm qirqilmasligi kerak bo'lsa 'object-contain' ishlating */}
                </div>
              </div>

              {/* Bezak (Orqa fondagi raqam) */}
              <span className="absolute -bottom-4 -left-2 text-[100px] font-black text-gray-50 z-0 select-none">
                0{idx + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Dekorativ chiziq */}
        <div className="mt-16 flex justify-center">
          <div className="h-[2px] w-24 bg-red-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
