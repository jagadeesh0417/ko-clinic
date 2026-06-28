"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.random() * 15;
      if (start > 100) {
        start = 100;
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500);
      }
      setProgress(Math.min(start, 100));
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#241710]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.span
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="font-heading text-6xl md:text-8xl font-bold text-[#F6F0EA] tracking-[0.15em]"
            >
              KO{" "}
              <span className="champagne-text">CLINIC</span>
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="mt-12 h-[2px] max-w-[200px] w-full bg-[rgba(214,183,135,0.15)] rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-gradient-to-r from-[#D6B787] to-[#C5A067] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-button text-[10px] uppercase tracking-[0.2em] text-[#8E7C6E]"
          >
            {Math.round(progress)}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
