"use client";
import { Leaf } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#002D25] py-12 text-white/70 border-t-2 border-[#8BC34A]/10">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: ParazitOFF - Tabiiy simmetriya */}
          <div className="flex flex-col items-start gap-4 group cursor-pointer">
            <div className="flex items-center text-[36px] font-[1000] tracking-tighter select-none leading-none uppercase">
              <span className="text-white">Parazit</span>
              <span className="text-[#8BC34A] italic ml-1">OFF</span>
              <div className="flex items-center justify-center ml-2">
                <Leaf
                  strokeWidth={2.5}
                  className="w-9 h-9 md:w-[40px] md:h-[40px] text-[#8BC34A] transform rotate-[15deg] group-hover:rotate-[25deg] transition-transform duration-500"
                  fill="currentColor"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-black tracking-[4px] text-[#8BC34A] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                Tabiiy tozalanish kuchi
              </span>
            </div>
          </div>

          {/* 2. ALOQA MA'LUMOTLARI */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
            <div className="space-y-3 p-6 bg-white/5 rounded-[30px] border border-white/10 backdrop-blur-sm hover:border-[#8BC34A]/30 transition-all duration-500">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-medium">
                  <span className="text-white/50 font-black uppercase tracking-widest mr-3">
                    Ishonch telefoni:
                  </span>{" "}
                  <a
                    href="tel:+998555170147"
                    className="text-[#8BC34A] hover:text-white transition-all font-[1000] text-[12px]"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
              </div>
          
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-5 text-[11px] md:text-[12px] font-black uppercase tracking-[2px]">
            <a
              href="#"
              className="text-white/40 hover:text-[#8BC34A] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#8BC34A] shadow-[0_0_10px_#8BC34A] opacity-50 group-hover:opacity-100" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#8BC34A] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#8BC34A] shadow-[0_0_10px_#8BC34A] opacity-50 group-hover:opacity-100" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#8BC34A] transition-all hover:translate-x-2 flex items-center gap-3 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#8BC34A] shadow-[0_0_10px_#8BC34A] opacity-50 group-hover:opacity-100" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] md:text-[10px] uppercase tracking-[4px] text-white/20 font-black">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} PARAZITOFF DROPS UZBEKISTAN. BARCHA
            HUQUQLAR HIMOYALANGAN.
          </p>
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-3 hover:text-[#8BC34A] transition-colors cursor-default">
              <span className="w-1.5 h-1.5 bg-[#8BC34A]/20 rounded-full" />
              TOSHKENT, O'ZBEKISTON
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
