"use client";
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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const menuItems = [
    { name: "Afzalliklari", href: "#features" },
    { name: "Tarkibi", href: "#composition" },
    { name: "Qo'llash", href: "#usage" },
    { name: "Blog", href: "#articles" },
  ];

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 z-[100] transition-all duration-500 mt-5 ${
          scrolled ? "top-0 py-2" : "top-2 md:top-6 py-2"
        }`}
      >
        <div className="max-w-[1100px] mx-auto px-4">
          <nav
            className={`
              bg-white/90 backdrop-blur-xl flex justify-between items-center px-4 md:px-8 py-3
              rounded-full border border-slate-200 transition-all duration-300
              ${
                scrolled ? "shadow-[0_15px_30px_rgba(0,0,0,0.08)]" : "shadow-md"
              }
            `}
          >
            {/* LOGO - Oq fonga moslangan */}
            <a
              href="#"
              onClick={(e) => handleScrollTo(e, "body")}
              className="shrink-0 group"
            >
              <span className="text-xl md:text-2xl font-[1000] tracking-tighter uppercase leading-none">
                <span className="text-[#1A2B3C]">URO</span>
                <span className="text-[#E31E24] italic">PRO</span>
              </span>
            </a>

            {/* DESKTOP MENU - Matn ranglari o'zgartirildi */}
            <div className="hidden lg:flex items-center gap-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-slate-500 hover:text-[#E31E24] transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* ACTION BUTTON & BURGER */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="hidden md:block bg-[#E31E24] text-white px-7 py-3 rounded-full text-[11px] font-[1000] uppercase tracking-widest hover:bg-[#1A2B3C] transition-all active:scale-95 shadow-lg shadow-red-600/10"
              >
                BUYURTMA
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden relative z-[110] w-11 h-11 flex flex-col justify-center items-center bg-slate-100 rounded-full border border-slate-200"
              >
                <span
                  className={`w-5 h-0.5 bg-[#1A2B3C] transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : "mb-1.5"
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-[#1A2B3C] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "mb-1.5"
                  }`}
                />
                <span
                  className={`w-5 h-0.5 bg-[#1A2B3C] transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                />
              </button>
            </div>
          </nav>
        </div>

        {/* MOBILE MENU OVERLAY - Oq rangli */}
        <div
          className={`
            fixed inset-0 bg-white z-[105] lg:hidden
            flex flex-col items-center justify-center gap-8
            transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-full pointer-events-none"
            }
          `}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
            <span className="text-[100px] font-black italic text-[#1A2B3C]">
              UROPRO
            </span>
          </div>

          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-[#1A2B3C] text-3xl font-[1000] uppercase tracking-tighter hover:text-[#E31E24] transition-colors"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => {
              setIsOpen(false);
              setIsModalOpen(true);
            }}
            className="mt-8 bg-[#E31E24] text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[3px] shadow-2xl shadow-red-600/20 active:scale-95 transition-all"
          >
            BUYURTMA BERISH
          </button>
        </div>
      </header>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
