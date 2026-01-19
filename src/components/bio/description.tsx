import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import About from "./overlays/about";

export default function Description() {
  return (
    <div className="relative w-full h-full rounded-lg ">
      {/* Base image (never changes) */}
      <Image
        src="/display/bio-base.png"
        alt="bio display"
        fill
        unoptimized
        className="object-cover pointer-events-none"
      />
      <AnimatePresence mode="wait">
        <About></About>
      </AnimatePresence>
    </div>
  );
}
