import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Micro_5 } from "next/font/google";
import Window from "./window";

const font = Micro_5({
  subsets: ["latin"],
  weight: "400",
});

export default function Bio() {
  const [opened, setOpened] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ua = typeof window !== "undefined" ? window.navigator.userAgent : "";
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      videoRef.current?.play();
    }, 1900); // delay in ms
    return () => clearTimeout(id);
  }, []);
  return (
    <motion.div
      className="w-full h-full"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 1.8 }}
    >
      <motion.div
        className={` ${font.className} text-[4.8vw] absolute top-[24vw] text-center translate-x-[-1vw]`}
        onClick={() => {
          setOpened((opened) => !opened);
        }}
        whileHover={{ scale: 1.1, rotateX: 35 }}
      >
        <div className="w-[28vw] h-[14vw] relative">
          <video
            ref={videoRef}
            src={
              isSafari
                ? "/animations/bio-button-safari.mov"
                : "/animations/bio-button.webm"
            }
            autoPlay={false}
            muted
            playsInline
            loop
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover translate-y-[-10.9vh] rounded"
            draggable={false}
          />
          <p className="absolute w-full left-0 text-center [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] z-10 pointer-events-none">
            BIO
          </p>
        </div>
      </motion.div>
      {opened && <Window setOpened={setOpened}></Window>}
    </motion.div>
  );
}
