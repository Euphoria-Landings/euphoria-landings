"use client";

export default function Features() {
  const features = [
    {
      text: "bo‘g‘imlarni qo‘llab-quvvatlash",
    },
    {
      text: "Bo‘g‘imlardagi noqulaylikning kamayishi",
    },
    {
      text: "100% tabiiy va xavfsiz tarkib",
    },
  ];

  return (
    <section 
      className="relative w-full py-10 bg-white overflow-hidden"
      aria-label="Mahsulotning asosiy afzalliklari"
    >
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner: Ergonomik va professional dizayn */}
        <div className="relative bg-white rounded-[24px] md:rounded-full shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden group">
          
          {/* Vizual dinamika: Hover effekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC1D24]/[0.03] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" aria-hidden="true" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-5 px-8 md:px-10 py-6 md:py-7
                transition-all duration-300 hover:bg-gray-50/50 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-100"
                    : ""
                }
              `}
            >
              {/* Brend belgisi: Artrowell suyak/bo'g'im stilistikasida */}
              <div className="shrink-0 w-10 h-8 rounded-full bg-white border-2 border-[#CC1D24] shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="w-4 h-4 text-[#CC1D24]"
                  aria-hidden="true"
                >
                  <path 
                    d="M20 6L9 17l-5-5" 
                    stroke="currentColor" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                </svg>
              </div>

              {/* Matn: Professional mikro-tipografiya */}
              <div className="relative">
                <p className="text-[#1A1A1A] font-bold text-[11px] md:text-[9px] leading-tight tracking-[1px] uppercase italic">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orqa fon dekoratsiyasi */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-24 bg-red-50/30 blur-[120px] -z-10 rounded-full" aria-hidden="true" />
    </section>
  );
}