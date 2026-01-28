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
  const [snackbar, setSnackbar] = useState({ isVisible: false, message: "" });

  // --- DEVICE ID LOGIKASI ---
  const getDeviceId = () => {
    if (typeof window === "undefined") return "";

    let deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("device_id", deviceId);
    }
    return deviceId;
  };

  const showNotice = (msg: string) => {
    setSnackbar({ isVisible: true, message: msg });
  };

  useEffect(() => {
    if (snackbar.isVisible) {
      const timer = setTimeout(() => {
        setSnackbar({ ...snackbar, isVisible: false });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [snackbar.isVisible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setFormData({ name: "", phone: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Ism kiritish: Faqat harflar (Lotin va Kirill) va bo'sh joy
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Faqat harflar va space qoladi, qolgan hamma narsa (raqam, belgi) o'chiriladi
    const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁсС\s]/g, "");
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
      showNotice("Raqamni to'liq kiriting!");
      return;
    }

    setStatus("loading");

    const payload = {
      full_name: formData.name,
      phone_number: `+${digitsOnly}`,
      product_name: "Gipertofort",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/leads/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Device-ID": getDeviceId(), // --- HEADER QO'SHILDI ---
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3500);
      } else if (response.status === 429) {
        setStatus("idle");
        showNotice(
          "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.",
        );
      } else {
        throw new Error();
      }
    } catch (error) {
      setStatus("idle");
      showNotice("Xatolik! Server bilan bog'lanib bo'lmadi.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/90 backdrop-blur-sm">
      <Snackbar
        isVisible={snackbar.isVisible}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />

      <div className="relative w-full max-w-[450px] bg-white rounded-[32px] shadow-2xl overflow-hidden">
        <div
          className={`h-1 w-full transition-colors ${
            formData.name.length > 2 && formData.phone.length > 18
              ? "bg-[#CC1D24]"
              : "bg-gray-100"
          }`}
        />

        <div className="p-8 md:p-10">
          {status === "success" ? (
            <div className="py-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
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
                Qabul qilindi!
              </h3>
              <p className="text-gray-400 text-[10px] font-bold uppercase mt-2">
                Tez orada bog'lanamiz.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-[1000] italic tracking-tighter text-[#1A1A1A] uppercase">
                  ГИПЕР<span className="text-[#CC1D24]">ТОФОРТ</span>
                </h2>
                <p className="text-gray-400 text-[9px] font-black uppercase tracking-[2px] mt-1">
                  Buyurtma rasmiylashtirish
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#CC1D24] transition-all outline-none font-bold text-[#1A1A1A]"
                  value={formData.name}
                  onChange={handleNameChange} // --- FAQAT HARFLAR FILTRI ---
                />

                <input
                  required
                  type="tel"
                  placeholder="+998 (__) ___ __ __"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-[#CC1D24] transition-all outline-none font-bold text-[#1A1A1A]"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />

                <button
                  disabled={status === "loading" || formData.name.length < 2}
                  className="w-full py-4 bg-[#CC1D24] text-white rounded-xl font-black uppercase tracking-[2px] text-[10px] shadow-lg shadow-red-600/20 disabled:bg-gray-200 disabled:shadow-none active:scale-95 transition-transform"
                >
                  {status === "loading" ? "Yuborilmoqda..." : "Tasdiqlash"}
                </button>
              </form>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 hover:text-[#CC1D24] transition-colors p-2"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
