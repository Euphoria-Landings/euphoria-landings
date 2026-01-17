"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Leaf, Menu, X } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

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
    { name: "Tarkibi", href: "#composition" },
    { name: "Xususiyatlari", href: "#features" },
    { name: "Foydalanish", href: "#usage" },
    { name: "Natijalar", href: "#results" },
  ];

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "top-0 py-2" : "top-4 md:top-6 py-2"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <nav
            className={`
              relative bg-white/90 backdrop-blur-xl flex mt-3 justify-between items-center px-5 md:px-8 py-3
              transition-all duration-500 rounded-[30px] border border-green-50 shadow-[0_10px_30px_rgba(0,77,64,0.08)]
            `}
          >
            {/* 1. LOGO: ParazitOFF */}
            <Link href="/" className="group flex items-center shrink-0">
              <div className="flex items-center leading-none select-none">
                <span className="text-2xl md:text-3xl font-[1000] tracking-tighter text-[#004D40]">
                  Parazit
                </span>
                <span className="text-2xl md:text-3xl font-[1000] tracking-tighter text-[#8BC34A] italic ml-0.5">
                  OFF
                </span>
             
              </div>
            </Link>

            {/* 2. DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[11px] font-black uppercase tracking-[2px] text-[#004D40]/60 hover:text-[#004D40] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* 3. RIGHT SECTION */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#004D40] text-white px-5 md:px-7 py-2.5 rounded-2xl text-[10px] md:text-[11px] font-black uppercase tracking-widest shadow-lg shadow-green-900/20 hover:bg-green-700 transition-all active:scale-95 whitespace-nowrap"
              >
                BUYURTMA
              </button>

              {/* BURGER */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 flex items-center justify-center bg-green-50 rounded-2xl text-[#004D40]"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>

          {/* MOBILE MENU */}
          <div
            className={`fixed inset-0 bg-[#004D40] z-[90] md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl font-black uppercase tracking-[4px] hover:text-[#8BC34A]"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                setIsModalOpen(true);
              }}
              className="mt-6 bg-[#8BC34A] text-[#004D40] px-12 py-5 rounded-[20px] font-black text-sm uppercase tracking-widest shadow-2xl"
            >
              BEPUL KONSULTATSIYA
            </button>
          </div>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
