"use client";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#0F0F0F] py-16 text-white/70 border-t border-white/5">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. BRENDING */}
          <div className="flex flex-col items-center md:items-start gap-4 group">
            <h2 className="text-[32px] font-[1000] italic tracking-tighter leading-none uppercase">
              <span className="text-white">ГИПЕР</span>
              <span className="text-[#CC1D24]">ТОФОРТ</span>
            </h2>
            <div className="text-center md:text-left">
              <span className="block text-[9px] font-black tracking-[3px] text-[#CC1D24] uppercase italic">
                Sog'lom yurak va tomirlar
              </span>
            </div>
          </div>

          {/* 2. HUQUQIY VA MANZIL MA'LUMOTLARI */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
        

            <div className="space-y-4 p-5 bg-white/[0.02] rounded-3xl border border-white/5">
         
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p>
                  <span className="text-white font-black uppercase text-[10px] block mb-1">
                    Aloqa:
                  </span>
                  <a
                    href="tel:+998712000000"
                    className="text-[#CC1D24] font-black block"
                  >
                    +998 (71) 200-00-00
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* 3. NAVIGATSIYA */}
          <div className="flex flex-col gap-4 text-[11px] font-black uppercase tracking-wider">
            <a
              href="#"
              className="text-white/40 hover:text-[#CC1D24] transition-all flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-[#CC1D24]" />
              Foydalanish shartlari
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#CC1D24] transition-all flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-[#CC1D24]" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/40 hover:text-[#CC1D24] transition-all flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-[#CC1D24]" />
              Sertifikatlar (PDF)
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[3px] text-white/10 font-black">
          <p>© 2026 GIPERTOFORT UZBEKISTAN. BARCHA HUQUQLAR HIMOYaLANGAN.</p>
          <div className="flex gap-4">
            <span className="px-3 py-1 border border-white/10 rounded-md">
              18+
            </span>
            <span className="px-3 py-1 border border-white/10 rounded-md">
              BQM
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
