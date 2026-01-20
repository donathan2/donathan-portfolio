import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Window from "./window";
import { Micro_5 } from "next/font/google";

const font = Micro_5({
  subsets: ["latin"],
  weight: "400",
});

export default function Bio() {
  const [opened, setOpened] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ua = window.navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      videoRef.current?.play();
    }, 1900);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="relative w-[38vw] max-w-[550px] min-w-[300px] aspect-[2/1]">
      {/* Entrance animation */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.4 }}
        className="absolute inset-0"
      >
        {/* Interaction animation */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.1, rotateX: 35 }}
          transition={{ duration: 0.15 }}
          onClick={() => setOpened((o) => !o)}
          className={`
            absolute inset-0
            ${font.className}
            text-[4.8vw]
            cursor-pointer
          `}
        >
          <video
            ref={videoRef}
            src={
              isSafari
                ? "/animations/bio-button-safari.mov"
                : "/animations/bio-button.webm"
            }
            muted
            playsInline
            loop
            preload="auto"
            className="absolute inset-0 object-cover rounded"
            draggable={false}
          />

          <span className="absolute text-white text-[clamp(50px,6.25vw,90px)] inset-0 flex translate-y-[0.45em] items-center justify-center [text-shadow:4px_4px_1px_rgba(0,0,0,0.7)] pointer-events-none">
            ABOUT
          </span>
        </motion.button>
      </motion.div>

      {opened && <Window setOpened={setOpened} />}
    </div>
  );
}
