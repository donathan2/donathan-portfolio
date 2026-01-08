import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import Letters from "./letters";
import { useState } from "react";
import Unselected from "./boards/unselected";
import Selections from "./selections";
import Bitbridge from "./boards/bitbridge";
import Cameldew from "./boards/cameldew";
import Parlor from "./boards/parlor";

export default function Window({
  setOpened,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [project, setProject] = useState<number>(0);
  const windowContent = (
    <>
      <div
        className={`fixed z-50 inset-0 ${
          project === 1
            ? "bg-cyan-800/50"
            : project === 2
            ? "bg-green-800/50"
            : project === 3
            ? "bg-blue-900/50"
            : "bg-gray-800/50"
        }`}
        onClick={() => setOpened(false)}
      ></div>
      <motion.div
        className="absolute z-52 left-1/2 top-1/2 -translate-x-6/4 -translate-y-1/2 w-[30vw] h-[80vh]  scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring" }}
      >
        <Image
          className="absolute"
          src="/display/projects-display.png"
          alt="projects display"
          fill
        ></Image>
        <Selections project={project} setProject={setProject}></Selections>
        <div className="absolute z-60 top-0 left-0 w-full h-[5vw] pointer-events-none flex items-center justify-center">
          <Letters />
        </div>
      </motion.div>

      {project === 0 && <Unselected></Unselected>}
      {project === 1 && <Bitbridge></Bitbridge>}
      {project === 2 && <Cameldew></Cameldew>}
      {project === 3 && <Parlor></Parlor>}
    </>
  );

  return typeof window !== "undefined"
    ? createPortal(windowContent, document.body)
    : null;
}
