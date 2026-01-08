import { motion } from "framer-motion";
import { Jersey_10 } from "next/font/google";

const font = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function Letters() {
  return (
    <div
      className={`${font.className} absolute inset-0 text-[5vw] translate-y-[-1.5vw] translate-x-[6.5vw] [text-shadow:3px_3px_1px_rgba(0,0,0,0.6)]`}
    >
      <motion.div
        className="absolute text-teal-500 translate-x-[-0.2vw]"
        initial={{ opacity: 0, y: 20, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.2 }}
        whileHover={{ rotateX: 1.2 }}
      >
        P
      </motion.div>
      <motion.div
        className="absolute translate-x-[2.1vw] text-emerald-500"
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.23 }}
      >
        {" "}
        R{" "}
      </motion.div>
      <motion.div
        className="absolute translate-x-[4.4vw] text-emerald-400"
        initial={{ opacity: 0, y: 20, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.26 }}
      >
        {" "}
        O{" "}
      </motion.div>
      <motion.div
        className="absolute translate-x-[6.6vw] text-emerald-300"
        initial={{ opacity: 0, y: -20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.29 }}
      >
        {" "}
        J{" "}
      </motion.div>
      <motion.div
        className="absolute translate-x-[8.8vw] text-green-300"
        initial={{ opacity: 0, y: 20, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.32 }}
      >
        {" "}
        E{" "}
      </motion.div>
      <motion.div
        className="absolute translate-x-[11.0vw] text-green-400"
        initial={{ opacity: 0, y: -20, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.35 }}
      >
        {" "}
        C{" "}
      </motion.div>
      <motion.div
        className="absolute translate-x-[13.2vw] text-green-500"
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.38 }}
      >
        {" "}
        T{" "}
      </motion.div>
      <motion.div
        className="absolute translate-x-[15.3vw] text-lime-500"
        initial={{ opacity: 0, y: -20, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", delay: 0.41 }}
      >
        {" "}
        S{" "}
      </motion.div>
    </div>
  );
}
