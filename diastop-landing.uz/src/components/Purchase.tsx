"use client";

export default function Purchase() {
  const cards = [
    {
      title: "GLYUKOZA BALANSI",
      desc: "Inulin va xrom birikmasi qondagi qand miqdorini tabiiy pasaytirishga va uni me'yorda ushlashga yordam beradi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#CC1D24]">
          <path
            d="M12 21C12 21 2 13.5 2 8.5C2 5.5 4.5 3 7.5 3C9.4 3 11.1 4 12 5.5C12.9 4 14.6 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "METABOLIK QUVVAT",
      desc: "Bioaktiv formula hujayralarning insulinga sezgirligini oshiradi va modda almashinuvini darhol yaxshilaydi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#CC1D24]">
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "TABIIY HIMOYA",
      desc: "Faqat o'simlik ekstraktlaridan tarkib topgan, gormonlar va kimyoviy qo'shimchalarsiz xavfsiz majmua.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#CC1D24]">
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-5 bg-gray-50/50 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* AFZALLIKLAR KARTALARI */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[28px] p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 group"
            >
              <div className="mb-4 transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-[1000] text-[10px] mb-2 tracking-widest uppercase italic">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[9px] font-bold leading-relaxed uppercase tracking-tight opacity-80">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LOGO QISMI - DIASTØP Standarti */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h2 className="text-[35px] md:text-[55px] font-[1000] italic tracking-tighter leading-none uppercase flex items-center">
            <span className="text-[#1A1A1A]">DIA</span>
            <span className="text-[#CC1D24]">ST</span>
            <span className="relative inline-block text-[#CC1D24]">
              O{/* Siz aytgan custom diagonal chiziq */}
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[3px] bg-[#b20e0e] rotate-[-45deg] rounded-full"></span>
            </span>
            <span className="text-[#CC1D24]">P</span>
          </h2>
          <div className="h-0.5 w-16 bg-[#CC1D24] rounded-full opacity-50" />
          <p className="text-gray-400 font-black tracking-[3px] uppercase text-[8px] md:text-[9px]">
            Eng yaxshi samaraga muntazam ravishda muvozanatli ovqatlanish va mutaxassis tavsiyalari bilan birgalikda qabul qilinganda erishiladi.
          </p>
        </div>

        {/* Kapsulalar vizuali (Soddalashtirilgan) */}
        <div className="mt-10 flex justify-center items-center gap-6 opacity-40">
          <div className="w-8 h-4 bg-white rounded-full shadow-sm border border-gray-200 rotate-45" />
          <div className="w-10 h-5 bg-[#CC1D24]/10 rounded-full shadow-sm border border-[#CC1D24]/20 -rotate-12" />
          <div className="w-8 h-4 bg-gray-200 rounded-full shadow-sm border border-gray-300 rotate-[30deg]" />
        </div>
      </div>

      {/* Orqa fon dekoratsiyasi (Nuqtali tekstura) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#CC1D24_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </section>
  );
}
