import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Description from "./description";
import Socials from "./socials";
import Image from "next/image";
import Phone from "./phone";

export default function Window({
  setOpened,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const windowContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-gray-800/50"
        onClick={() => setOpened(false)}
      />

      {/* Window frame */}
      <div
        className="fixed z-52 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[78vw] aspect-[2/1] rounded-xl"
      >
        {/* Content layout */}
        <div className="grid h-full grid-cols-[1fr_2fr] gap-4">
          {/* Left panel */}
          <motion.div
            className="relative rounded-lg"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <Phone></Phone>
          </motion.div>

          {/* Right column */}
          <div className="grid grid-rows-[2fr_1fr] gap-4">
            {/* Top-right panel (bio base) */}
            <motion.div
              className="relative rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <Description></Description>
            </motion.div>

            {/* Bottom-right panel */}
            <motion.div
              className="relative rounded-lg"
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" }}
            >
              <Socials></Socials>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );

  return typeof window !== "undefined"
    ? createPortal(windowContent, document.body)
    : null;
}
