"use client";

import { motion } from "framer-motion";
import { Jersey_25 } from "next/font/google";

const nameFont = Jersey_25({
  subsets: ["latin"],
  weight: "400",
});

export function Name() {
  return (
    <motion.h1
      initial={{ opacity: 1, y: -250 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.95, duration: 0.4, ease: "easeOut" }}
      className="rounded-lg border-3 border-amber-50 bg-white/50 w-[65%] h-[25%] flex items-center justify-center text-center"
    >
      <div
        className={`${nameFont.className} text-9xl font-semibold`}
        style={{ textShadow: "5px 5px 2px rgb(21, 22, 16)" }}
      >
        Donathan Truong{" "}
      </div>
    </motion.h1>
  );
}
