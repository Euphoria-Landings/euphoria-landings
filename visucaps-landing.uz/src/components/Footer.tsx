"use client";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#0A0A0A] py-10 md:py-14 text-white/60 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* 1. BRENDING - VISUCAPS Minimalist */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h2 className="text-[28px] md:text-[36px] font-[1000] italic tracking-tighter leading-none uppercase">
              <span className="text-white">VISU</span>
              <span className="text-[#4B2C82]">CAPS</span>
            </h2>
            <div className="text-center md:text-left">
              <span className="block text-[7px] md:text-[8px] font-[1000] tracking-[3px] text-[#4B2C82] uppercase italic opacity-90">
                Tiniq ko'rish texnologiyasi
              </span>
            </div>
          </div>

          {/* 2. ALOQA - Ixcham va Zamonaviy */}
          <div className="flex-1 max-w-[450px] w-full">
            <div className="p-5 bg-white/[0.02] rounded-[24px] border border-white/5 backdrop-blur-md">
              <span className="text-white/20 font-black text-[7px] block mb-1.5 tracking-[2px] uppercase">
                Mijozlarni qo'llab-quvvatlash:
              </span>
              <a
                href="tel:+998712000000"
                className="text-[#4B2C82] text-lg md:text-xl font-[1000] block hover:text-white transition-all tracking-tighter italic"
              >
                +998 (55) 517-01-47
              </a>
            </div>
          </div>

          {/* 3. NAVIGATSIYA - Micro Typography */}
          <div className="flex flex-col gap-3 text-[8px] font-[900] uppercase tracking-[1.5px]">
            <a
              href="#"
              className="text-white/20 hover:text-[#4B2C82] transition-all flex items-center gap-2.5 group"
            >
              <div className="w-1 h-1 rounded-full bg-[#4B2C82] opacity-40 group-hover:opacity-100" />
              Foydalanish shartlari
            </a>
            <a
              href="#"
              className="text-white/20 hover:text-[#4B2C82] transition-all flex items-center gap-2.5 group"
            >
              <div className="w-1 h-1 rounded-full bg-[#4B2C82] opacity-40 group-hover:opacity-100" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/20 hover:text-[#4B2C82] transition-all flex items-center gap-2.5 group"
            >
              <div className="w-1 h-1 rounded-full bg-[#4B2C82] opacity-40 group-hover:opacity-100" />
              Laboratoriya natijalari
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT & TAGS */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-5 text-[7px] uppercase tracking-[2.5px] text-white/10 font-black">
          <p>© 2026 VISUCAPS GLOBAL. BARCHA HUQUQLAR HIMOYaLANGAN.</p>

          <div className="flex gap-2">
            <span className="px-3 py-1 border border-white/5 rounded-md bg-white/[0.01]">
              GMP
            </span>
            <span className="px-3 py-1 border border-white/5 rounded-md bg-white/[0.01]">
              BQM
            </span>
            <span className="px-3 py-1 border border-[#4B2C82]/20 text-[#4B2C82]/40 rounded-md bg-purple-500/[0.01]">
              100% NATURAL
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
