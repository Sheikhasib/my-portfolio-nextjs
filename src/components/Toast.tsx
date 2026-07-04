"use client";
import { useEffect, useState, createContext, useContext, useCallback } from "react";

type ToastContextType = { show: (msg: string) => void };
const ToastContext = createContext<ToastContextType>({ show: () => {} });
export const useToast = () => useContext(ToastContext);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(() => setMsg(null), 2600);
    return () => clearTimeout(t);
  }, [msg]);

  const show = useCallback((m: string) => setMsg(m), []);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {msg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] bp-card font-mono text-sm text-ink px-5 py-2.5 shadow-2xl border-amber">
          {msg}
        </div>
      )}
    </ToastContext.Provider>
  );
}
