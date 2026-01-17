"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Gemo Plus bavosilni davolaydimi?",
    answer: "Yo‘q. Gemo Plus dori vositasi hisoblanmaydi. U parvarish va qulaylikni saqlash, terining umumiy holatini yaxshilash va noqulaylikni kamaytirish uchun ishlatiladi.",
  },
  {
    question: "Kasallik xuruj qilganda qo‘llash mumkinmi?",
    answer: "Vosita parvarishning bir qismi sifatida qo‘llaniladi. Yaqqol namoyon bo‘lgan o'tkir alomatlar bilan shoshilinch ravishda shifokorga murojaat qilish va uning tavsiyalariga amal qilish kerak.",
  },
  {
    question: "Uzoq muddat qo‘llash uchun yaroqlimi?",
    answer: "Mahsulot odatda kurslar tomonidan foydalaniladi. Foydalanish davomiyligi individual tarzda belgilanadi. Kurs davomida foydalanish samaradorlikni oshirishga yordam beradi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#C5A358"; // GemoPlus Gold (Oltin) rangi
  const darkColor = "#1A1A1A";    // GemoPlus Dark rangi

  return (
    <section className="w-full py-3 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha qismi - GemoPlus Gold stili */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            KO'P BERILADIGAN <span style={{ color: primaryColor }}>SAVOLLAR</span>
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
                <span className={`text-[15px] md:text-[17px] font-bold transition-colors ${openIndex === index ? 'text-[#C5A358]' : 'text-gray-800'}`}>
                  {index + 1}. {item.question}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  style={{ color: openIndex === index ? primaryColor : "#94a3b8" }}
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