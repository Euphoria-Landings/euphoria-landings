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
    { name: "Tavsiyalar", href: "#articles" },
    { name: "Buyurtma", href: "#order" },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-4 border-t border-gray-50">
  

      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* BREND VA TUGMALAR - DIASTØP Logo */}
          <div className="flex flex-col items-center md:items-start gap-5">
            <h2 className="text-[30px] md:text-[38px] font-[1000] italic tracking-tighter leading-none uppercase flex items-center">
              <span className="text-[#1A1A1A]">DIA</span>
              <span className="text-[#CC1D24]">ST</span>
              <span className="relative inline-block text-[#CC1D24]">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[2.5px] bg-[#970b0b] rotate-[-45deg] rounded-full"></span>
              </span>
              <span className="text-[#CC1D24]">P</span>
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1D24] text-white px-7 py-3.5 rounded-2xl text-[9px] font-black uppercase tracking-widest shadow-lg shadow-red-600/10 hover:bg-[#1A1A1A] transition-all duration-300 active:scale-95"
              >
                Sotib olish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-2xl text-[9px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 active:scale-95"
              >
                Konsultatsiya
              </button>
            </div>
          </div>

          {/* Menyu linklari - Ixcham */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[9px] font-black uppercase tracking-[1px] hover:text-[#CC1D24] transition-colors opacity-70 hover:opacity-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

    
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV CHIZIQ */}
      <div className="w-full h-[3px] bg-gradient-to-r from-[#CC1D24]/20 via-transparent to-[#CC1D24]/20 mt-8" />
    </section>
  );
}
