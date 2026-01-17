"use client";
import React, { useState, useEffect } from "react";
import { Snackbar } from "./ui/Snackbar";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);
  const [snackbar, setSnackbar] = useState({ isVisible: false, message: "" });

  // Modal ochilganda holatni tozalash
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setFormData({ name: "", phone: "" });
      setSnackbar({ isVisible: false, message: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Ism kiritishda faqat harflarni qabul qilish
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("998")) value = "998" + value.slice(0, 9);
    value = value.slice(0, 12);

    let formatted = "+";
    if (value.length > 0) formatted += value.slice(0, 3);
    if (value.length > 3) formatted += " (" + value.slice(3, 5) + ")";
    if (value.length > 5) formatted += " " + value.slice(5, 8);
    if (value.length > 8) formatted += " " + value.slice(8, 10);
    if (value.length > 10) formatted += " " + value.slice(10, 12);

    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const digitsOnly = formData.phone.replace(/\D/g, "");

    if (digitsOnly.length !== 12) {
      setSnackbar({ isVisible: true, message: "Raqamni to'liq kiriting!" });
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/leads/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: formData.name,
            phone_number: `+${digitsOnly}`,
            product_name: "UroPro",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3000);
      } else if (response.status === 429) {
        setStatus("idle");
        setSnackbar({ 
          isVisible: true, 
          message: "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring." 
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus("idle");
      setSnackbar({ 
        isVisible: true, 
        message: "Xatolik yuz berdi! Server bilan bog'lanib bo'lmadi." 
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <Snackbar
        isVisible={snackbar.isVisible}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />

      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div
          className="absolute inset-0 bg-[#1A2B3C]/40 backdrop-blur-md transition-opacity duration-300"
          onClick={onClose}
        />

        <div className="relative w-full max-w-[450px] bg-white rounded-[40px] border border-slate-100 shadow-[0_30px_100px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-300">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
            <div
              className="h-full bg-[#E31E24] transition-all duration-500"
              style={{
                width: `${
                  (formData.name.length > 2 ? 50 : 0) +
                  (formData.phone.length === 19 ? 50 : 0)
                }%`,
              }}
            />
          </div>

          <div className="p-8 md:p-10">
            {status === "success" ? (
              <div className="py-10 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-[1000] text-[#1A2B3C] mb-2 italic uppercase">
                  QABUL QILINDI!
                </h3>
                <p className="text-slate-500 font-bold text-sm">
                  Operatorlarimiz tez orada bog'lanishadi.
                </p>
              </div>
            ) : (
              <div className="transition-opacity duration-300">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-[1000] italic tracking-tighter text-[#1A2B3C] uppercase">
                    URO<span className="text-[#E31E24]">PRO</span>
                  </h2>
                  <p className="text-slate-400 text-[9px] font-black uppercase tracking-[4px] mt-2">
                    Xavfsiz buyurtma berish
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div
                    className={`relative bg-slate-50 border-2 rounded-2xl transition-all duration-300 ${
                      activeField === "name"
                        ? "border-[#E31E24] bg-white shadow-sm"
                        : "border-transparent"
                    }`}
                  >
                    <input
                      required
                      type="text"
                      placeholder="Ismingiz"
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className="w-full pl-6 pr-6 py-4 bg-transparent outline-none font-bold text-[#1A2B3C] placeholder:text-slate-300"
                      value={formData.name}
                      onChange={handleNameChange}
                    />
                  </div>

                  <div
                    className={`relative bg-slate-50 border-2 rounded-2xl transition-all duration-300 ${
                      activeField === "phone"
                        ? "border-[#E31E24] bg-white shadow-sm"
                        : "border-transparent"
                    }`}
                  >
                    <input
                      required
                      type="text"
                      placeholder="+998 (__) ___ __ __"
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      className="w-full pl-6 pr-6 py-4 bg-transparent outline-none font-bold text-[#1A2B3C] placeholder:text-slate-300"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                  </div>

                  <button
                    disabled={status === "loading" || formData.name.length < 2 || formData.phone.length < 19}
                    className="w-full py-5 bg-[#E31E24] text-white rounded-2xl font-[1000] uppercase tracking-[2px] text-xs shadow-xl shadow-red-600/20 hover:bg-[#1A2B3C] active:scale-[0.98] disabled:bg-slate-100 disabled:text-slate-300 disabled:shadow-none transition-all duration-300"
                  >
                    {status === "loading" ? "Yuborilmoqda..." : "Buyurtmani tasdiqlash"}
                  </button>
                </form>

                <p className="text-center text-[8px] text-slate-400 mt-6 leading-relaxed uppercase font-bold tracking-tighter">
                  Ma'lumotlaringiz maxfiyligi kafolatlanadi
                </p>
              </div>
            )}
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-400 hover:bg-[#E31E24] hover:text-white transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}