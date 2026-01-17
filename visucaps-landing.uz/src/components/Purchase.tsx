"use client";

export default function Purchase() {
  const cards = [
    {
      title: "KO'Z NURI TIKLANISHI",
      desc: "Antotsianlar to'plami ko'z to'r pardasidagi hujayralar regeneratsiyasini tezlashtiradi va tiniqlikni tiklaydi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4B2C82]">
          <path
            d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      ),
    },
    {
      title: "ICHKI BOSIM NAZORATI",
      desc: "Bioaktiv minerallar ko'z ichki suyuqligi aylanishini yaxshilaydi va charchoq hamda bosimni bartaraf etadi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4B2C82]">
          <path
            d="M12 22V12M12 12L15 15M12 12L9 15M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "INTENSIV HIMOYA",
      desc: "Lutein va zeaksantin filtri ko'zni raqamli ekranlar va quyosh nurlarining zararli nurlanishidan asraydi.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-[#4B2C82]">
          <path
            d="M9 12L11 14L15 10M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
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
    <section className="relative w-full py-8 bg-gray-50/40 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* AFZALLIKLAR KARTALARI - Ixchamroq */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-5 shadow-sm border border-gray-50 hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-300 group"
            >
              <div className="mb-3 transition-transform duration-500 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-[#1A1A1A] font-[900] text-[9px] mb-1.5 tracking-[1px] uppercase italic">
                {card.title}
              </h3>
              <p className="text-gray-400 text-[8.5px] font-bold leading-relaxed uppercase tracking-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LOGO QISMI - VISUCAPS Clean Standarti */}
        <div className="flex flex-col items-center text-center space-y-2">
          <h2 className="text-[32px] md:text-[48px] font-[1000] italic tracking-tighter leading-none uppercase">
            <span className="text-[#1A1A1A]">VISU</span>
            <span className="text-[#4B2C82]">CAPS</span>
          </h2>
          <div className="h-0.5 w-12 bg-[#4B2C82] rounded-full opacity-30" />
          <p className="text-gray-400 font-black tracking-[3px] uppercase text-[7px] md:text-[8px]">
       Eng yaxshi samaraga sog‘lom turmush tarzi doirasida muntazam ravishda kurs qabul qilish orqali erishiladi.
          </p>
        </div>

        {/* Kapsulalar vizuali (Ixcham va Binafsha) */}
        <div className="mt-8 flex justify-center items-center gap-4 opacity-30">
          <div className="w-6 h-3 bg-[#4B2C82]/20 rounded-full rotate-45 border border-[#4B2C82]/10" />
          <div className="w-8 h-4 bg-[#7B52AB]/10 rounded-full -rotate-12 border border-[#7B52AB]/10" />
          <div className="w-6 h-3 bg-gray-200 rounded-full rotate-[30deg]" />
        </div>
      </div>

      {/* Orqa fon dekoratsiyasi */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#4B2C82_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
    </section>
  );
}
