import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Window({
  setOpened,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const windowContent = (
    <>
      <div
        className="fixed z-50 inset-0 bg-gray-800/50"
        onClick={() => setOpened(false)}
      ></div>
      <motion.div
        className="absolute z-52 left-1/2 top-1/2 -translate-x-6/4 bg-red-200 -translate-y-1/2 w-[30vw] h-[80vh]  scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
      ></motion.div>
    </>
  );
  return typeof window !== "undefined"
    ? createPortal(windowContent, document.body)
    : null;
}
