"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "ParazitOFF parazitlarni o‘ldiradimi?",
    answer: "ParazitOFF parazitlar uchun noqulay muhit yaratishga yordam beradi va organizmning tabiiy tozalanish jarayonlarini qo‘llab-quvvatlaydi. Faol o‘simlik komponentlari parazitar yuklamani kamaytirishga xizmat qiladi.",
  },
  {
    question: "ParazitOFF dori vositasi hisoblanadimi?",
    answer: "Yo‘q. ParazitOFF - dori vositasi emas, balki 100% tabiiy efir moylari va o‘simlik ekstraktlaridan tarkib topgan biologik faol oziq-ovqat qo‘shimchasidir.",
  },
  {
    question: "Profilaktika uchun ishlatish mumkinmi?",
    answer: "Ha, ParazitOFF sog‘liqni saqlashning qo‘llab-quvvatlovchi va profilaktik yondashuvi doirasida qo‘llaniladi. Organizmning ichki muvozanatini saqlash uchun davriy ravishda foydalanish tavsiya etiladi.",
  },
  {
    question: "Mahsulot tarkibi qanday?",
    answer: "Mahsulot tarkibi to'liq tabiiy o'simlik ekstraktlari va efir moylaridan iborat bo'lib, ular organizmga yumshoq, lekin samarali ta'sir ko'rsatadi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#8BC34A"; // ParazitOFF och yashil
  const darkColor = "#004D40";    // ParazitOFF to'q yashil

  return (
    <section className="w-full py-3 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha qismi - Cardio/Sustaflex stili */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: darkColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-[#1A1A1A]">
            TEZ BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
          </h2>
        </div>

        {/* Savollar ro'yxati */}
        <div className="divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group transition-all"
              >
                <span className={`text-[15px] md:text-[17px] font-bold transition-colors ${openIndex === index ? 'text-[#004D40]' : 'text-gray-800'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? darkColor : "#94a3b8" }}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pr-6">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 pl-4" style={{ borderColor: primaryColor }}>
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}