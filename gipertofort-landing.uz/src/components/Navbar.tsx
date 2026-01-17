"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import OrderModal from "./OrderModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Maqolalar", href: "#articles" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2 mt-0" : "py-4 md:py-6 mt-4 md:mt-6"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav className="relative flex justify-between items-center px-4 md:px-8 py-3 bg-white rounded-full border border-gray-100 shadow-sm z-[110]">
            {/* 1. LOGO (Chapda qoladi) */}
            <Link href="/" className="shrink-0 relative z-[130]">
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase">
                <span className="text-[#CC1D24]">ГИПЕР</span>
                <span className="text-[#1A1A1A]">ТОФОРТ</span>
              </span>
            </Link>

            {/* 2. DESKTOP MENU (O'ng tomonga surilgan) */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-x-1 mr-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-[11px] font-[1000] uppercase tracking-wider text-[#1A1A1A] hover:text-[#CC1D24] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}

              {/* Menyu ichidagi Sotib olish tugmasi */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="ml-2 px-4 py-2 bg-gray-50 hover:bg-[#CC1D24] text-[#CC1D24] hover:text-white border border-[#CC1D24]/10 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300"
              >
                SOTIB OLISH
              </button>
            </div>

            {/* 3. ACTION BUTTON & BURGER (Eng chekka o'ngda) */}
            <div className="flex items-center gap-2 relative z-[130]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block bg-[#CC1D24] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] transition-all duration-300 shadow-lg shadow-red-600/10"
              >
                BUYURTMA BERISH
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center bg-gray-50 rounded-full border border-gray-100 outline-none"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-[2px]" : "mb-1"
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "mb-1"
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[2px]" : ""
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* MOBILE DRAWER (O'zgarishsiz qoldi) */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[120] lg:hidden transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`absolute top-0 right-0 h-full w-[80%] bg-white shadow-2xl flex flex-col p-8 pt-32 gap-6 transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1A1A1A] text-xl font-black uppercase tracking-tighter border-b border-gray-50 pb-2 hover:text-[#CC1D24] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsModalOpen(true);
                }}
                className="mt-4 bg-[#CC1D24] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
              >
                BUYURTMA BERISH
              </button>
            </div>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
