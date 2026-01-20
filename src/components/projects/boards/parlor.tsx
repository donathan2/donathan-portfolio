import Image from "next/image";
import { motion } from "framer-motion";
import { Tiny5 } from "next/font/google";
import { Jersey_10 } from "next/font/google";

const font = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

const subfont = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function Parlor() {
  return (
    <motion.div
      className={`${font.className} absolute z-52 left-1/2 top-1/2 translate-x-[-12vw] -translate-y-1/2 w-[58vw] h-[88vh] text-center text-[2.4vw] [shadow:2px_2px_1px_rgba(0,0,0,0.8)]`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: 0.1 }}
    >
      <Image
        className="absolute z-10"
        src="/display/parlor-info.png"
        alt="parlor info"
        fill
        unoptimized
      ></Image>
      <div className="absolute z-20 w-[14vw] h-[7vh] line-clamp-1 text-[4vh] bg-indigo-900 border-white border-[3px] translate-x-[9vw] translate-y-[19vh] flex items-center justify-center">
        <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-violet-200 bg-clip-text text-transparent font-bold w-full">
          Pixel Parlor
        </span>
      </div>
      <div className="absolute z-20 w-[24%] h-[24vh] bg-blue-400 border-white border-[2px] translate-x-[9vw] translate-y-[28vh]">
        <p
          className={`${font.className} text-[1.65vh] p-[3px] text-black line-clamp-9`}
        >
          Pixel Parlor is a bright, lighthearted simulation where you're tasked
          with crafting the perfect frozen treats customers order. Each order
          presents a unique challenge, requiring you to select the correct base,
          scoop the right flavors, and add just the right toppings to satisfy
          your customer's cravings.
        </p>
      </div>
      <div className="absolute z-20 w-[43%] h-[29%] bg-indigo-800 border-white border-[2px] translate-x-[24vw] translate-y-[46vh]">
        <p
          className={`${font.className} text-[1.65vh] p-[5px] text-white line-clamp-5`}
        >
          With playful sound effects and a variety of possible outcomes, Pixel
          Parlor encourages fun experimentation! Whether you're aiming for a
          flawless order or just having fun with wild combinations, the game
          offers a charming and engaging way to test your precision and
          creativity.
        </p>
        <p
          className={`${font.className} text-[1.65vh] p-[5px] text-white line-clamp-4`}
        >
          Strangely enough, this project was done in React & Typescript. The
          game originally was designed to fit into my old website and wasn't
          planned to be a full-fledged project. However, I have plans to
          transition to a more suitable game engine in the future.
        </p>
      </div>

      <a
        href="https://github.com/donathan2/old-portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 w-[22%] h-[8%] text-[4vh] text-white [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[9.5vw] translate-y-[54vh] bg-indigo-300 rounded-[20px] border-[2px] border-white flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full flex items-center line-clamp-1 justify-center"
        >
          <p className={`${subfont.className}`}>Visit Repo</p>
        </motion.div>
      </a>

      <a
        href="https://natsume.dev/adventure/ice-cream"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-20 w-[22%] h-[8%] text-[4vh] text-white [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)] translate-x-[9.5vw] translate-y-[63vh] bg-indigo-500 rounded-[20px] border-[2px] border-white flex items-center justify-center"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-full h-full flex items-center line-clamp-1  justify-center"
        >
          <p className={`${subfont.className}`}>Play!</p>
        </motion.div>
      </a>

      <div className="z-20 border-blue-200 border-[0.15vw] w-[43%] h-[28%] absolute translate-x-[24vw] translate-y-[19vh]">
        <video
          src="/videos/parlor-demo.mp4"
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
