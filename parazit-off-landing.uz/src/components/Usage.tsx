"use client";
import Image from "next/image";
import { Leaf, Droplets, Clock } from "lucide-react";

export default function Usage() {
  const usageInfo = [
    {
      icon: <Droplets className="w-8 h-8 text-[#8BC34A]" />,
      title: "TO'G'RI DOZALASH",
      desc: "Kuniga 1-2 mahal, 5-10 tomchidan ovqatdan 30 daqiqa oldin qabul qiling.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#8BC34A]" />,
      title: "MUNTZAM QABUL",
      desc: "Eng yaxshi natija uchun tomchilarni har kuni bir vaqtda iste'mol qilish tavsiya etiladi.",
    },
  ];

  return (
    <section id="usage" className="w-full py-3 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* CHAP TOMON: MATNLAR VA LOGOTIP */}
        <div className="w-full md:w-1/2 space-y-10">
          <div className="space-y-4">
            <h2 className="flex flex-col text-[32px] md:text-[50px] font-[1000] leading-none tracking-tighter">
              <div className="flex items-center select-none uppercase">
                <span className="text-[#004D40]">Parazit</span>
                <span className="italic text-[#8BC34A] ml-1">OFF</span>
            
              </div>
              <span className="text-[#004D40] font-black text-[24px] md:text-[36px] mt-2">
                bilan tozalanish{" "}
              </span>
              <span className="text-[#8BC34A] italic font-black text-[26px] md:text-[38px]">
                yanada oson
              </span>
            </h2>
          </div>

          <div className="space-y-10">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="p-4 rounded-[22px] bg-green-50 group-hover:bg-[#8BC34A]/10 transition-all duration-500 shadow-sm group-hover:scale-110">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#004D40] font-[900] text-base md:text-lg tracking-wide uppercase">
                    {info.title}
                  </h4>
                  <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-[340px] mt-2">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kurs haqida ma'lumot qutisi */}
          <div className="bg-[#004D40] rounded-[35px] p-10 border border-green-900 shadow-[0_25px_50px_-12px_rgba(0,77,64,0.3)] max-w-[400px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#8BC34A]/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#8BC34A]/20 transition-all duration-700" />

            <p className="text-[#8BC34A] text-[11px] font-black uppercase tracking-[4px] mb-4">
              TAVSIYA ETILGAN KURS
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-[1000] italic leading-none uppercase tracking-tighter">
              21-30 kun davomida
            </h3>
            <div className="h-[2px] w-12 bg-[#8BC34A] my-5 rounded-full" />
            <p className="text-white/40 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
              To'liq tozalanish uchun kursni uzluksiz yakunlash muhimdir.
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL QISM */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[450px] md:h-[650px] w-full rounded-[50px] overflow-hidden shadow-2xl border-[8px] border-green-50/50">
            <Image
              src="/right.png" // Sog'lom hayot tarzi yoki tomchini ishlatayotgan rasm
              alt="ParazitOff Lifestyle"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/60 via-transparent to-transparent" />

      
          </div>

          {/* Floating Badge (Tomchilar soni) */}
          <div className="absolute -bottom-6 -right-4 md:right-0 bg-white p-6 rounded-[30px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-green-50 flex items-center gap-4 transition-transform hover:translate-y-[-5px]">
            <div className="w-14 h-14 rounded-2xl bg-[#004D40] flex items-center justify-center text-[#8BC34A] font-[1000] text-3xl italic shadow-inner">
              10
            </div>
            <div>
              <p className="text-[#004D40] font-[1000] uppercase text-xs tracking-[2px] leading-tight">
                Tomchi <br /> <span className="text-[#8BC34A]">Har kuni</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
