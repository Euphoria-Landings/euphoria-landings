"use client";

export default function Features() {
  const features = [
    {
      text: "vazn nazorati",
    },
    {
      text: "metabolizmni qo‘llab-quvvatlash",
    },
    {
      text: "tabiiy o’simliklardan tayyorlangan",
    },
  ];

  return (
    <section className="relative w-full py-10 md:py-8 bg-white">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner - Qora soya va pushti detallar bilan */}
        <div className="relative bg-white rounded-[30px] md:rounded-[45px] shadow-[0_30px_60px_-15px_rgba(233,30,99,0.1)] border border-pink-50 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Orqa fondagi yashirin nur effekti (Magenta nur) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-5 px-7 md:px-10 py-7 md:py-12
                transition-all duration-300 hover:bg-pink-50/20 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-pink-50"
                    : ""
                }
              `}
            >
              {/* Doira belgisi (Fatality Qora va Pushti gradienti) */}
              <div className="shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-[#E91E63] to-[#000000] shadow-lg shadow-pink-200/50 flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-ping" />
              </div>

              {/* Matn */}
              <div className="relative">
                <p className="text-[#000000] font-[1000] text-[11px] md:text-[12px] leading-tight tracking-[1.5px] uppercase italic">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blok ostidagi dekorativ element (Pushti gradient) */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 bg-pink-100/30 blur-[100px] rounded-full -z-10" />
    </section>
  );
}
