"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gemo Plus bo'limlariga moslashtirilgan linklar
  const menuItems = [
    { name: "Xususiyatlari", href: "#features" },
    { name: "Tarkibi", href: "#ingredients" },
    { name: "Qo'llanilishi", href: "#usage" },
    { name: "Holatlar", href: "#scenarios" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Savol-javob", href: "#faq" },
  ];

  return (
    <section className="w-full bg-[#F9F9F9] pt-4 pb-12 border-t border-gray-100">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* ASOSIY QISM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          {/* LOGO VA TUGMALAR */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <h2 className="text-[40px] md:text-[48px] font-[1000] italic tracking-tighter leading-none uppercase">
              <span className="text-[#1A1A1A]">GEMO</span>
              <span className="text-[#C5A358]"> PLUS</span>
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#1A1A1A] text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[2px] shadow-2xl hover:bg-[#C5A358] transition-all active:scale-95"
              >
                BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[2px] hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
              >
                MUTAXASSIS BILAN BOG'LANISH
              </button>
            </div>
          </div>

          {/* NAVIGATSIYA LINKLARI */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[12px] font-[900] uppercase tracking-widest hover:text-[#C5A358] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

   
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV CHIZIQ */}
      <div className="w-full h-[4px] bg-gradient-to-r from-transparent via-[#C5A358]/30 to-transparent mt-12" />
    </section>
  );
}
