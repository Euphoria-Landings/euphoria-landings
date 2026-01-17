"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Mashqlar", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Buyurtma", href: "#order" },
  ];

  return (
    <section className="w-full bg-white pt-8 pb-4 border-t border-gray-50">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* BREND VA TUGMALAR - VISUCAPS Clean Style */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-[28px] md:text-[34px] font-[1000] italic tracking-tighter leading-none uppercase">
              <span className="text-[#1A1A1A]">VISU</span>
              <span className="text-[#4B2C82]">CAPS</span>
            </h2>

            <div className="flex flex-wrap justify-center md:justify-start gap-2.5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4B2C82] text-white px-6 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest shadow-lg shadow-purple-900/10 hover:bg-[#1A1A1A] transition-all duration-300 active:scale-95"
              >
                Sotib olish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-6 py-3 rounded-xl text-[8px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 active:scale-95"
              >
                Konsultatsiya
              </button>
            </div>
          </div>

          {/* Menyu linklari - O'ta ixcham */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[8px] font-[900] uppercase tracking-[1px] hover:text-[#4B2C82] transition-colors opacity-60 hover:opacity-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV CHIZIQ */}
      <div className="w-full h-[2px] bg-gradient-to-r from-[#4B2C82]/10 via-transparent to-[#4B2C82]/10 mt-6" />
    </section>
  );
}
