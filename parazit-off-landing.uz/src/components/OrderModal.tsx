"use client";
import React, { useState, useEffect } from "react";
import { User, Phone, X, Check } from "lucide-react";
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
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);

  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Server bilan bog'lanishda xatolik!",
  );

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

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/leads/`;

  const progress =
    (formData.name.length > 2 ? 50 : 0) +
    (formData.phone.replace(/\D/g, "").length === 12 ? 50 : 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setShowError(false);
      setFormData({ name: "", phone: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  // Ism kiritish: Faqat harflar (Lotin va Kirill)
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, "");
    setFormData({ ...formData, name: value });
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (!value.startsWith("998")) value = "998" + value;
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
    setStatus("loading");
    setShowError(false);

    const cleanPhone = formData.phone.replace(/\D/g, "");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // --- HEADER INTEGRATSIYASI ---
          "X-Device-ID": getDeviceId(),
        },
        body: JSON.stringify({
          full_name: formData.name,
          phone_number: `+${cleanPhone}`,
          product_name: "ParazitOFF",
        }),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 4000);
      } else if (response.status === 429) {
        setStatus("error");
        setErrorMessage(
          "Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.",
        );
        setShowError(true);
        setTimeout(() => {
          setStatus("idle");
          setShowError(false);
        }, 5000);
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Server bilan bog'lanishda xatolik!");
      setShowError(true);
      setTimeout(() => {
        setStatus("idle");
        setShowError(false);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-[#002D25]/90 backdrop-blur-md">
      <Snackbar
        isVisible={showError}
        message={errorMessage}
        onClose={() => setShowError(false)}
      />

      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-[480px] bg-white rounded-[45px] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <div
            className={`h-full transition-all duration-300 ${
              status === "error" ? "bg-red-500" : "bg-[#8BC34A]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 md:p-12">
          {status === "success" ? (
            <div className="py-12 text-center">
              <div className="w-24 h-24 bg-[#8BC34A] rounded-[30px] flex items-center justify-center text-white shadow-2xl shadow-green-500/40 mx-auto mb-8 rotate-[10deg]">
                <Check size={48} strokeWidth={4} />
              </div>
              <h3 className="text-3xl font-[1000] text-[#004D40] mb-4 uppercase tracking-tighter">
                Qabul qilindi!
              </h3>
              <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight opacity-80">
                Mutaxassislarimiz tez orada <br /> siz bilan bog'lanishadi.
              </p>
            </div>
          ) : (
            <div>
              <div className="text-center mb-10">
                <div className="flex items-center justify-center text-3xl md:text-4xl font-[1000] tracking-tighter uppercase">
                  <span className="text-[#004D40]">Parazit</span>
                  <span className="text-[#8BC34A] italic ml-1">OFF</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-5 mb-2 block tracking-[2px]">
                    Ismingiz:
                  </label>
                  <div
                    className={`relative flex items-center bg-slate-50 border-2 rounded-[22px] transition-all ${
                      activeField === "name"
                        ? "border-[#8BC34A] bg-white"
                        : "border-slate-100"
                    }`}
                  >
                    <span className="pl-6 text-slate-300">
                      <User size={20} strokeWidth={2.5} />
                    </span>
                    <input
                      required
                      type="text"
                      placeholder="Ismingizni kiriting"
                      onFocus={() => setActiveField("name")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-5 bg-transparent outline-none font-bold text-[#004D40] text-sm"
                      value={formData.name}
                      onChange={handleNameChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase ml-5 mb-2 block tracking-[2px]">
                    Telefon:
                  </label>
                  <div
                    className={`relative flex items-center bg-slate-50 border-2 rounded-[22px] transition-all ${
                      activeField === "phone"
                        ? "border-[#8BC34A] bg-white"
                        : "border-slate-100"
                    }`}
                  >
                    <span className="pl-6 text-slate-300">
                      <Phone size={20} strokeWidth={2.5} />
                    </span>
                    <input
                      required
                      type="tel"
                      inputMode="numeric"
                      placeholder="+998 (__) ___ __ __"
                      onFocus={() => setActiveField("phone")}
                      onBlur={() => setActiveField(null)}
                      className="w-full px-4 py-5 bg-transparent outline-none font-[1000] text-[#004D40] text-sm tracking-wider"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                    />
                  </div>
                </div>

                <button
                  disabled={status === "loading" || progress < 100}
                  className={`w-full py-6 rounded-[24px] font-black uppercase tracking-[4px] text-[12px] shadow-2xl transition-all active:scale-95 ${
                    status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#004D40] text-white shadow-green-900/20"
                  } disabled:bg-slate-100 disabled:text-slate-300`}
                >
                  {status === "loading"
                    ? "YUBORILMOQDA..."
                    : status === "error"
                      ? "XATOLIK!"
                      : "BUYURTMA BERISH"}
                </button>
              </form>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400 hover:text-red-500 transition-all"
        >
          <X size={20} strokeWidth={3} />
        </button>
      </div>
    </div>
  );
}
