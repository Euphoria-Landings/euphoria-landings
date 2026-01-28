"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle, CheckCircle2 } from "lucide-react";

/**
 * @param {boolean} isVisible - Ko'rinish holati
 * @param {string} message - Ko'rsatiladigan xabar
 * @param {string} type - 'error' yoki 'success'
 * @param {function} onClose - Yopish funksiyasi
 */
export const Snackbar = ({ isVisible, message, type = "error", onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, x: "-50%", scale: 0.9 }}
          animate={{ opacity: 1, y: 20, x: "-50%", scale: 1 }}
          exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.9 }}
          className="fixed top-0 left-1/2 z-[9999] w-[90%] max-w-[400px]"
        >
          <div
            className={`bg-white border-2 ${type === "success" ? "border-green-500/20" : "border-red-500/20"} shadow-[0_20px_40px_rgba(0,0,0,0.15)] backdrop-blur-md rounded-2xl p-4 flex items-center gap-3 relative overflow-hidden`}
          >
            {/* Ikonka bloki */}
            <div
              className={`flex-shrink-0 w-10 h-10 ${type === "success" ? "bg-green-50" : "bg-red-50"} rounded-full flex items-center justify-center`}
            >
              {type === "success" ? (
                <CheckCircle2 className="text-green-500" size={20} />
              ) : (
                <AlertCircle className="text-red-500" size={20} />
              )}
            </div>

            {/* Xabar matni */}
            <div className="flex-grow">
              <p className="text-slate-800 text-sm font-bold leading-tight">
                {message}
              </p>
            </div>

            {/* Yopish tugmasi */}
            <button
              onClick={onClose}
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-slate-400"
            >
              <X size={18} />
            </button>

            {/* Pastki progress bar */}
            <motion.div
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration: 4, ease: "linear" }}
              className={`absolute bottom-0 left-0 h-1 ${type === "success" ? "bg-green-500/30" : "bg-red-500/30"} rounded-full`}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
