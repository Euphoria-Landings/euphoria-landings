"use client";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#121212] py-16 text-white/80 border-t-2 border-[#C5A358]/20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: GEMO PLUS */}
          <div className="flex flex-col items-center md:items-start gap-4 group cursor-pointer">
            <h2 className="text-[36px] font-[1000] italic tracking-tighter select-none leading-none uppercase">
              <span className="text-white">GEMO</span>
              <span className="text-[#C5A358]">PLUS</span>
            </h2>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-bold tracking-[3px] text-[#C5A358] uppercase">
                Tabiiy parvarish majmuasi
              </span>
            </div>
          </div>

          {/* 2. ASOSIY ALOQA MA'LUMOTLARI */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
            <div className="space-y-3 p-5 bg-white/5 rounded-[25px] border border-white/10">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-medium">
                  <span className="text-white font-bold opacity-60 uppercase tracking-widest mr-2">
                    Murojaat uchun:
                  </span>{" "}
                  <a
                    href="tel:+998555170147"
                    className="text-[#C5A358] hover:text-white transition-colors font-black text-lg md:text-xl"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
              </div>
          
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-4 text-[12px] font-black uppercase tracking-widest">
            <a
              href="#"
              className="text-white/50 hover:text-[#C5A358] transition-all hover:translate-x-1 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[#C5A358] transition-all hover:translate-x-1 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-[#C5A358] transition-all hover:translate-x-1 flex items-center gap-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A358]" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[3px] text-white/20 font-black">
          <p>
            © {new Date().getFullYear()} GEMO PLUS UZBEKISTAN. BARCHA HUQUQLAR
            HIMOYaLANGAN.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-[#C5A358]/50 cursor-default transition-colors">
              O'zbekiston, Toshkent
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
