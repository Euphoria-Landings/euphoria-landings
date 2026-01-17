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
    { name: "Savollar", href: "#faq" },
  ];

  return (
    <footer className="w-full bg-white pt-10 pb-4 border-t border-gray-100">

      <div className="max-w-[1100px] mx-auto px-4">
        {/* FOOTER NAVIGATSIYASI */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* BREND VA ACTION BUTTONS */}
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="group cursor-default">
              <h2 className="text-[36px] md:text-[45px] font-[1000] italic tracking-tighter leading-none uppercase">
                <span className="text-[#1A1A1A]">ARTRO</span>
                <span className="text-[#CC1D24]">WELL</span>
              </h2>
              <p className="text-gray-400 text-[9px] font-black uppercase tracking-[5px] mt-2">
                Harakat — bu hayot
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1D24] text-white px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-red-600/20 hover:bg-[#1A1A1A] transition-all duration-500 active:scale-95"
              >
                Hozir buyurtma berish
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#1A1A1A] text-[#1A1A1A] px-10 py-5 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 active:scale-95"
              >
                Bepul konsultatsiya
              </button>
            </div>
          </div>

          {/* QUICK LINKS GRID */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-6 text-center md:text-left">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-[#1A1A1A] text-[11px] font-black uppercase tracking-[1.5px] hover:text-[#CC1D24] transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#CC1D24] hover:after:w-full after:transition-all"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>

   
      </div>

      {/* MODAL KOMPONENTI */}
      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* YAKUNLOVCHI ESTETIK CHIZIQ */}
      <div
        className="w-full h-[6px] bg-gradient-to-r from-[#CC1D24] via-[#1A1A1A] to-[#CC1D24] mt-12 opacity-5"
        aria-hidden="true"
      />
    </footer>
  );
}
