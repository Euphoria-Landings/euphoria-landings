"use client";

export default function Features() {
  const features = [
    {
      text: "Ko'rish o'tkirligini 100% tabiiy tiklash",
    },
    {
      text: "Ko'z ichki bosimi va charchog'ini kamaytirish",
    },
    {
      text: "To'r parda va gavhar himoyasini kuchaytirish",
    },
  ];

  return (
    <section className="relative w-full py-6 md:py-10 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* Asosiy konteyner - Binafsha urg'u bilan */}
        <div className="relative bg-white rounded-[24px] md:rounded-full shadow-[0_10px_40px_-10px_rgba(75,44,130,0.12)] border border-gray-100 flex flex-col md:flex-row items-stretch overflow-hidden group">
          {/* Hoverda binafsha nur effekti */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4B2C82]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

          {features.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative flex-1 flex items-center gap-4 px-6 md:px-8 py-4 md:py-6
                transition-all duration-300 hover:bg-[#4B2C82]/[0.02] cursor-default
                ${
                  idx !== features.length - 1
                    ? "border-b md:border-b-0 md:border-r border-gray-50"
                    : ""
                }
              `}
            >
              {/* Binafsha nuqta (VisuCaps uslubida) */}
              <div className="shrink-0 w-6 h-6 rounded-full bg-[#4B2C82] shadow-lg shadow-purple-200 flex items-center justify-center transition-transform group-hover:rotate-12">
                <div className="w-2 h-2 bg-white rounded-[2px] rotate-45" />
              </div>

              {/* Matn: Ixcham o'lchamda */}
              <div className="relative">
                <p className="text-[#1A1A1A] font-[900] text-[9px] md:text-[10.5px] leading-tight tracking-[1px] uppercase italic">
                  {item.text}
                </p>
                {/* Hover dekoratsiyasi */}
                <div className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#4B2C82] transition-all duration-300 group-hover:w-full opacity-20" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fon nuri */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-24 bg-[#4B2C82]/5 blur-[100px] -z-10 rounded-full" />
    </section>
  );
}
