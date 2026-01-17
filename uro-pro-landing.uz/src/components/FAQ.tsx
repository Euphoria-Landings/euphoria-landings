"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Uro-Pro erkaklar uchun qanday yordam beradi?",
    answer: "Uro-Pro siydik chiqarish tizimi faoliyatini yaxshilaydi, yallig'lanishni kamaytiradi va prostatit belgilarini bartaraf etishga yordam beradi.",
  },
  {
    question: "Kurs davomiyligi qancha bo'lishi kerak?",
    answer: "Maksimal va barqaror natijaga erishish uchun mahsulotni 30 kunlik to'liq kurs davomida qabul qilish tavsiya etiladi.",
  },
  {
    question: "Tarkibi haqiqatan ham tabiiymi?",
    answer: "Ha, Uro-Pro to'liq o'simlik ekstraktlaridan tarkib topgan. Unda kimyoviy qo'shimchalar yo'q, shuning uchun u organizm uchun xavfsizdir.",
  },
  {
    question: "Qanday qabul qilish tartibi tavsiya etiladi?",
    answer: "Kuniga 2 mahal, 1 tadan kapsulani ovqatdan keyin yetarli miqdordagi suv bilan ichish tavsiya etiladi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#e31e24"; // Cardio Balance qizili

  return (
    <section className="w-full py-3 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha qismi - Siz bergan still bilan bir xil */}
        <div className="mb-10 flex items-center gap-3 border-b-2 pb-4" style={{ borderColor: primaryColor }}>
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
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