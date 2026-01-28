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

  // --- DEVICE ID LOGIKASI (TO'LIQ HOLATDA) ---
  const getDeviceId = () => {
    if (typeof window === "undefined") return "";

    let deviceId = localStorage.getItem("device_id");
    if (!deviceId) {
      deviceId = crypto.randomUUID();
      localStorage.setItem("device_id", deviceId);
    }
    return deviceId;
  };

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
          headers: {
            "Content-Type": "application/json",
            // --- UNIQUE HEADER QO'SHILDI ---
            "X-Device-ID": getDeviceId(),
          },
          body: JSON.stringify({
            full_name: formData.name,
            phone_number: `+${digitsOnly}`,
            product_name: "Diastop",
          }),
        },
      );

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3000);
      } else if (response.status === 429) {
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
        message: "Server bilan bog'lanishda xatolik!",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1A1A1A]/95 backdrop-blur-md">
      <Snackbar
        isVisible={snackbar.isVisible}
        message={snackbar.message}
        onClose={() => setSnackbar({ ...snackbar, isVisible: false })}
      />

      <div className="relative w-full max-w-[420px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/10">
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
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
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
              <h3 className="text-2xl font-black text-[#1A1A1A] uppercase italic leading-none">
                QABUL QILINDI!
              </h3>
              <p className="text-gray-400 text-[10px] font-bold uppercase mt-3 tracking-[2px]">
                Mutaxassisimiz tez orada bog'lanadi
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-[1000] italic tracking-tighter text-[#1A1A1A] uppercase flex items-center justify-center">
                  <span>DIA</span>
                  <span className="text-[#CC1D24]">ST</span>
                  <span className="relative inline-block text-[#CC1D24]">
                    O
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[2px] md:h-[3px] bg-[#e00707] rotate-[-45deg] rounded-full"></span>
                  </span>
                  <span className="text-[#CC1D24]">P</span>
                </h2>
                <p className="text-gray-400 text-[8px] font-black uppercase tracking-[3px] mt-3 opacity-60">
                  Ma'lumotlaringizni qoldiring
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Ismingiz"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CC1D24]/20 focus:bg-white transition-all outline-none font-bold text-[#1A1A1A] text-sm"
                  value={formData.name}
                  onChange={handleNameChange}
                />

                <input
                  required
                  type="tel"
                  placeholder="+998 (__) ___ __ __"
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:border-[#CC1D24]/20 focus:bg-white transition-all outline-none font-bold text-[#1A1A1A] text-sm"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                />

                <button
                  disabled={status === "loading" || formData.name.length < 2}
                  className="w-full py-5 bg-[#CC1D24] text-white rounded-2xl font-black uppercase tracking-[3px] text-[10px] shadow-xl shadow-red-600/20 disabled:bg-gray-200 disabled:shadow-none active:scale-95 transition-all mt-4"
                >
                  {status === "loading" ? "YUBORILMOQDA..." : "BUYURTMA BERISH"}
                </button>
              </form>
            </>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-300 hover:text-[#CC1D24] transition-colors p-2"
        >
          <svg
            width="20"
            height="20"
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
