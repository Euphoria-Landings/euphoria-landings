"use client";
import Image from "next/image";

export default function Usage() {
  const usageSteps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#C5A358]">
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "MUNTZAM PARVARISH",
      desc: "Anal kanali sohasida noqulaylik sezilganda qo'llaniladi",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-[#C5A358]">
          <path
            d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 8L2 22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "YUMSHOQ TA'SIR",
      desc: "Teri va shilliq qavatlarning yuqori sezuvchanligida gigiyenik parvarish uchun",
    },
  ];

  return (
    <section id="usage" className="w-full py-4 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* CHAP TOMON: QO'LLANILISHI */}
        <div className="w-full md:w-1/2 space-y-8">
          <h2 className="text-[32px] md:text-[42px] font-[1000] italic leading-tight tracking-tighter uppercase">
            <span className="text-[#1A1A1A]">GEMO</span>
            <span className="text-[#C5A358]"> PLUS</span>
            <br />
            <span className="text-[#1A1A1A] not-italic text-[26px] md:text-[36px]">
              qachon ishlatiladi?
            </span>
          </h2>

          <div className="space-y-6">
            {usageSteps.map((info, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="p-3 rounded-2xl bg-[#C5A358]/10 group-hover:bg-[#C5A358]/20 transition-colors shrink-0">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#1A1A1A] font-black text-[13px] tracking-wider uppercase">
                    {info.title}
                  </h4>
                  <p className="text-gray-500 text-[13px] font-bold leading-snug mt-1 max-w-[320px]">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1A1A1A] rounded-[30px] p-8 border-l-8 border-[#C5A358] shadow-2xl">
            <p className="text-[#C5A358] text-[10px] font-black uppercase tracking-[3px] mb-3">
              QO'LLASH TARTIBI
            </p>
            <h3 className="text-white text-2xl md:text-3xl font-black italic uppercase leading-tight">
              KURS DAVOMIYLIGI <br />
              <span className="text-[#C5A358]">INDIVIDUAL BELGILANADI</span>
            </h3>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL */}
        <div className="w-full md:w-1/2 relative h-[380px] md:h-[550px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A358]/20 to-transparent rounded-[40px] -rotate-3" />
          <div
            className="relative w-full h-full rounded-[40px] overflow-hidden shadow-2xl"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 20%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            }}
          >
            <Image
              src="/right.png" // Mahsulotni qo'llash jarayoni yoki qulaylikni ifodalovchi rasm
              alt="Gemo Plus Usage"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Kichik ma'lumot bloki */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
            <p className="text-[10px] font-black uppercase text-[#C5A358] mb-1">
              Eslatma:
            </p>
            <p className="text-[11px] font-bold text-[#1A1A1A]">
              Faqat tashqi foydalanish uchun mo'ljallangan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
