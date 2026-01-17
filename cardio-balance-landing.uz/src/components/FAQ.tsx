"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Cardio Balance nima uchun qo'llaniladi?",
    answer: "Cardio Balance - bu qon bosimini tabiiy ravishda normallashtirish va yurak-qon tomir tizimini mustahkamlash uchun mo'ljallangan o'simlik ekstraktlariga asoslangan biologik faol qo'shimchadir.",
  },
  {
    question: "Qanday qabul qilish kerak?",
    answer: "Kattalar uchun kuniga 1-2 mahal ovqat paytida yoki undan keyin bir stakan suv bilan ichish tavsiya etiladi. To'liq natija uchun kursni oxirigacha davom ettirish muhim.",
  },
  {
    question: "Nojo'ya ta'sirlari bormi?",
    answer: "Mahsulot tabiiy tarkibga ega bo'lgani uchun nojo'ya ta'sirlar kuzatilmagan. Biroq, komponentlarga shaxsiy sezuvchanlik bo'lsa, ehtiyot bo'lish tavsiya etiladi.",
  },
  {
    question: "Kimlarga tavsiya etilmaydi?",
    answer: "Homilador ayollar, emizikli onalar va 18 yoshga to'lmagan shaxslarga mutaxassis bilan maslahatlashgan holda qabul qilish tavsiya etiladi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#e31e24"; 

  return (
    <section className="w-full py-3 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            TEZ BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
          </h2>
        </div>

        <div className="divide-y divide-gray-100">
          {faqData.map((item, index) => (
            <div key={index} className="py-2">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left group"
              >
                {/* TO'G'RILANDI: className ichidagi backslash olib tashlandi */}
                <span className={`text-[15px] md:text-[17px] font-bold transition-colors ${openIndex === index ? 'text-red-600' : 'text-gray-800'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? primaryColor : "#94a3b8" }}
                />
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ${
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