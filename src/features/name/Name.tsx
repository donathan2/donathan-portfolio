"use client";

import { SunriseSlider } from "@/components/home/slider";
import { motion } from "framer-motion";
import { Jersey_10, Tiny5 } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const nameFont = Jersey_10({ subsets: ["latin"], weight: "400" });
const subFont = Tiny5({ subsets: ["latin"], weight: "400" });

export function Name({
  setFrame,
  framesCount,
  frame,
}: {
  setFrame: (n: number) => void;
  framesCount: number;
  frame: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    const ua = typeof window !== "undefined" ? window.navigator.userAgent : "";
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      videoRef.current?.play();
    }, 1300);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, type: "spring", damping: 20, stiffness: 70 }}
      className="relative w-[clamp(500px,78vw,1124px)] aspect-[16/6]"
    >
      {/* Video backdrop */}
      <video
        ref={videoRef}
        src={isSafari ? "/animations/name-safari.mov" : "/animations/name.webm"}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 object-contain object-[50%_0%] w-full h-full object-contain pointer-events-none"
        draggable={false}
      />

      {/* Main name */}
      <motion.div
        className={`
          absolute left-1/2 top-[35%]
          -translate-x-1/2 -translate-y-1/2
          ${nameFont.className}
          text-[clamp(2rem,8.0vw,116px)]
          text-amber-200
          [text-shadow:3px_3px_1px_rgba(0,0,0,1)]
          w-[90%] max-w-[800px]
    text-center
        `}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.45 }}
      >
        Donathan Truong
      </motion.div>

      {/* Subtitle */}
      <motion.div
        className={`
          absolute left-1/2 top-[50%]
          -translate-x-1/2
          ${subFont.className}
          text-[clamp(0.2rem,1.4vw,1.2rem)]
          text-orange-100
          [text-shadow:0.5px_0.5px_1px_rgba(0,0,0,1)]
          w-[90%] max-w-[900px]
    text-center
        `}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.45 }}
      >
        Software Engineering & Design
      </motion.div>
      <div className="overflow-visible z-50 absolute top-[10.8%] right-[25%]">
        <SunriseSlider
          setFrame={setFrame}
          framesCount={framesCount}
          frame={frame}
        />
      </div>
    </motion.div>
  );
}
