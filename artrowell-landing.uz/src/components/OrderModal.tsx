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

  // --- QURILMA IDsini OLISH YOKI YARATISH ---
  const getDeviceId = () => {
    if (typeof window === "undefined") return ""; // Server-side rendering uchun himoya

    let deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      // Yangi UUID yaratish
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

  // Ism kiritish validatsiyasi
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁсС\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  // Telefon raqami maskasi (+998 formatida)
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
      phone_number: `+${digitsOnly}`, // Backendga "+" bilan yuborish
      product_name: "Artrowell",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/leads/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // --- X-DEVICE-ID HEADER QO'SHILDI ---
            "X-Device-ID": getDeviceId(),
          },
          body: JSON.stringify(payload),
        },
      );

      // --- STATUS KODLARINI TEKSHIRISH ---
      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3500);
      } else if (response.status === 429) {
        // --- 429 LIMIT LOGIKASI ---
        setStatus("idle");
        showNotice(
          "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.",
        );
      } else {
        // Boshqa server xatoliklari (400, 500 va h.k.)
        throw new Error();
      }
    } catch (error) {
      setStatus("idle");
      showNotice("Xatolik! Server bilan bog'lanib bo'lmadi.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0F0F0F]/90 backdrop-blur-md">
      <Snackbar
        isVisible={snackbar.isVisible}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />

      <div className="relative w-full max-w-[450px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/10">
        {/* Progress Line */}
        <div
          className={`h-1.5 w-full transition-all duration-500 ${
            formData.name.length > 2 && formData.phone.length > 18
              ? "bg-[#CC1D24]"
              : "bg-gray-100"
          }`}
        />

        <div className="p-8 md:p-12">
          {status === "success" ? (
            <div className="py-10 text-center animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-200">
                <svg
                  width="40"
                  height="40"
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
              <h3 className="text-2xl font-[1000] text-[#1A1A1A] uppercase italic">
                Muvaffaqiyatli!
              </h3>
              <p className="text-gray-400 text-[11px] font-black uppercase tracking-[2px] mt-3 leading-tight">
                Buyurtmangiz qabul qilindi. <br /> Operatorlarimiz tez orada
                bog'lanishadi.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-[1000] italic tracking-tighter text-[#1A1A1A] uppercase leading-none">
                  ARTRO<span className="text-[#CC1D24]">WELL</span>
                </h2>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-[3px] mt-3">
                  Konsultatsiya va Buyurtma
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <input
                    required
                    type="text"
                    inputMode="text"
                    placeholder="To'liq ismingiz"
                    className="w-full px-7 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CC1D24] focus:bg-white transition-all outline-none font-bold text-[#1A1A1A] text-sm"
                    value={formData.name}
                    onChange={handleNameChange}
                  />
                </div>

                <div className="space-y-1">
                  <input
                    required
                    type="tel"
                    inputMode="tel"
                    placeholder="+998 (__) ___ __ __"
                    className="w-full px-7 py-5 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CC1D24] focus:bg-white transition-all outline-none font-bold text-[#1A1A1A] text-sm"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>

                <button
                  disabled={status === "loading" || formData.name.length < 2}
                  className="w-full py-5 bg-[#CC1D24] text-white rounded-2xl font-[1000] uppercase tracking-[3px] text-[11px] shadow-xl shadow-red-600/20 disabled:bg-gray-200 disabled:shadow-none active:scale-[0.98] transition-all mt-4"
                >
                  {status === "loading"
                    ? "Yuborilmoqda..."
                    : "Buyurtmani tasdiqlash"}
                </button>

                <p className="text-center text-gray-300 text-[8px] font-bold uppercase tracking-[1px] mt-4">
                  * Ma'lumotlaringiz xavfsizligi kafolatlanadi
                </p>
              </form>
            </>
          )}
        </div>

        {/* Yopish tugmasi */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-[#CC1D24] transition-all p-2 hover:rotate-90 duration-300"
          aria-label="Yopish"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
