"use client";

export default function Features() {
  const features = [
    {
      text: "uglevod almashinuvini qo‘llab-quvvatlash",
    },
    {
      text: "kurs qabuli uchun mos",
    },
    {
      text: "tabiiy tarkib",
    },
  ];

  return (
    <section className="relative w-full py-8 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner */}
        <div className="relative bg-white rounded-[30px] md:rounded-full shadow-[0_15px_45px_-10px_rgba(204,29,36,0.12)] border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Hoverda sekin o'tuvchi nur effekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC1D24]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-6 md:px-10 py-5 md:py-7
                transition-all duration-300 hover:bg-gray-50/80 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-100"
                    : ""
                }
              `}
            >
              {/* Qizil belgisi (Diastop uslubida) */}
              <div className="shrink-0 w-7 h-7 rounded-full bg-[#CC1D24] shadow-lg shadow-red-200 flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
              </div>

              {/* Matn: DIASTØP brendiga mos professional shrift */}
              <div className="relative">
                <p className="text-[#1A1A1A] font-black text-[10px] md:text-[11px] leading-snug tracking-wider uppercase italic">
                  {item.text}
                </p>
                {/* Pastki dekorativ chiziqcha hover bo'lganda chiqadi */}
                <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#CC1D24] transition-all duration-300 group-hover:w-full opacity-30" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativ fon nuri (Yumshoq qizil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-[#CC1D24]/5 blur-[120px] -z-10 rounded-full" />
    </section>
  );
}
