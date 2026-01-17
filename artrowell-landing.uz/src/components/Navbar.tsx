"use client";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import OrderModal from "./OrderModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scrollni optimallashtirish (Throttling o'rniga passive listener)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Body scrollni bloklash (Layout shift bo'lmasligi uchun padding-right qo'shish tavsiya etiladi)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Mobile-da scrollni to'liq bloklash
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-[padding,margin] ${
          scrolled ? "py-2 mt-0" : "py-4 md:py-6 mt-2 md:mt-4"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav className="relative flex justify-between items-center px-4 md:px-8 py-3 bg-white/95 backdrop-blur-md rounded-full border border-gray-100 shadow-lg z-[110]">
            {/* LOGO */}
            <Link
              href="/"
              className="shrink-0 relative z-[130] outline-none group"
            >
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase inline-block">
                <span className="text-[#CC1D24]">ARTRO</span>
                <span className="text-[#1A1A1A]">WELL</span>
              </span>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden lg:flex flex-1 justify-end items-center gap-x-1 mr-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-[11px] font-black uppercase tracking-wider text-[#1A1A1A] hover:text-[#CC1D24] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* MOBILE ACTION & BURGER */}
            <div className="flex items-center gap-2 relative z-[130]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block bg-[#CC1D24] text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform"
              >
                BUYURTMA BERISH
              </button>

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center bg-gray-50 rounded-full border border-gray-100 outline-none"
                aria-label="Menu"
              >
                <div className="relative w-5 h-4">
                  <span
                    className={`absolute w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                      isOpen ? "rotate-45 top-2" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 top-2 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                      isOpen ? "-rotate-45 top-2" : "top-4"
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>

          {/* MOBILE DRAWER - GPU OPTIMIZED */}
          <div
            className={`fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[120] lg:hidden transition-opacity duration-300 ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
            onClick={closeMenu}
          >
            <div
              className={`absolute top-0 right-0 h-full w-[80%] max-w-[320px] bg-white shadow-2xl flex flex-col p-8 pt-24 gap-4 will-change-transform transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
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
                className="mt-4 bg-[#CC1D24] text-white py-4 rounded-xl font-black text-xs uppercase tracking-[2px] active:scale-[0.96] transition-transform"
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
