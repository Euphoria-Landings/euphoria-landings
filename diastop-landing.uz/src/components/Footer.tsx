"use client";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#0F0F0F] py-12 md:py-16 text-white/70 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* 1. BRENDING - DIASTØP Logo Standarti */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-[32px] md:text-[40px] font-[1000] italic tracking-tighter leading-none uppercase flex items-center">
              <span className="text-white">DIA</span>
              <span className="text-[#CC1D24]">ST</span>
              <span className="relative inline-block text-[#CC1D24]">
                O
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2.5px] md:h-[3.5px] bg-white rotate-[-45deg] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.4)]"></span>
              </span>
              <span className="text-[#CC1D24]">P</span>
            </h2>
            <div className="text-center md:text-left">
              <span className="block text-[8px] md:text-[9px] font-[1000] tracking-[4px] text-[#CC1D24] uppercase italic opacity-80">
                Sog'lom hayot sari qadam
              </span>
            </div>
          </div>

          {/* 2. ALOQA VA MA'LUMOTLAR */}
          <div className="flex-1 max-w-[500px] space-y-5 text-[9px] md:text-[10px] leading-relaxed uppercase tracking-wider font-bold">
            <div className="space-y-4 p-6 bg-white/[0.03] rounded-[32px] border border-white/5 backdrop-blur-sm">
            
              <div className="">
                <span className="text-white/30 font-black text-[8px] block mb-2 tracking-[2px]">
                  BOG'LANISH:
                </span>
                <a
                  href="tel:+998712000000"
                  className="text-[#CC1D24] text-lg md:text-xl font-[1000] block hover:text-white transition-colors tracking-tighter"
                >
               +998 (55) 517-01-47
                </a>
              </div>
            </div>
          </div>

          {/* 3. NAVIGATSIYA (HUQUQIY) */}
          <div className="flex flex-col gap-4 text-[9px] font-black uppercase tracking-[2px]">
            <a
              href="#"
              className="text-white/30 hover:text-[#CC1D24] transition-all flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC1D24] opacity-50 group-hover:opacity-100" />
              Foydalanish shartlari
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#CC1D24] transition-all flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC1D24] opacity-50 group-hover:opacity-100" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/30 hover:text-[#CC1D24] transition-all flex items-center gap-3 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC1D24] opacity-50 group-hover:opacity-100" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] uppercase tracking-[3px] text-white/10 font-black">
          <p>© 2026 DIASTØP UZBEKISTAN. BARCHA HUQUQLAR HIMOYaLANGAN.</p>
          <div className="flex gap-3">
            <span className="px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02]">
              18+
            </span>
            <span className="px-4 py-1.5 border border-white/5 rounded-full bg-white/[0.02]">
              BQM
            </span>
            <span className="px-4 py-1.5 border border-[#CC1D24]/20 text-[#CC1D24]/50 rounded-full bg-red-500/[0.02]">
              NATURAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}