"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import OrderModal from "./OrderModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Qanday olish kerak", href: "#usage" },
    { name: "Gimnastika", href: "#gym" },
    { name: "Maqolalar", href: "#articles" },
    { name: "Sinov", href: "#test" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "top-0 py-2" : "top-[10px] md:top-[34px] py-4"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav
            className={`
              relative bg-white/95 backdrop-blur-md flex justify-between items-center px-5 md:px-6 py-2.5
              transition-all duration-500 rounded-full border border-gray-100
              ${
                scrolled
                  ? "shadow-xl shadow-red-900/10"
                  : "shadow-md shadow-gray-200/50"
              }
            `}
          >
            {/* 1. LOGO (Hamma joyda ko'rinadi) */}
            <div className="flex items-center gap-4">
              <Link href="/" className="group flex flex-col shrink-0">
                <span className="text-lg md:text-2xl font-black italic tracking-tighter">
                  <span className="text-[#1A1A1A]">СУСТА</span>
                  <span className="text-red-600">ФЛЕКС</span>
                </span>
              </Link>

              {/* 2. DESKTOP MENU (Faqat Laptop/Katta ekranlarda ko'rinadi: lg:flex) */}
              <div className="hidden lg:flex items-center gap-x-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onMouseEnter={() => setActiveItem(item.name)}
                    onMouseLeave={() => setActiveItem("")}
                    className={`
                      relative px-4 py-2 text-[11px] xl:text-[12px] font-black uppercase 
                      transition-all duration-300 rounded-full
                      ${
                        activeItem === item.name
                          ? "text-white"
                          : "text-[#1A1A1A] hover:text-red-600"
                      }
                    `}
                  >
                    {activeItem === item.name && (
                      <span className="absolute inset-0 bg-red-600 rounded-full -z-10 animate-in fade-in zoom-in duration-300"></span>
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 3. RIGHT SECTION: Button va Burger */}
            <div className="flex items-center gap-3">
              {/* DESKTOP BUTTON (Faqat lg ekranda ko'rinadi) */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden lg:block bg-red-600 text-white px-7 py-3 rounded-full text-[11px] font-black uppercase tracking-widest shadow-lg hover:bg-black transition-all active:scale-95"
              >
                SOTIB OLISH
              </button>

              {/* MOBILE BURGER (Mobil va Tabletda ko'rinadi, lg ekranda yashirinadi) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-[100] w-10 h-10 flex flex-col justify-center items-center bg-gray-50 rounded-full"
              >
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] mb-1 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] mb-1 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-5 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </button>
            </div>
          </nav>

          {/* MOBILE MENU (Faqat lg dan kichik ekranlarda ishlaydi) */}
          <div
            className={`
              fixed inset-0 bg-[#1A1A1A] z-[90] lg:hidden
              flex flex-col items-center justify-center gap-6
              transition-all duration-500 ease-in-out
              ${isOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-xl font-black uppercase tracking-widest hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-6 bg-red-600 text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest"
            >
              Hoziroq sotib olish
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
