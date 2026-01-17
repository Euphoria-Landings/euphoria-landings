"use client";
import { Activity } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#000000] py-16 text-white/70 border-t-2 border-pink-900/20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: FATALITY - Dynamic Puls */}
          <div className="flex flex-col items-start gap-4 group cursor-pointer">
            <div className="flex items-center text-[36px] font-[1000] italic tracking-tighter select-none leading-none">
              <span className="text-white">FATA</span>
          
              <span className="text-[#E91E63]">LITY</span>
            </div>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-[1000] tracking-[4px] text-white/40 uppercase group-hover:text-[#E91E63] transition-colors">
                NATURAL SLIMMING COMPLEX
              </span>
            </div>
          </div>

          {/* 2. ALOQA MA'LUMOTLARI */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
            <div className="space-y-4 p-8 bg-white/5 rounded-[35px] border border-white/5 backdrop-blur-md hover:border-[#E91E63]/30 transition-all duration-500 group">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-black">
                  <span className="text-white/30 uppercase tracking-[2px] mr-4 italic">
                    CALL-CENTER:
                  </span>{" "}
                  <a
                    href="tel:+998555170147"
                    className="text-white group-hover:text-[#E91E63] transition-all font-[1000] text-[12px] md:text-[10px] tracking-tighter italic"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
              </div>
           
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-5 text-[11px] md:text-[12px] font-[1000] uppercase tracking-[3px] italic">
            <a
              href="#"
              className="text-white/30 hover:text-[#E91E63] transition-all hover:translate-x-3 flex items-center gap-4 group"
            >
              <div className="w-1.5 h-6 bg-[#E91E63] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#E91E63] transition-all hover:translate-x-3 flex items-center gap-4 group"
            >
              <div className="w-1.5 h-6 bg-[#E91E63] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#E91E63] transition-all hover:translate-x-3 flex items-center gap-4 group"
            >
              <div className="w-1.5 h-6 bg-[#E91E63] scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom" />
              O'zR Sertifikatlari
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] md:text-[10px] uppercase tracking-[4px] text-white/20 font-black italic">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} FATALITY COMPLEX UZBEKISTAN. BARCHA
            HUQUQLAR HIMOYALANGAN.
          </p>
          <div className="flex items-center gap-10">
            <span className="flex items-center gap-3 hover:text-white transition-colors cursor-default">
              <span className="w-2 h-2 bg-[#E91E63] rounded-full shadow-[0_0_10px_#E91E63]" />
              TOSHKENT, O'ZBEKISTON
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
