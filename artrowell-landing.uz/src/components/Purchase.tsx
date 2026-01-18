"use client";

export default function Purchase() {
  const cards = [
    {
      title: "kompleks qo‘llab-quvvatlovchi ta’sir",
      desc: "bo‘g‘imlarning normal funksional holatini saqlashga yordam beradi hamda jismoniy mashqlar paytida qulaylikni saqlashga ko‘maklashadi",
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
      title: "TEZKOR NATIJA",
      desc: "to‘qimalardagi almashinuv jarayonlarini qo‘llab-quvvatlaydi. faollik va harakatchanlikni saqlab qolishga yordam beradi",
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
      title: "TABIIY HIMOYA",
      desc: "100% tabiiy o'simlik ekstraktlari va minerallar. Nojo'ya ta'sirlarsiz va allergik reaksiyalardan xoli.",
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
    <section className="relative w-full py-4 md:py-4 bg-gray-50/50 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* KARTALAR - Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="bg-white rounded-[40px] p-10 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl hover:shadow-red-600/10 transition-all duration-500 group"
            >
              <div className="mb-8 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-black text-[12px] md:text-[11px] mb-4 tracking-[2px] uppercase italic leading-none">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[11px] md:text-[12px] font-bold leading-relaxed uppercase tracking-tight opacity-80">
                {card.desc}
              </p>
            </article>
          ))}
        </div>

        {/* BREND LOGO QISMI */}
        <div className="flex flex-col items-center text-center space-y-5">
          <h2 className="text-[45px] md:text-[75px] font-[1000] italic tracking-tighter leading-none uppercase select-none">
            <span className="text-[#1A1A1A]">ARTRO</span>
            <span className="text-[#CC1D24]">WELL</span>
          </h2>
          <div className="h-1.5 w-24 bg-[#CC1D24] rounded-full" />
          <p className="text-gray-400 font-black tracking-[5px] uppercase text-[10px] md:text-[12px]">
            Harakat erkinligi — hayot tarzi
          </p>
        </div>

        {/* KAPSULALAR VIZUALI (Artrowell uchun kapsula shakli) */}
        <div className="mt-16 flex justify-center items-center gap-10 opacity-30 select-none">
          <div className="w-12 h-6 bg-white rounded-full shadow-lg border border-gray-200 rotate-45 transition-transform hover:rotate-[90deg] duration-1000" />
          <div className="w-14 h-7 bg-[#CC1D24]/20 rounded-full shadow-lg border border-[#CC1D24]/30 -rotate-12 transition-transform hover:rotate-0 duration-1000" />
          <div className="w-12 h-6 bg-gray-200 rounded-full shadow-lg border border-gray-300 rotate-[60deg] transition-transform hover:rotate-[120deg] duration-1000" />
        </div>
      </div>

      {/* Orqa fon dekoratsiyasi: Dot Matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>
    </section>
  );
}
