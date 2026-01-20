import { motion } from "framer-motion";
import { Jersey_10 } from "next/font/google";
import Image from "next/image";

const font = Jersey_10({ subsets: ["latin"], weight: "400" });

export default function About() {
  return (
    <motion.div
      className="absolute inset-0 z-10"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: 25 }}
    >
      <div className="absolute top-[-15.5%] left-[12.4%]">
        <p
          className={`
            ${font.className}
            text-[clamp(0px,7.2vw,104px)] tracking-wide
            bg-gradient-to-r from-teal-700 via-sky-700 to-indigo-700
            bg-clip-text text-transparent
          `}
        >
          About
        </p>
      </div>
      <div className="absolute top-[-17.5%] left-[13%]">
        <p
          className={`${font.className} tracking-wide text-white text-lg text-[clamp(0px,7.2vw,104px)]`}
        >
          About
        </p>
      </div>
      <div
        className={`${font.className} absolute w-[70%] text-white leading-tight tracking-wide h-[70%] top-[24%] left-[15%] text-[clamp(0px,1.5vw,22px)] [text-shadow:-2px_2px_1px_rgba(0,0,0,1)]`}
      >
        <p>
          Hi I'm Donathan, and I think programming is pretty cool. I love art,
          video games, music, and a good story; to me, programming is the
          multimedia form that combines it all, the modern medium of choice for
          hypercreative self-expression.
        </p>
        <p className="pt-[3%]">
          Right now, I'm a sophomore at Cornell University studying Computer
          Science. I do mostly backend, but I really love art & design as well.
          Let's build something cool together!
        </p>
      </div>
    </motion.div>
  );
}
