"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Gimnastika", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Test", href: "#test" },
  ];

  return (
    <section className="w-full bg-white pt-5 pb-2 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* BREND VA TUGMALAR */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-[32px] md:text-[40px] font-[1000] italic tracking-tighter leading-none uppercase">
              <span className="text-[#1A1A1A]">ГИПЕР</span>
              <span className="text-[#CC1D24]">ТОФОРТ</span>
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1D24] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-red-600/10 hover:bg-[#1A1A1A] transition-all duration-300 active:scale-95"
              >
                Sotib olish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 active:scale-95"
              >
                Mutaxassis maslahati
              </button>
            </div>
          </div>

          {/* Menyu linklari - Ixchamroq font */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-5 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[10px] font-black uppercase tracking-[1px] hover:text-[#CC1D24] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV YAKUNLOVCHI CHIZIQ */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#CC1D24] via-transparent to-[#CC1D24] mt-12 opacity-10" />
    </section>
  );
}
