"use client";

export default function Features() {
  const features = [
    {
      text: "yurakning funksional holatini saqlashga yordam beradi",
    },
    {
      text: "Qon tomirlari elastikligini tiklash",
    },
    {
      text: "tabiiy o‘simlik tarkibi",
    },
  ];

  return (
    <section className="relative w-full py-8 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner */}
        <div className="relative bg-white rounded-[30px] md:rounded-full shadow-[0_10px_40px_-10px_rgba(204,29,36,0.08)] border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Hoverda sekin o'tuvchi nur effekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CC1D24]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-6 md:px-8 py-5 md:py-6
                transition-all duration-300 hover:bg-gray-50 cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-100"
                    : ""
                }
              `}
            >
              {/* Qizil belgisi (ECG nuqtasi uslubida) */}
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#CC1D24] shadow-lg shadow-red-200 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full opacity-80" />
              </div>

              {/* Matn: Kichikroq va professional (10px - 11px) */}
              <div className="relative">
                <p className="text-[#333] font-bold text-[10px] md:text-[10.5px] leading-tight tracking-[0.5px] uppercase italic">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dekorativ fon nuri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-red-50/20 blur-[100px] -z-10 rounded-full" />
    </section>
  );
}
