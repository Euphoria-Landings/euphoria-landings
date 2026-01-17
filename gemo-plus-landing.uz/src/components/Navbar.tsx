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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Xususiyatlari", href: "#features" },
    { name: "Qo'llanilishi", href: "#usage" },
    { name: "Tarkibi", href: "#ingredients" },
    { name: "Savollar", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "top-0 py-2" : "top-[10px] md:top-[44px] py-4"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav
            className={`
              relative bg-white/95 backdrop-blur-md flex justify-between items-center px-5 md:px-8 py-3
              rounded-full border border-gray-100 transition-shadow duration-300
              ${scrolled ? "shadow-xl shadow-gray-900/5" : "shadow-md"}
            `}
          >
            {/* 1. LOGOTIP */}
            <Link href="/" className="flex items-center shrink-0">
              <span className="text-xl md:text-2xl font-[1000] italic tracking-tighter uppercase">
                <span className="text-[#1A1A1A]">GEMO</span>
                <span className="text-[#C5A358]">PLUS</span>
              </span>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden lg:flex items-center gap-x-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-[#1A1A1A] hover:text-[#C5A358] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 3. O'NG TOMON: Tugma va Burger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block bg-[#1A1A1A] text-white px-7 py-3 rounded-full text-[10px] font-black uppercase tracking-[2px] hover:bg-[#C5A358] transition-all active:scale-95"
              >
                BUYURTMA BERISH
              </button>

              {/* MOBILE BURGER */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center bg-gray-50 rounded-full"
                aria-label="Menu"
              >
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] mb-1 transition-all ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] mb-1 transition-all ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] transition-all ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
            </div>
          </nav>

          {/* MOBILE MENU overlay */}
          <div
            className={`
              fixed inset-0 bg-[#1A1A1A] z-[90] lg:hidden
              flex flex-col items-center justify-center gap-8
              transition-transform duration-500 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-black uppercase tracking-[4px] hover:text-[#C5A358]"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-4 bg-[#C5A358] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest"
            >
              Hoziroq sotib olish
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-10 text-white/50 uppercase text-[10px] tracking-widest font-bold"
            >
              Yopish ✕
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
