"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Activity, Clock, Flame } from "lucide-react";

const OrderModal = dynamic(() => import("./OrderModal"), { ssr: false });

export default function Usage() {
  const usageInfo = [
    {
      icon: <Flame className="w-8 h-8 text-[#E91E63]" strokeWidth={2.5} />,
      title: "KUNIGA 1-2 KAPSULA",
      desc: "Ovqatlanishdan 30 daqiqa oldin yoki mashg'ulotdan avval ko'p miqdordagi suv bilan qabul qiling.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#E91E63]" strokeWidth={2.5} />,
      title: "ERTA TONGLIK ENERGIYA",
      desc: "Metabolizmni uyg'otish va kun bo'yi ishtahani nazorat qilish uchun ertalab qabul qilish idealdir.",
    },
  ];

  return (
    <section id="usage" className="w-full py-6 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* CHAP TOMON: MATNLAR VA LOGOTIP */}
        <div className="w-full md:w-1/2 space-y-10">
          <div className="space-y-4">
            <h2 className="flex flex-col text-[32px] md:text-[50px] font-[1000] leading-none tracking-tighter">
              <div className="flex items-center select-none uppercase italic">
                <span className="text-[#000000]">FATA</span>
        
                <span className="text-[#E91E63]">LITY</span>
              </div>
              <span className="text-[#000000] font-black text-[24px] md:text-[36px] mt-2 uppercase">
                bilan yengillikni{" "}
              </span>
              <span className="text-[#E91E63] italic font-black text-[26px] md:text-[38px] uppercase">
                his qiling
              </span>
            </h2>
          </div>

          <div className="space-y-10">
            {usageInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-6 group">
                <div className="p-4 rounded-[22px] bg-pink-50/50 group-hover:bg-[#E91E63] group-hover:text-white transition-all duration-500 shadow-sm group-hover:scale-110 text-[#E91E63]">
                  {info.icon}
                </div>
                <div className="pt-1">
                  <h4 className="text-[#000000] font-[1000] text-base md:text-lg tracking-wide uppercase italic">
                    {info.title}
                  </h4>
                  <p className="text-slate-500 text-[13px] md:text-[14px] font-bold leading-relaxed max-w-[340px] mt-2 uppercase opacity-80">
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Kurs haqida ma'lumot qutisi */}
          <div className="bg-[#000000] rounded-[35px] p-8 md:p-10 border border-pink-900/20 shadow-[0_25px_50px_-12px_rgba(233,30,99,0.15)] max-w-[420px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-[#E91E63]/20 transition-all duration-700" />

            <p className="text-[#E91E63] text-[10px] font-black uppercase tracking-[4px] mb-4">
              INTENSIV OZISH KURSI
            </p>
            <h3 className="text-white text-3xl md:text-4xl font-[1000] italic leading-none uppercase tracking-tighter">
              21-30 kun davomida
            </h3>
            <div className="h-[2px] w-12 bg-[#E91E63] my-5 rounded-full" />
            <p className="text-white/40 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
              Maksimal natija uchun kurs davomida kuniga kamida 2 litr suv
              ichish va shakar miqdorini kamaytirish tavsiya etiladi.
            </p>
          </div>
        </div>

        {/* O'NG TOMON: VIZUAL QISM */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative h-[480px] md:h-[620px] w-full rounded-[45px] overflow-hidden shadow-2xl border-[6px] border-pink-50">
            <Image
              src="/right.png" // Sport bilan shug'ullanayotgan yoki sog'lom ayol rasmi
              alt="Fatality Lifestyle"
              fill
              className="object-cover transition-transform duration-1000 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-10 left-8 right-8">
              <p className="text-white font-[1000] italic text-xl md:text-3xl leading-tight uppercase tracking-tighter">
                QOMATINGIZNI <br />{" "}
                <span className="text-[#E91E63]">YANGIDAN</span> <br /> KASHF
                ETING
              </p>
            </div>
          </div>

          {/* Floating Badge (Kapsula miqdori) */}
          <div className="absolute -bottom-6 -right-2 md:right-4 bg-white p-5 rounded-[28px] shadow-[0_20px_40px_rgba(233,30,99,0.2)] border border-pink-50 flex items-center gap-4 transition-transform hover:translate-y-[-8px]">
            <div className="w-14 h-14 rounded-2xl bg-[#000000] flex items-center justify-center text-[#E91E63] font-[1000] text-2xl italic shadow-inner">
              20
            </div>
            <div>
              <p className="text-[#000000] font-[1000] uppercase text-[10px] tracking-[2px] leading-tight">
                Kapsula <br />{" "}
                <span className="text-[#E91E63]">Bir Paketda</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
