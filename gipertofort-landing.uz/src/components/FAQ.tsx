"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Gipertofort qon bosimini pasaytiradimi?",
    answer:
      "Gipertofort dori vositasi emas. U yurak-qon tomir tizimining normal funksional holatini saqlashga va organizmning umumiy tonusini yaxshilashga yordam beradigan biologik faol qo'shimcha hisoblanadi.",
  },
  {
    question: "Doimiy ravishda qabul qilish mumkinmi?",
    answer:
      "Gipertofortni kurs usulida qabul qilish tavsiya etiladi. Odatda 1 oylik kursdan so'ng tanaffus qilinishi maqsadga muvofiq. Batafsil ma'lumot qadoqdagi yo'riqnomada ko'rsatilgan.",
  },
  {
    question: "Gipertofort dori o'rnini bosadimi?",
    answer:
      "Yo'q. Gipertofort biologik faol qo'shimcha bo'lib, u dori-darmonlar bilan davolash o'rnini bosmaydi. Agar sizda surunkali kasalliklar bo'lsa, shifokor bilan maslahatlashish tavsiya etiladi.",
  },
  {
    question: "Mahsulot tarkibi tabiiymi?",
    answer:
      "Ha, mahsulot tarkibi o'simlik ekstraktlari va yurak faoliyatini qo'llab-quvvatlovchi tabiiy komponentlardan tashkil topgan bo'lib, sun'iy kimyoviy qo'shimchalardan xoli.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#e31e24"; // Cardio Balance va Gipertofort uchun qizil rang

  return (
    <section className="w-full py-3 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        {/* Sarlavha qismi - Cardio Balance stili */}
        <div
          className="mb-10 flex items-center gap-3 border-b-2 pb-4"
          style={{ borderColor: primaryColor }}
        >
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            KO'P BERILADIGAN{" "}
            <span style={{ color: primaryColor }}>SAVOLLAR</span>
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
                <span
                  className={`text-[15px] md:text-[17px] font-bold transition-colors ${
                    openIndex === index ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {index + 1}. {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{
                    color: openIndex === index ? primaryColor : "#94a3b8",
                  }}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-5 pr-6">
                  <p
                    className="text-gray-600 text-sm md:text-base leading-relaxed border-l-4 pl-4"
                    style={{ borderColor: primaryColor }}
                  >
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
