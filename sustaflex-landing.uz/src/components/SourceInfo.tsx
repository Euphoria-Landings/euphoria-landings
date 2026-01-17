"use client";
import { useState } from "react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);



  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#usage" },
    { name: "Qanday qabul qilish", href: "#usage" },
    { name: "Gimnastika", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Test", href: "#test" },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-16">
    

      <div className="max-w-[1100px] mx-auto px-4">
    

        {/* FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-6">
            <h2 className="text-[36px] font-black italic tracking-tighter leading-none">
              <span className="text-[#1A1A1A]">Суста</span>
              <span className="text-red-600">Флекс</span>
            </h2>
            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-7 py-3.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-xl shadow-red-500/20 hover:bg-[#1A1A1A] transition-all active:scale-95"
              >
                Hoziroq sotib olish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-7 py-3.5 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-[#1A1A1A] hover:text-white transition-all active:scale-95"
              >
                Maslahat olish
              </button>
            </div>
          </div>

          {/* Menyu linklari */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-4 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[12px] font-bold uppercase tracking-tight hover:text-red-600 transition-colors"
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
      <div className="w-full h-[6px] bg-gradient-to-r from-red-600 via-transparent to-red-600 mt-12 opacity-20" />
    </section>
  );
}
