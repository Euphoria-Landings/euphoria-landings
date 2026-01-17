"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Sustaflex bo'g'im og'riqlarida qanchalik tez yordam beradi?",
    answer: "Sustaflex birinchi marta qo'llanilgandanoq og'riqni pasaytira boshlaydi. Biroq, bo'g'im to'qimalarini to'liq tiklash va yallig'lanishni butunlay yo'q qilish uchun kursni (30 kun) oxirigacha davom ettirish tavsiya etiladi.",
  },
  {
    question: "Mahsulot qanday tarkibga ega?",
    answer: "Sustaflex tarkibida bo'g'imlar uchun hayotiy zarur bo'lgan tabiiy ekstraktlar mavjud bo'lib, ular kıkırdak (tog'ay) to'qimasini oziqlantiradi va bo'g'imlararo suyuqlik miqdorini normallashtiradi.",
  },
  {
    question: "Foydalanish tartibi qanday?",
    answer: "Sustaflex muammoli sohaga (tizza, tirsak, bel va boshqalar) kuniga 2 mahal surtiladi. Teriga to'liq singib ketgunga qadar yengil uqalovchi harakatlar bilan surtish lozim.",
  },
  {
    question: "Keksalar uchun foydalanish xavfsizmi?",
    answer: "Ha, Sustaflex keksalar uchun juda samarali. U yosh bilan bog'liq artroz va osteoxondroz belgilarini yengillashtirishda yordam beradi va tarkibi tabiiy bo'lgani uchun xavfsiz hisoblanadi.",
  },
  {
    question: "Sustaflexni boshqa dori vositalari bilan birga ishlatsa bo'ladimi?",
    answer: "Ha, u tashqi qo'llaniladigan vosita bo'lgani uchun boshqa dorilar bilan kimyoviy reaksiyaga kirishmaydi. Kompleks davolashning bir qismi sifatida bemalol foydalanish mumkin.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#e31e24"; // Cardio Balance bilan bir xil qizil

  return (
    <section className="w-full py-16 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        
        {/* Sarlavha qismi - Cardio Balance stili */}
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