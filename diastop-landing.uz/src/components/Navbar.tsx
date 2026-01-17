"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import OrderModal from "./OrderModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Maqolalar", href: "#articles" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 mt-5 ${
          scrolled ? "py-2 mt-0" : "py-4 md:py-6 mt-2 md:mt-4"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav className="relative flex justify-between items-center px-4 md:px-8 py-3 bg-white/95 backdrop-blur-md rounded-full border border-gray-100 shadow-lg z-[110]">
            {/* 1. LOGO: DIA (Qora) + STOP (Qizil) */}
            <Link href="/" className="shrink-0 relative z-[130] group">
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase transition-transform group-active:scale-95 inline-block">
                {/* DIA qismi qora */}
                <span className="text-[#1A1A1A]">DIA</span>

                {/* STOP qismi qizil */}
                <span className="text-[#CC1D24] inline-flex items-center">
                  ST
                  <span className="relative inline-block text-[#CC1D24]">
                    O{/* Matematik bo'sh to'plam chizig'i */}
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[3px] bg-[#CC1D24] rotate-[-45deg] rounded-full"></span>
                  </span>
                  P
                </span>
              </span>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-x-1 mr-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-[11px] font-black uppercase tracking-wider text-[#1A1A1A] hover:text-[#CC1D24] transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 3. MOBILE ACTION & BURGER */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleMenu}
                className="w-10 h-10 flex flex-col justify-center items-center bg-gray-50 rounded-full border border-gray-100"
              >
                <div className="relative w-5 h-4">
                  <span
                    className={`absolute w-5 h-0.5 bg-[#1A1A1A] transition-all ${
                      isOpen ? "rotate-45 top-2" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute w-5 h-0.5 bg-[#1A1A1A] transition-all top-2 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute w-5 h-0.5 bg-[#1A1A1A] transition-all ${
                      isOpen ? "-rotate-45 top-2" : "top-4"
                    }`}
                  />
                </div>
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:block bg-[#CC1D24] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] transition-all shadow-xl shadow-red-600/20 active:scale-95"
            >
              BUYURTMA BERISH
            </button>
          </nav>

          {/* MOBILE DRAWER */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[120] lg:hidden transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            onClick={closeMenu}
          >
            <div
              className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl flex flex-col p-8 pt-24 gap-4 transition-transform duration-300 ease-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-[#1A1A1A] text-xl font-black uppercase tracking-tighter border-b border-gray-50 pb-3"
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  closeMenu();
                  setIsModalOpen(true);
                }}
                className="mt-4 bg-[#CC1D24] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[2px] shadow-lg active:scale-[0.98] transition-all"
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
