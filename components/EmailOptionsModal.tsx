
import React from "react";
import { Mail, Copy, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

export const EmailOptionsModal: React.FC<EmailOptionsModalProps> = ({
  isOpen,
  onClose,
  email,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    // You could add a toast notification here if desired
    onClose();
  };

  const options = [
    {
      name: "Default Email App",
      icon: <Mail className="w-5 h-5" />,
      action: () => window.open(`mailto:${email}`),
    },
    {
      name: "Gmail",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      action: () =>
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
          "_blank"
        ),
    },
    {
      name: "Outlook",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M1 18.002h7V5.998H1V18.002zM23 5.998h-8.286v12.004H23V5.998zM23 18.002h-8.286v1.998H23v-1.998zM14.714 5.998H6.994V3.999H14.714V5.998z" />
          <path d="M1 5.998h7V3.999H1V5.998z" />
        </svg>
      ),
      action: () =>
        window.open(
          `https://outlook.office.com/mail/deeplink/compose?to=${email}`,
          "_blank"
        ),
    },
    {
      name: "Yahoo Mail",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16.54 2.112c.506.14.767.8.536 1.25l-4.502 8.448v.01l-.01.018v8.665c0 .54-.45.912-1 .912-.55 0-1-.372-1-.912v-8.48l-.012-.02-4.56-8.733c-.23-.448.06-1.104.567-1.25.792-.228 1.15.53 1.15.53l3.66 7.432 3.6-7.382s.358-.758 1.15-.53z" />
        </svg>
      ),
      action: () =>
        window.open(`https://compose.mail.yahoo.com/?to=${email}`, "_blank"),
    },
    {
      name: "Copy Email Address",
      icon: <Copy className="w-5 h-5" />,
      action: copyToClipboard,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white dark:bg-zinc-900 rounded-2xl shadow-xl w-full max-w-sm overflow-hidden border border-gray-100 dark:border-zinc-800"
          >
            <div className="p-4 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-gray-50/50 dark:bg-zinc-900/50">
              <h3 className="font-semibold text-lg">Contact via</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            
            <div className="p-2 space-y-1">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    option.action();
                    onClose();
                  }}
                  className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors text-left group"
                >
                  <div className="p-2 rounded-lg bg-gray-50 dark:bg-zinc-950 text-gray-600 dark:text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                    {option.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors">
                    {option.name}
                  </span>
                  {option.name !== "Copy Email Address" && option.name !== "Default Email App" && (
                     null
                  )}
                </button>
              ))}
            </div>
            
            <div className="p-4 bg-gray-50/50 dark:bg-zinc-900/50 text-center text-xs text-gray-500 border-t border-gray-100 dark:border-zinc-800">
              Preferred email: {email}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
