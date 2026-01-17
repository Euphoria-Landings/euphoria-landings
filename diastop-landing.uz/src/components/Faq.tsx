"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "DIASTOP qondagi qand miqdorini kamaytiradimi?",
    answer:
      "DIASTOP sog‘lom turmush tarzi doirasida qondagi qand miqdorini me’yorida ushlab turishga yordam beradi.",
  },
  {
    question: "DIASTOP dorilarini almashtirish mumkinmi?",
    answer: "Yo‘q. DIASTOP dori-darmonlar bilan davolash o‘rnini bosmaydi.",
  },
  {
    question: "Doimiy qabul qilish uchun yaroqlimi?",
    answer: "Tanaffusli kurs qabuli tavsiya etiladi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const primaryColor = "#CC1D24"; // DIASTOP qizil rangi

  return (
    <section className="w-full py-16 bg-white" id="faq">
      <div className="max-w-[700px] mx-auto px-4">
        {/* Sarlavha qismi - VisuCaps stili bilan bir xil */}
        <div
          className="mb-10 flex items-center gap-3 border-b-2 pb-4"
          style={{ borderColor: primaryColor }}
        >
          <HelpCircle size={28} style={{ color: primaryColor }} />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black">
            TEZ BERILADIGAN{" "}
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
                    openIndex === index ? "text-[#CC1D24]" : "text-gray-800"
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
