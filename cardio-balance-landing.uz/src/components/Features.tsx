"use client";

export default function Features() {
  const features = [
    {
      text: "tabiiy tarkib",
    },
    {
      text: "kursga qabul qilish uchun mos",
    },
    {
      text: "dori vositasi emas",
    },
  ];

  return (
    <section className="relative w-full py-12 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy oq konteyner - Qizil soya va oq fon bilan */}
        <div className="relative bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(227,30,36,0.1)] border border-red-50 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Orqa fondagi yashirin nur effekti (Qizilroq nur) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-8 py-4 md:py-5
                transition-all duration-300 hover:bg-red-50/30 cursor-default
                ${
                  idx !== features.length - 1
                    ? "md:border-r border-red-100"
                    : ""
                }
              `}
            >
              {/* Doira belgisi (Qizil gradientli) */}
              <div className="shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-[#B22222] shadow-lg shadow-red-200/50 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>

              {/* Matn (Qora rangga o'tkazildi, rasmga mos) */}
              <div className="relative">
                <p className="text-[#1A1A1A] font-black text-[11px] md:text-[11px] leading-tight tracking-tight uppercase">
                  {item.text}
              
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blok ostidagi dekorativ element (Qizil gradient bilan) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-red-100/30 blur-[60px] rounded-full -z-10" />
    </section>
  );
}
