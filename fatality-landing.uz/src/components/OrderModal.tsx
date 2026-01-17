"use client";
import React, { useState, useEffect } from "react";
import { User, Phone, X, Check, AlertCircle } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error" | "limit"
  >("idle");
  const [activeField, setActiveField] = useState<"name" | "phone" | null>(null);

  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/leads/`;

  const progress =
    (formData.name.length > 2 ? 50 : 0) +
    (formData.phone.replace(/\D/g, "").length === 12 ? 50 : 0);

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
    if (value.length > 0 && !value.startsWith("998")) value = "998" + value;
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

    if (digitsOnly.length !== 12) return;

    setStatus("loading");

    const payload = {
      full_name: formData.name,
      phone_number: `+${digitsOnly}`, // Backendga "+" bilan ketmoqda
      product_name: "Fatality",
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3500);
      } else if (response.status === 429) {
        setStatus("limit");
      } else {
        // 400 yoki boshqa xatolar uchun
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
      />

      <div className="relative w-full max-w-[460px] bg-white rounded-[35px] shadow-2xl overflow-hidden">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-100">
          <div
            className={`h-full transition-all duration-300 ${
              status === "limit" || status === "error"
                ? "bg-red-500"
                : "bg-[#E91E63]"
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="p-8 md:p-12">
          {status === "success" ? (
            <SuccessView />
          ) : status === "limit" ? (
            <LimitView />
          ) : (
            <div>
              <div className="text-center mb-8">
                <div className="flex items-center justify-center text-4xl font-[1000] italic uppercase tracking-tighter">
                  <span className="text-black">FATA</span>
                  <span className="text-[#E91E63]">LITY</span>
                </div>
                <p className="mt-2 text-[10px] font-black uppercase tracking-[3px] text-slate-400">
                  ARIZA QOLDIRISH
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div
                  className={`flex items-center bg-slate-50 border-2 rounded-2xl transition-all ${
                    activeField === "name"
                      ? "border-[#E91E63] bg-white"
                      : "border-slate-100"
                  }`}
                >
                  <span
                    className={`pl-5 ${
                      activeField === "name"
                        ? "text-[#E91E63]"
                        : "text-slate-300"
                    }`}
                  >
                    <User size={20} />
                  </span>
                  <input
                    required
                    type="text"
                    placeholder="ISMINGIZ"
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-4 py-5 bg-transparent outline-none font-bold text-black text-sm"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div
                  className={`flex items-center bg-slate-50 border-2 rounded-2xl transition-all ${
                    activeField === "phone"
                      ? "border-[#E91E63] bg-white"
                      : "border-slate-100"
                  }`}
                >
                  <span
                    className={`pl-5 ${
                      activeField === "phone"
                        ? "text-[#E91E63]"
                        : "text-slate-300"
                    }`}
                  >
                    <Phone size={20} />
                  </span>
                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    placeholder="+998 (__) ___ __ __"
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField(null)}
                    className="w-full px-4 py-5 bg-transparent outline-none font-bold text-black text-sm tracking-wider"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>

                <button
                  disabled={status === "loading" || progress < 100}
                  className={`w-full mt-4 py-5 rounded-2xl font-black uppercase tracking-widest text-[12px] italic transition-all ${
                    status === "error" ? "bg-red-600" : "bg-black"
                  } text-white disabled:bg-slate-200 disabled:text-slate-400 active:scale-95`}
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
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-50 text-slate-400"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

function LimitView() {
  return (
    <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 animate-bounce shadow-lg">
        <AlertCircle size={40} strokeWidth={3} />
      </div>
      <h3 className="text-2xl font-[1000] text-black mb-3 uppercase italic leading-none">
        LIMITGA YETDINGIZ!
      </h3>
      <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-relaxed">
        Siz allaqachon ariza qoldirgansiz. <br /> Iltimos,{" "}
        <span className="text-red-500">1 soatdan keyin</span> <br /> qayta
        urinib ko'ring.
      </p>
    </div>
  );
}

function SuccessView() {
  return (
    <div className="py-8 text-center animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-[#E91E63] rounded-3xl flex items-center justify-center text-white mx-auto mb-8 rotate-[-6deg] shadow-lg">
        <Check size={40} strokeWidth={4} />
      </div>
      <h3 className="text-3xl font-black text-black mb-3 uppercase italic leading-none">
        MUVAFFAQIYAT!
      </h3>
      <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest leading-relaxed">
        Operatorlarimiz tez orada <br /> aloqaga chiqishadi.
      </p>
    </div>
  );
}
