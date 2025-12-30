"use client";

import { motion } from "framer-motion";
import { Jersey_10 } from "next/font/google";
import { Tiny5 } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const nameFont = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

const subFont = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

export function Name() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Detect Safari (not Chrome or Firefox)
    const ua = typeof window !== "undefined" ? window.navigator.userAgent : "";
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      videoRef.current?.play();
    }, 1300); // delay in ms (match your motion delay if you want)

    return () => clearTimeout(id);
  }, []);

  return (
    <motion.h1
      initial={{ opacity: 1, y: "-50vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.7,
        type: "spring",
        damping: 20,
        stiffness: 70,
      }}
      className="relative w-[70vw] h-[40vw] top-[-10.8vw] flex items-center justify-center text-center"
    >
      <video
        ref={videoRef}
        src={isSafari ? "/animations/name-safari.mov" : "/animations/name.webm"}
        muted
        playsInline
        preload="auto"
        className="w-auto"
        onEnded={(e) => e.currentTarget.pause()}
        draggable={false}
      />
      <motion.div
        className={`absolute ${nameFont.className} text-[7vw] translate-y-[0.25vw] [text-shadow:3px_3px_1px_rgba(0,0,0,1.0)] text-amber-200`}
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.45 }}
      >
        Donathan Truong
      </motion.div>
      <motion.div
        className={`absolute ${subFont.className} text-[1.2vw] translate-y-[4.5vw] [text-shadow:0.5px_0.5px_1px_rgba(0,0,0,1.0)] text-orange-100`}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.45 }}
      >
        Software Engineer | Full Stack Developer | Visual Designer
      </motion.div>
    </motion.h1>
  );
}
