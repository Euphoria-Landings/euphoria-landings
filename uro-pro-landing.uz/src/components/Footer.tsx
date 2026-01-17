"use client";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#080808] py-20 text-white/70 border-t border-[#E31E24]/30 relative overflow-hidden">
      {/* Dekorativ fon nuri */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-[#E31E24] to-transparent opacity-50" />

      <div className="max-w-[1100px] mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* 1. LOGOTIP: UROPRO (PREMIUM USLUB) */}
          <div className="flex flex-col items-center md:items-start gap-5 group cursor-pointer">
            <h2 className="text-[42px] font-[1000] italic tracking-tighter select-none leading-none uppercase">
              <span className="text-white">URO</span>
              <span className="text-[#E31E24]">PRO</span>
            </h2>
            <div className="text-center md:text-left flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#E31E24]" />
              <span className="block text-[10px] font-black tracking-[4px] text-white/40 uppercase">
                Absolute Male Power
              </span>
            </div>
          </div>

          {/* 2. RASMIY MA'LUMOTLAR (Vakolatxona) */}
          <div className="flex-1 max-w-[600px] space-y-8 text-[12px] md:text-[13px] leading-relaxed">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-white/[0.03] rounded-[32px] border border-white/10 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#E31E24] shrink-0" />
                  <a
                    href="tel:+998712000000"
                    className="text-white hover:text-[#E31E24] transition-colors font-black text-lg"
                  >
                    +998 (55) 517-01-47
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-5 text-[11px] font-black uppercase tracking-[2px]">
            <a
              href="#"
              className="text-white/40 hover:text-[#E31E24] transition-all flex items-center gap-3 group"
            >
              <div className="w-1 h-1 bg-white/20 group-hover:bg-[#E31E24] group-hover:scale-150 transition-all" />
              Shartnoma
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#E31E24] transition-all flex items-center gap-3 group"
            >
              <div className="w-1 h-1 bg-white/20 group-hover:bg-[#E31E24] group-hover:scale-150 transition-all" />
              Maxfiylik
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#E31E24] transition-all flex items-center gap-3 group"
            >
              <div className="w-1 h-1 bg-white/20 group-hover:bg-[#E31E24] group-hover:scale-150 transition-all" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[3px] text-white/20 font-black">
          <p>© {new Date().getFullYear()} UROPRO INTERNATIONAL UZBEKISTAN.</p>
          <div className="flex items-center gap-8 italic">
            <span className="text-[#E31E24]">18+</span>
            <span className="h-4 w-[1px] bg-white/10" />
        
          </div>
        </div>
      </div>
    </footer>
  );
}
