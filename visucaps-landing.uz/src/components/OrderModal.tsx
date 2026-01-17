"use client";
import React, { useState, useEffect } from "react";
import { Snackbar } from "./ui/Snackbar";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [snackbar, setSnackbar] = useState({ isVisible: false, message: "" });

  // Modal ochilganda holatlarni tozalash
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

  // Ism kiritish (faqat harflar)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  // Telefon formatlash
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
            product_name: "VisuCaps",
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3000);
      } else if (response.status === 429) {
        // Limit xatosi
        setStatus("idle");
        setSnackbar({
          isVisible: true,
          message:
            "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.",
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus("idle");
      setSnackbar({
        isVisible: true,
        message: "Server xatoligi! Keyinroq qayta urinib ko'ring.",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0A0A0A]/90 backdrop-blur-sm">
      <Snackbar
        isVisible={snackbar.isVisible}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />

      <div className="relative w-full max-w-[380px] bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100">
        {/* Progress Line */}
        <div
          className={`h-1 w-full transition-all duration-700 ${
            formData.name.length > 2 && formData.phone.length > 18
              ? "bg-[#4B2C82]"
              : "bg-gray-100"
          }`}
        />

        <div className="p-8 md:p-10">
          {status === "success" ? (
            <div className="py-8 text-center animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-[#4B2C82] mx-auto mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#1A1A1A] uppercase italic">
                QABUL QILINDI!
              </h3>
              <p className="text-gray-400 text-[9px] font-bold uppercase mt-2 tracking-[1.5px]">
                Tez orada bog'lanamiz
              </p>
            </div>
          ) : (
            <>
              {/* Logo Section */}
              <div className="text-center mb-8">
                <h2 className="text-[28px] md:text-[32px] font-[1000] italic tracking-tighter text-[#1A1A1A] uppercase">
                  VISU<span className="text-[#4B2C82]">CAPS</span>
                </h2>
                <p className="text-gray-400 text-[8px] font-black uppercase tracking-[2px] mt-2 opacity-60">
                  Buyurtmani rasmiylashtirish
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <input
                  required
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-[#4B2C82]/20 focus:bg-white transition-all outline-none font-bold text-[#1A1A1A] text-[13px]"
                  value={formData.name}
                  onChange={handleNameChange}
                />

                <input
                  required
                  type="tel"
                  placeholder="+998 (__) ___ __ __"
                  className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-[#4B2C82]/20 focus:bg-white transition-all outline-none font-bold text-[#1A1A1A] text-[13px]"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />

                <button
                  disabled={status === "loading" || formData.name.length < 2}
                  className="w-full py-4 bg-[#4B2C82] text-white rounded-xl font-black uppercase tracking-[2px] text-[9px] shadow-lg shadow-purple-900/10 disabled:bg-gray-200 disabled:shadow-none active:scale-95 transition-all mt-2"
                >
                  {status === "loading" ? "YUBORILMOQDA..." : "TASDIQLASH"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-300 hover:text-[#4B2C82] transition-colors"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path
              d="M18 6L6 18M6 6l12 12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
