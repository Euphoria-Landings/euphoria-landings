"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Faollik", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Sotib olish", href: "#purchase" },
  ];

  return (
    <section className="w-full bg-white pt-4 pb-4 border-t border-slate-100 relative overflow-hidden">
      {/* Orqa fondagi mayin bezak nur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-32 bg-slate-50 blur-[80px] -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        {/* FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* BREND VA TUGMALAR */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <h2 className="text-[42px] font-[1000] italic tracking-tighter leading-none uppercase">
              <span className="text-[#1A2B3C]">URO</span>
              <span className="text-[#E31E24]">PRO</span>
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#E31E24] text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[2px] shadow-[0_10px_30px_rgba(227,30,36,0.15)] hover:bg-[#1A2B3C] transition-all active:scale-95"
              >
                Hoziroq sotib olish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-slate-200 text-[#1A2B3C] px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[2px] hover:bg-slate-50 transition-all active:scale-95"
              >
                Maslahat olish
              </button>
            </div>
          </div>

          {/* Menyu linklari - Oq fonga moslangan */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-slate-400 text-[12px] font-black uppercase tracking-[2px] hover:text-[#E31E24] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

   
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV PASTKI CHIZIQ - Oq fonga mos gradient */}
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#E31E24]/20 to-transparent mt-12" />
    </section>
  );
}
