"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle, AlertCircle } from "lucide-react";

const faqData = [
  {
    question: "Fatality tez vazn yo‘qotish vositasimi?",
    answer: "Yo‘q. Fatality sog‘lom turmush tarzi doirasida vaznni nazorat qilishni qo‘llab-quvvatlash uchun mo‘ljallangan kompleksdir.",
  },
  {
    question: "Parhez va harakatsiz ozish mumkinmi?",
    answer: "Mahsulot muvozanatli ovqatlanish va jismoniy faollikka rioya qilingandagina maksimal ta’sir ko‘rsatishi mumkin.",
  },
  {
    question: "Fatality dori vositasi hisoblanadimi?",
    answer: "Yo‘q. Fatality — oziq-ovqatga biologik faol qo‘shimcha (BFQ) hisoblanadi. Dori vositasi emas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const fatalityPink = "#E91E63";

  return (
    <section className="w-full py-4 bg-white" id="faq">
      <div className="max-w-[800px] mx-auto px-4">
        {/* Sarlavha qismi */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-[2px] w-8 bg-[#E91E63]"></span>
            <span className="text-[#E91E63] text-[11px] font-black uppercase tracking-[3px]">
              Ma'lumot markazi
            </span>
            <span className="h-[2px] w-8 bg-[#E91E63]"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-[1000] italic uppercase tracking-tighter text-black">
            KO‘P BERILADIGAN <span style={{ color: fatalityPink }}>SAVOLLAR</span>
          </h2>
        </div>

        {/* Savollar ro'yxati */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border-2 transition-all duration-300 rounded-2xl ${
                openIndex === index ? "border-[#E91E63] shadow-lg shadow-pink-100" : "border-gray-100 hover:border-pink-200"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
              >
                <span className={`text-[16px] md:text-[18px] font-extrabold transition-colors ${openIndex === index ? 'text-black' : 'text-gray-700'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full transition-all ${openIndex === index ? 'bg-[#E91E63] text-white' : 'bg-gray-50 text-gray-400'}`}>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-6 pb-6 text-gray-600 text-[15px] leading-relaxed font-medium">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
}