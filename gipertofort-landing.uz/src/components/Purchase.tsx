"use client";

export default function Purchase() {
  const cards = [
    {
      title: "KOMPLEKS TA'SIR",
      desc: "tomirlarning me’yoriy tonusini saqlashga yordam beradi. yurak-qon tomir tizimi faoliyatini qo‘llab-quvvatlaydi. hissiy muvozanatni saqlashga yordam beradi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-[#CC1D24]"
        >
          <path
            d="M12 21C12 21 2 13.5 2 8.5C2 5.5 4.5 3 7.5 3C9.4 3 11.1 4 12 5.5C12.9 4 14.6 3 16.5 3C19.5 3 22 5.5 22 8.5C22 13.5 12 21 12 21Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "YUQORI SO'RILISH",
      desc: "Bioaktiv formula tufayli komponentlar organizmga tez kirib boradi va qon aylanishini  yaxshilaydi.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-[#CC1D24]"
        >
          <path
            d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "XAVFSIZ TARKIB",
      desc: "Kimyoviy qo'shimchalarsiz, faqat tabiiy o'simlik ekstraktlaridan tarkib topgan ekologik toza mahsulot.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-10 h-10 text-[#CC1D24]"
        >
          <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full py-5 bg-gray-50 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* KARTALAR - Animatsiyasiz, silliq hover bilan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-red-600/5 transition-all duration-300 group"
            >
              <div className="mb-6 transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-black text-[11px] mb-3 tracking-widest uppercase italic">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[11px] font-bold leading-relaxed uppercase tracking-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LOGO QISMI */}
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-[40px] md:text-[60px] font-[1000] italic tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">ГИПЕР</span>
            <span className="text-[#CC1D24]">ТОФОРТ</span>
          </h2>
          <div className="h-1 w-20 bg-[#CC1D24] rounded-full" />
          <p className="text-gray-400 font-black tracking-[4px] uppercase text-[9px]">
            Sog'lom yurak va barqaror qon bosimi
          </p>
        </div>

        {/* TABLETKALAR VIZUALI (CSS transition bilan soddalashtirilgan) */}
        <div className="mt-12 flex justify-center items-center gap-8 opacity-60">
          <div className="w-10 h-5 bg-white rounded-full shadow-md border border-gray-100 rotate-45" />
          <div className="w-12 h-6 bg-[#CC1D24]/10 rounded-full shadow-md border border-[#CC1D24]/20 -rotate-12" />
          <div className="w-10 h-5 bg-gray-200 rounded-full shadow-md border border-gray-300 rotate-[60deg]" />
        </div>
      </div>

      {/* Orqa fon dekoratsiyasi */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#CC1D24_0.5px,transparent_0.5px)] [background-size:20px_20px]" />
      </div>
    </section>
  );
}
