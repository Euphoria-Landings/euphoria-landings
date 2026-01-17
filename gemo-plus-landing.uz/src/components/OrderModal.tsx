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

  const progress =
    (formData.name.length > 2 ? 50 : 0) +
    (formData.phone.length === 19 ? 50 : 0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setStatus("idle");
      setFormData({ name: "", phone: "" });
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
    const digitsOnly = formData.phone.replace(/\D/g, "");

    if (digitsOnly.length !== 12) {
      showNotice("Raqamni to'liq kiriting!");
      return;
    }

    setStatus("loading");

    const payload = {
      full_name: formData.name,
      phone_number: `+${digitsOnly}`,
      product_name: "Gemo Plus",
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_GEMOPLUS}/leads/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      // --- STATUS KODLARINI TEKSHIRISH ---
      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 4000);
      } else if (response.status === 429) {
        // --- 429 LIMIT LOGIKASI ---
        setStatus("idle");
        showNotice("Siz allaqachon ariza qoldirgansiz. Iltimos, 1 soatdan keyin qayta urinib ko'ring.");
      } else {
        // Boshqa server xatoliklari (400, 500 va h.k.)
        throw new Error();
      }
    } catch (error) {
      setStatus("idle");
      showNotice("Xatolik yuz berdi! Server bilan bog'lanib bo'lmadi.");
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

      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-[#1A1A1A]/80 backdrop-blur-xl">
        <div className="absolute inset-0" onClick={onClose} />

        <div className="relative w-full max-w-[500px] bg-white rounded-[50px] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Progress Bar (Tilla rangda) */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
            <div
              className="h-full bg-[#C5A358] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-8 md:p-12">
            {status === "success" ? (
              <div className="py-12 text-center">
                <div className="w-24 h-24 bg-[#C5A358] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#C5A358]/40 mx-auto mb-8">
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-[1000] text-[#1A1A1A] mb-4 uppercase italic">
                  Qabul qilindi!
                </h3>
                <p className="text-gray-500 font-bold max-w-[250px] mx-auto leading-relaxed uppercase text-[12px]">
                  Mutaxassislarimiz tez orada siz bilan bog'lanishadi.
                </p>
              </div>
            ) : (
              <div>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-[1000] italic tracking-tighter text-[#1A1A1A] uppercase">
                    GEMO
                    <span className="text-[#C5A358] underline decoration-4 underline-offset-4 decoration-[#C5A358]/20">
                      PLUS
                    </span>
                  </h2>
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-[4px] mt-3">
                    TABIIY PARVARISH VA QULAYLIK
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Ism kiritish */}
                  <div className="relative">
                    <div
                      className={`bg-gray-50 border-2 rounded-3xl overflow-hidden transition-all duration-200 ${
                        activeField === "name"
                          ? "border-[#C5A358]"
                          : "border-[#F3F4F6]"
                      }`}
                    >
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <input
                        required
                        type="text"
                        placeholder="Ismingiz"
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField(null)}
                        className="w-full pl-16 pr-6 py-5 bg-transparent outline-none font-bold text-[#1A1A1A] placeholder:text-gray-300"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Telefon raqami */}
                  <div className="relative">
                    <div
                      className={`bg-gray-50 border-2 rounded-3xl overflow-hidden transition-all duration-200 ${
                        activeField === "phone"
                          ? "border-[#C5A358]"
                          : "border-[#F3F4F6]"
                      }`}
                    >
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-300">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                      <input
                        required
                        type="tel"
                        inputMode="numeric"
                        placeholder="+998 (__) ___ __ __"
                        onFocus={() => setActiveField("phone")}
                        onBlur={() => setActiveField(null)}
                        className="w-full pl-16 pr-6 py-5 bg-transparent outline-none font-bold text-[#1A1A1A] placeholder:text-gray-300"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>

                  {/* Buyurtma berish tugmasi */}
                  <button
                    disabled={status === "loading" || progress < 100}
                    className="relative w-full py-6 bg-[#1A1A1A] rounded-3xl text-white font-black uppercase tracking-[3px] text-xs shadow-2xl shadow-gray-900/40 disabled:bg-gray-200 transition-all active:scale-[0.98] border-b-4 border-[#C5A358]/50"
                  >
                    {status === "loading"
                      ? "Yuborilmoqda..."
                      : "Buyurtma berish"}
                  </button>
                </form>

                <p className="text-center text-[9px] text-gray-400 mt-8 leading-relaxed px-4 uppercase font-bold tracking-tighter">
                  Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta
                  ishlashga rozilik bildirasiz
                </p>
              </div>
            )}
          </div>

          {/* Yopish tugmasi */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-gray-400 hover:bg-[#C5A358]/10 hover:text-[#C5A358] transition-all"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
