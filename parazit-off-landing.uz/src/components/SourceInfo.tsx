"use client";
import { useState } from "react";
import { Leaf } from "lucide-react";
import OrderModal from "./OrderModal";

export default function SourceInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuItems = [
    { name: "Xususiyatlar", href: "#features" },
    { name: "Tarkib", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Natijalar", href: "#results" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Sotib olish", href: "#order" },
  ];

  return (
    <section className="w-full bg-white  pb-1">
      <div className="max-w-[1100px] mx-auto px-4">
        {/* FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-t border-green-50 pt-16">
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* ParazitOFF LOGO */}
            <div className="flex items-center text-[36px] md:text-[42px] font-black tracking-tighter leading-none select-none uppercase">
              <span className="text-[#004D40]">Parazit</span>
              <span className="text-[#8BC34A] italic ml-1">OFF</span>
     
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#004D40] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-green-900/20 hover:bg-[#8BC34A] hover:text-[#004D40] transition-all active:scale-95"
              >
                BUYURTMA BERISH
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#004D40] text-[#004D40] px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#004D40] hover:text-white transition-all active:scale-95"
              >
                BEPUL KONSULTATSIYA
              </button>
            </div>
          </div>

          {/* Menyu linklari */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-center lg:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#004D40] text-[11px] font-black uppercase tracking-wider hover:text-[#8BC34A] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* DEKORATIV PASTKI CHIZIQ */}
      <div className="w-full h-[4px] bg-gradient-to-r from-[#004D40] via-[#8BC34A] to-[#004D40] mt-16 opacity-10" />
    </section>
  );
}
