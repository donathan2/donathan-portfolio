import Image from "next/image";
import { motion } from "framer-motion";
import { Tiny5 } from "next/font/google";
import { Press_Start_2P } from "next/font/google";
import { Jersey_10 } from "next/font/google";

const font = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

const bitfont = Press_Start_2P({
  subsets: ["latin"],
  weight: "400",
});

const subfont = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function Cameldew() {
  return (
    <motion.div
      className={`${font.className} absolute z-52 left-1/2 top-1/2 translate-x-[-12vw] -translate-y-1/2 w-[58vw] h-[88vh] text-center text-[2.4vw] [shadow:2px_2px_1px_rgba(0,0,0,0.8)]`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: 0.1 }}
    >
      <Image
        className="absolute z-10"
        src="/display/cameldew-info.png"
        alt="bitbridge info"
        fill
        unoptimized
      ></Image>
      <div className="absolute z-20 w-[17vw] h-[8vh] line-clamp-1 text-[4vh] bg-green-900 border-white border-[3px] [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[33vw] translate-y-[18vh]">
        <p className="translate-y-[0.5vh] text-white">Cameldew Valley</p>
      </div>
      <div className="absolute z-20 w-[40%] h-[24vh] bg-green-600 border-white border-[2px] translate-x-[9vw] translate-y-[46vh]">
        <p
          className={`${font.className} text-[1.65vh] p-[3px] text-white line-clamp-9`}
        >
          Explore Cameldew Valley! Players move around a two-dimensional grid,
          plant seeds on soil tiles, and harvest rops as they reach maturity.
          Each crop type features distinct growth rates and buy/sell prices. The
          player begins with a limited number of coins and can purchase
          additional seeds from an in-world shop. As crops grow, mature, and are
          sold, the player expands their inventory and overall wealth. The goal
          is to accumulate as many coins as possible before the game timer
          expires.
        </p>
      </div>
      <div className="absolute z-20 w-[17vw] h-[18.5%] bg-lime-400 border-white border-[2px] translate-x-[33vw] translate-y-[28vh]">
        <p
          className={`${font.className} text-[1.65vh] p-[3px] text-black line-clamp-6`}
        >
          Cameldew Valley is built on OCaml and Raylib. The game was made as
          part of my functional programming course's final project with my
          group! Every graphic was hand-drawn and curated for a cohesive,
          charming aesthetic resembling Stardew Valley.
        </p>
      </div>

      <a
        href="https://github.com/alexstrugacz/cameldew-valley"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 w-[22%] h-[8%] text-[4vh] text-white [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[35vw] translate-y-[49vh] bg-lime-300 rounded-[20px] border-[2px] border-white flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full flex items-center line-clamp-1 justify-center"
        >
          <p className={`${subfont.className}`}>Visit Repo</p>
        </motion.div>
      </a>

      <a
        href="https://youtu.be/Tkijs_KXHkA?si=E9cDq-3fZpzLtISW"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 w-[22%] h-[8%] text-[4vh] text-white [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[35vw] translate-y-[59vh] bg-lime-500 rounded-[20px] border-[2px] border-white flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full flex items-center line-clamp-1  justify-center"
        >
          <p className={`${subfont.className}`}>Watch Demo!</p>
        </motion.div>
      </a>

      <div className="z-20 border-gray-600 border-[0.15vw] w-[40%] h-[30%] absolute translate-x-[9vw] translate-y-[18vh]">
        <video
          src="/videos/cameldew-demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover z-20"
          draggable={false}
        />
      </div>
    </motion.div>
  );
}
