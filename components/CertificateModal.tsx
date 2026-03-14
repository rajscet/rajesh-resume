import React, { useState, useEffect } from "react";
import { X, Lock, Unlock, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Certificate {
  name: string;
  url: string;
  type: "pdf" | "image";
}

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificate: Certificate | null;
}

export function CertificateModal({
  isOpen,
  onClose,
  certificate,
}: CertificateModalProps) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState(false);

  // Reset state when modal opens/closes or certificate changes
  useEffect(() => {
    if (!isOpen) {
      setPassword("");
      setIsUnlocked(false);
      setError(false);
    }
  }, [isOpen]); 

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!isOpen || !certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl w-full ${
            isUnlocked ? "max-w-4xl h-[80vh]" : "max-w-sm"
          } overflow-hidden border border-gray-200 dark:border-zinc-800 transition-all duration-300 flex flex-col`}
        >
          {/* Header */}
          <div className="p-4 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-gray-50/50 dark:bg-zinc-900/50 shrink-0">
            <div className="flex items-center gap-2">
              {isUnlocked ? (
                <Unlock className="w-5 h-5 text-green-500" />
              ) : (
                <Lock className="w-5 h-5 text-amber-500" />
              )}
              <h3 className="font-semibold text-lg truncate max-w-[200px] sm:max-w-md">
                {certificate.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-auto p-4 flex flex-col">
            {!isUnlocked ? (
              <form onSubmit={handleUnlock} className="space-y-4 py-4">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-8 h-8 text-amber-600 dark:text-amber-500" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    This document is password protected.
                  </p>
                </div>

                <div className="space-y-2">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    placeholder="Enter password"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-white dark:bg-zinc-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    autoFocus
                  />
                  {error && (
                    <p className="text-sm text-red-500 font-medium ml-1">
                      Incorrect password
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 bg-slate-900 text-white dark:bg-white dark:text-black cursor-pointer"
                >
                  <Unlock className="w-4 h-4" />
                  Unlock Document
                </button>
              </form>
            ) : (
              <div className="flex-1 w-full h-full flex flex-col bg-gray-50 dark:bg-zinc-950 rounded-lg overflow-hidden border border-gray-100 dark:border-zinc-800">
                 {certificate.type === "image" ? (
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={certificate.url}
                      alt={certificate.name}
                      className="max-w-full max-h-full object-contain rounded shadow-sm"
                    />
                  </div>
                ) : (
                  <iframe
                    src={certificate.url}
                    className="w-full h-full"
                    title={certificate.name}
                  />
                )}
                 <div className="p-2 border-t border-gray-100 dark:border-zinc-800 flex justify-end bg-white dark:bg-zinc-900">
                    <a 
                        href={certificate.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium"
                    >
                        <ExternalLink className="w-3 h-3"/> Open in new tab
                    </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
