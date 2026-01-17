"use client";
import { Zap, ShieldCheck, Leaf } from "lucide-react";

export default function Purchase() {
  const cards = [
    {
      title: "KOMPLEKS TA'SIR",
      desc: "Uropro kompleks qo‘llab-quvvatlovchi sifatida ta’sir ko‘rsatadi: siydik-tanosil tizimi funksiyalarini boshqarishga yordam beradi",
      icon: <ShieldCheck className="w-12 h-12 text-[#E31E24]" />,
    },
    {
      title: "PROSTATA BEZINING",
      desc: "Funksional holatini qo‘llab-quvvatlaydi, erkak jinsiy maylini saqlab qolishga yordam beradi",
      icon: <Zap className="w-12 h-12 text-[#E31E24]" />,
    },
    {
      title: "100% TABIIY TARKIB",
      desc: "Hech qanday kimyoviy qo'shimchalarsiz, faqat o'simlik ekstraktlari va hayotiy muhim minerallar asosida ishlab chiqilgan.",
      icon: <Leaf className="w-12 h-12 text-[#E31E24]" />,
    },
  ];

  return (
    <section className="relative w-full py-4 bg-white overflow-hidden">
      {/* Fon effektlari - Oq fonga moslangan yumshoq nurlar */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-red-50 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-slate-50 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* TEPA QISMDAGI 3 TA KARTA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50/50 backdrop-blur-xl rounded-[40px] p-8 md:p-10 border border-slate-100 hover:border-[#E31E24]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-500 group cursor-default"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                {card.icon}
              </div>
              <h3 className="text-[#1A2B3C] font-[1000] text-[13px] mb-4 tracking-[3px] uppercase italic">
                {card.title}
              </h3>
              <p className="text-slate-500 text-[12px] leading-relaxed font-medium uppercase tracking-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* LOGO QISMI - Oq fonda kontrast kuchaytirildi */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <h2 className="text-[50px] md:text-[90px] font-[1000] italic tracking-tighter leading-none uppercase">
            <span className="text-[#1A2B3C]">URO</span>
            <span className="text-[#E31E24]">PRO</span>
          </h2>
          <div className="h-[2px] w-24 bg-[#E31E24]" />
          <p className="text-slate-400 font-black tracking-[6px] md:tracking-[10px] uppercase text-[10px] md:text-[12px]">
            Absolute Male Power
          </p>
        </div>

        {/* STATIK KAPSULALAR (Oq dizaynga moslashtirildi) */}
        <div className="relative h-16 flex justify-center items-center gap-8 md:gap-12 opacity-80">
          <div className="w-10 h-5 bg-[#E31E24] rounded-full shadow-[0_5px_15px_rgba(227,30,36,0.2)] border border-white rotate-45" />
          <div className="w-12 h-6 bg-[#1A2B3C] rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] border border-white -rotate-12" />
          <div className="w-10 h-5 bg-slate-200 rounded-full border border-white rotate-[60deg]" />
        </div>
      </div>
    </section>
  );
}
