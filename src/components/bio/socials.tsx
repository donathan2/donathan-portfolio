import Image from "next/image";
import { motion } from "framer-motion";
import { Jersey_10 } from "next/font/google";
import Link from "next/link";

const font = Jersey_10({
  subsets: ["latin"],
  weight: "400",
});

export default function Socials() {
  return (
    <div className="relative w-full h-full">
      {/* Background image */}
      <Image
        src="/display/bio-socials.png"
        alt="bio socials"
        fill
        unoptimized
        className="object-cover"
      />

      {/* Overlay text */}
      <motion.div
        className="absolute top-[-22%] left-[12%] z-10"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <p
          className={`${font.className} text-[clamp(0px,4vw,57px)] [text-shadow:3px_3px_1px_rgba(0,0,0,1)] text-white`}
        >
          Let's Connect!
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-[22%] left-[15%] z-10 flex gap-[2.5vw]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link href="https://www.linkedin.com/in/donathan-truong-5627b8316/">
          <motion.div
            className="relative w-[7vw] h-[7vw]"
            whileHover={{ scale: 1.08 }}
          >
            <Image src="/icons/linkedin.png" alt="linkedin" fill />
          </motion.div>
        </Link>

        <Link href="https://github.com/donathan2">
          <motion.div
            className="relative w-[7vw] h-[7vw]"
            whileHover={{ scale: 1.08 }}
          >
            <Image src="/icons/github.png" alt="github" fill />
          </motion.div>
        </Link>
        <Link href="https://leetcode.com/u/donathan2/">
          <motion.div
            className="relative w-[7vw] h-[7vw]"
            whileHover={{ scale: 1.08 }}
          >
            <Image src="/icons/leetcode.png" alt="leetcode" fill />
          </motion.div>
        </Link>
        <a href="mailto:donathan.truong1@gmail.com">
          <motion.div
            className="relative w-[7vw] h-[7vw]"
            whileHover={{ scale: 1.08 }}
          >
            <Image src="/icons/email.png" alt="email" fill />
          </motion.div>
        </a>
      </motion.div>
    </div>
  );
}
