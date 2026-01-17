"use client";
import Image from "next/image";
import { Beaker, Shield, Activity } from "lucide-react";

export default function Composition() {
  const mainFeatures = {
    prostate: [
      "prostata bezining funksional holatini saqlashga yordam beradi.",
      " erkaklar siydik-tanosil tizimi funksiyalari qo‘llab-quvvatlaydi.",
      "erkak jinsiy maylini saqlab qolishga yordam beradi",
    ],
    energy: [
      "Tabiiy gormonal muvozanatni tiklaydi",
      "qulaylik va ishonchni saqlashga yordam beradi",
      "kurs amaliyoti uchun mos",
    ],
  };

  const ingredients = [
    { name: "libidoni", desc: "libidoni qo‘llab-quvvatlash" },
    {
      name: "prostata bezining",
      desc: "normal funksional holatini saqlab turish",
    },
    { name: "erkaklar faolligi", desc: "va qiziqishini saqlab qolish" },
    {
      name: "siydik-tanosil",
      desc: "tanosil tizimining ichki muvozanatini qo‘llab-quvvatlashga;",
    },
  ];

  return (
    <section className="w-full py-4 bg-white overflow-hidden relative">
      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* Sarlavha - Oq fonga moslangan */}
        <div className="text-center mb-16">
          <h2 className="text-[#1A2B3C] text-3xl md:text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            Yuqori <span className="text-[#E31E24]">Effektli</span> Formula
          </h2>
          <p className="text-slate-400 font-black mt-4 uppercase text-[10px] md:text-xs tracking-[4px] max-w-3xl mx-auto leading-relaxed">
            Uropro - erkaklar siydik-tanosil tizimini har tomonlama
            qo‘llab-quvvatlash uchun ishlab chiqilgan biologik faol
            qo‘shimchadir. Formulaning faol tarkibiy qismlari prostata bezining
            funksional holatini saqlashga yordam beradi.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* 1-Karta: Prostata himoyasi */}
          <div className="w-full lg:w-[380px] bg-slate-50 rounded-[45px] p-8 md:p-10 border border-slate-100 transition-all hover:shadow-xl hover:bg-white group">
            <div className="mb-8">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#E31E24] transition-colors duration-500">
                <Shield
                  className="text-[#E31E24] group-hover:text-white transition-colors"
                  size={32}
                />
              </div>
              <h3 className="text-[#1A2B3C] text-2xl font-[1000] uppercase italic">
                Asosiy
              </h3>
              <p className="text-[10px] text-[#E31E24] font-black uppercase tracking-widest mt-1">
                afzalliklari
              </p>
              <div className="h-1 w-12 bg-[#E31E24] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.prostate.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  </div>
                  <p className="text-slate-600 text-[13px] font-bold leading-snug uppercase tracking-tight italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* MARKAZIY QISM: Anatomik vizualizatsiya */}
          <div className="flex flex-col items-center gap-10 w-full lg:w-auto">
            <div className="w-56 h-56 md:w-72 md:h-72 relative group">
              {/* Orqa fondagi yumshoq effekt */}
              <div className="absolute inset-0 bg-red-500/5 rounded-full blur-[60px] animate-pulse" />

              <div className="relative w-full h-full bg-white rounded-full shadow-2xl flex items-center justify-center p-4 border-[8px] border-slate-50 overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src="/effect.png"
                    alt="Anatomy visualization"
                    fill
                    className="object-contain p-6 group-hover:scale-110 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Pastki Grid - Kichik kartalar */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[400px]">
              {ingredients.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center hover:bg-white hover:shadow-md transition-all"
                >
                  <h4 className="text-[#E31E24] font-black text-[10px] uppercase mb-1">
                    {m.name}
                  </h4>
                  <p className="text-[8px] text-slate-400 font-bold uppercase leading-tight">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 2-Karta: Quvvat va balans */}
          <div className="w-full lg:w-[380px] bg-slate-50 rounded-[45px] p-8 md:p-10 border border-slate-100 transition-all hover:shadow-xl hover:bg-white group">
            <div className="mb-8">
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#E31E24] transition-colors duration-500">
                <Activity
                  className="text-[#E31E24] group-hover:text-white transition-colors"
                  size={32}
                />
              </div>
              <h3 className="text-[#1A2B3C] text-2xl font-[1000] uppercase italic">
                QUVVAT
              </h3>
              <p className="text-[10px] text-[#E31E24] font-black uppercase tracking-widest mt-1">
                Balans va Regeneratsiya
              </p>
              <div className="h-1 w-12 bg-[#E31E24] mt-2 rounded-full" />
            </div>
            <ul className="space-y-6">
              {mainFeatures.energy.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#E31E24]" />
                  </div>
                  <p className="text-slate-600 text-[13px] font-bold leading-snug uppercase tracking-tight italic">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Dekorativ nur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[900px] h-[400px] bg-red-500/5 blur-[120px] rounded-full -z-0 pointer-events-none" />
    </section>
  );
}
