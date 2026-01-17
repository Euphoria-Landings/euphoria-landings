"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Activity } from "lucide-react"; // Puls/Harakat belgisi

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Natijalar", href: "#results" },
    { name: "Sharhlar", href: "#reviews" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "top-0 py-1" : "top-2 md:top-4 py-8 md:py-10"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav
            className={`
              relative bg-white/95 backdrop-blur-md flex justify-between items-center px-4 md:px-6 py-2
              transition-all duration-500 rounded-full border border-pink-50 shadow-[0_10px_40px_rgba(233,30,99,0.1)]
            `}
          >
            {/* 1. LOGO: FATALITY */}
            <div className="flex items-center gap-4">
              <Link href="/" className="group flex items-center shrink-0">
                <div className="flex items-center h-full leading-none select-none uppercase">
                  <span className="text-2xl md:text-[32px] font-[1000] italic tracking-tighter text-[#000000] leading-none">
                    FATA
                  </span>

                 

                  <span className="text-2xl md:text-[32px] font-[1000] italic tracking-tighter text-[#E91E63] leading-none">
                    LITY
                  </span>
                </div>
              </Link>
            </div>

            {/* 2. DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[10px] font-black uppercase tracking-[2px] text-[#000000]/60 hover:text-[#E91E63] transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* 3. RIGHT SECTION: Tugma va Burger */}
            <div className="flex items-center gap-2 md:gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex bg-[#000000] text-white px-5 md:px-7 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[3px] shadow-lg shadow-pink-900/10 hover:bg-[#E91E63] transition-all active:scale-95 whitespace-nowrap"
              >
                SOTIB OLISH
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex flex-col justify-center items-center bg-slate-50 rounded-full"
              >
                <span
                  className={`w-4 h-0.5 bg-[#000000] mb-1 transition-all ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-[#000000] mb-1 transition-all ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-4 h-0.5 bg-[#000000] transition-all ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div
            className={`fixed inset-0 bg-[#000000] z-[90] md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-black uppercase tracking-[4px] italic hover:text-[#E91E63]"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-4 bg-[#E91E63] text-white px-10 py-4 rounded-full font-black text-[11px] uppercase tracking-[3px] shadow-2xl animate-bounce"
            >
              Hoziroq xarid qilish
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
