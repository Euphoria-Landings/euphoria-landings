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
    { name: "Xususiyatlari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Natijalar", href: "#articles" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled ? "py-2 mt-0" : "py-4 md:py-6 mt-10"
        }`} // mt-10 TopNav (40px) uchun joy qoldiradi
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav className="relative flex justify-between items-center px-4 md:px-8 py-3 bg-white/95 backdrop-blur-md rounded-3xl border border-gray-100 shadow-xl z-[110]">
            {/* 1. LOGO: VISU (Qora) + CAPS (Binafsha) */}
            <Link href="/" className="shrink-0 relative z-[130] group">
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase inline-block">
                <span className="text-[#1A1A1A]">VISU</span>
                <span className="text-[#4B2C82] inline-flex items-center">
                  C
                  <span className="relative inline-block text-[#4B2C82]">
                    A{/* A harfi ustida diagonal chiziq */}
                  </span>
                  PS
                </span>
              </span>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-x-1 mr-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/70 hover:text-[#4B2C82] transition-all duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 3. ACTIONS */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block bg-[#4B2C82] text-white px-7 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1A1A1A] transition-all shadow-lg shadow-purple-900/20 active:scale-95"
              >
                BUYURTMA BERISH
              </button>

              {/* MOBILE BURGER */}
              <button
                onClick={toggleMenu}
                className="lg:hidden w-11 h-11 flex flex-col justify-center items-center bg-gray-50 rounded-2xl border border-gray-100"
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
          </nav>

          {/* MOBILE DRAWER */}
          <div
            className={`fixed inset-0 bg-[#0F0F0F]/60 backdrop-blur-md z-[120] lg:hidden transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            onClick={closeMenu}
          >
            <div
              className={`absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white flex flex-col p-10 pt-28 gap-6 transition-transform duration-500 ease-extra-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-[#1A1A1A] text-2xl font-black uppercase tracking-tighter hover:text-[#4B2C82] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-auto pb-10">
                <button
                  onClick={() => {
                    closeMenu();
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-[#4B2C82] text-white py-5 rounded-2xl font-black text-[11px] uppercase tracking-[3px] shadow-xl"
                >
                  HOZIR SOTIB OLISH
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
