"use client";

export default function MainFooter() {
  return (
    <footer className="w-full bg-[#121212] py-16 text-white/80 border-t-2 border-red-600/20">
      <div className="max-w-[1100px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* 1. LOGOTIP: СУСТАФЛЕКС (YARMI OQ YARMI QIZIL) */}
          <div className="flex flex-col items-center md:items-start gap-4 group cursor-pointer">
            <h2 className="text-[36px] font-black italic tracking-tighter select-none leading-none">
              <span className="text-white">Суста</span>
              <span className="text-red-600">Флекс</span>
            </h2>
            <div className="text-center md:text-left">
              <span className="block text-[10px] font-bold tracking-[3px] text-red-600 uppercase">
                Sog'lom bo'g'imlar uchun
              </span>
            </div>
          </div>

          {/* 2. ASOSIY MA'LUMOTLAR (O'zbekiston lokatsiyasi) */}
          <div className="flex-1 max-w-[550px] space-y-6 text-[11px] md:text-[12px] leading-relaxed">
            <div className="space-y-3 p-4 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex flex-wrap items-center gap-y-2">
                <p className="font-medium">
                  <span className="text-white font-bold">Tel:</span>{" "}
                  <a
                    href="tel:+998712000000"
                    className="text-red-500 hover:text-red-400 transition-colors font-bold"
                  >
                    +998 (55) 517-01-47
                  </a>
                </p>
                <span className="mx-3 opacity-30 hidden md:inline">|</span>
              </div>
            </div>
          </div>

          {/* 3. HUQUQIY LINKLAR */}
          <div className="flex flex-col gap-4 text-[12px] font-bold">
            <a
              href="#"
              className="text-white/60 hover:text-red-500 transition-all hover:translate-x-1 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Foydalanuvchi shartnomasi
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-red-500 transition-all hover:translate-x-1 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Maxfiylik siyosati
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-red-500 transition-all hover:translate-x-1 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
              Sertifikatlar
            </a>
          </div>
        </div>

        {/* ENG PASTKI QISM: COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[2px] text-white/20 font-bold">
          <p>
            © {new Date().getFullYear()} SUSTAFLEX UZBEKISTAN. BARCHA HUQUQLAR
            HIMOYaLANGAN.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-red-600/50 cursor-default transition-colors">
              Toshkent, O'zbekiston
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
