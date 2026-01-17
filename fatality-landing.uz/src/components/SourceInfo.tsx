"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Activity } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Afzalliklar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash usuli", href: "#usage" },
    { name: "Natijalar", href: "#results" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Sotib olish", href: "#order" },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-6">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-pink-50 pt-20">
          <div className="flex flex-col items-center lg:items-start gap-8">
            {/* FATALITY LOGO */}
            <div className="flex items-center select-none uppercase italic">
              <span className="text-[36px] md:text-[45px] font-[1000] italic tracking-tighter text-[#000000] leading-none">
                FATA
              </span>
        
              <span className="text-[36px] md:text-[45px] font-[1000] italic tracking-tighter text-[#E91E63] leading-none">
                LITY
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#000000] text-white px-10 py-4.5 h-[56px] rounded-full text-[9px] font-[1000] uppercase tracking-[3px] shadow-2xl shadow-pink-900/20 hover:bg-[#E91E63] transition-all active:scale-95 min-w-[240px]"
              >
                HOZIROQ BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#000000] text-[#000000] px-10 py-4.5 h-[56px] rounded-full text-[9px] font-[1000] uppercase tracking-[3px] hover:bg-[#000000] hover:text-white transition-all active:scale-95 min-w-[240px]"
              >
                KONSULTATSIYA OLISH
              </button>
            </div>
          </div>

          {/* Menyu linklari */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-center lg:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#000000] text-[11px] font-[1000] uppercase tracking-[2px] hover:text-[#E91E63] transition-colors italic"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

   
      </div>

      {/* MODAL */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV PASTKI CHIZIQ */}
      <div className="w-full h-[6px] bg-gradient-to-r from-black via-[#E91E63] to-black mt-20 opacity-20" />
    </section>
  );
}
