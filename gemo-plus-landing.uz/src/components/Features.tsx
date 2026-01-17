"use client";

export default function Features() {
  const features = [
    {
      text: "NOQULAYLIK HISSINI KAMAYTIRISHGA YORDAM BERADI",
    },
    {
      text: "TERI VA SHILLIQ QAVATLARNING QULAYLIGINI SAQLAYDI",
    },
    {
      text: "TARKIBIDA 100% TABIIY KOMPONENTLAR MAVJUD",
    },
  ];

  return (
    <section className="relative w-full py-4 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner - Tilla rangli soya va oq fon */}
        <div className="relative bg-white rounded-[40px] shadow-[0_25px_60px_-15px_rgba(197,163,88,0.15)] border border-[#C5A358]/10 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-8 py-5 md:py-8
                transition-all duration-300 hover:bg-[#C5A358]/5 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-[#C5A358]/10"
                    : ""
                }
              `}
            >
              {/* Doira belgisi (Tilla rangli) */}
              <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[#E8D3A3] via-[#C5A358] to-[#A68945] shadow-lg shadow-[#C5A358]/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-white/20 rounded-full border-2 border-white" />
              </div>

              {/* Matn */}
              <div className="relative">
                <p className="text-[#1A1A1A] font-[900] text-[9px] md:text-[10px] leading-tight tracking-widest uppercase">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativ orqa fon nuri */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#C5A358]/10 blur-[80px] rounded-full -z-10" />
    </section>
  );
}
