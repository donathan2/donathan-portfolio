import { useState, Dispatch, SetStateAction } from "react";
import { Tiny5 } from "next/font/google";
import Image from "next/image";

const font = Tiny5({
  subsets: ["latin"],
  weight: "400",
});

interface SelectionsProps {
  project: number;
  setProject: Dispatch<SetStateAction<number>>;
}

export default function Selections({ project, setProject }: SelectionsProps) {
  return (
    <>
      <div
        className={`w-[50%] h-[10%] select-none ${
          project === 1 ? "bg-sky-600" : "bg-sky-900"
        } translate-x-[7.5vw] translate-y-[8vw] border-[0.3vw] ${
          project === 1 ? "border-cyan-200" : "border-white"
        } flex items-center gap-4 transition-all duration-300 ${
          project === 1 ? "scale-110 z-50" : ""
        }`}
        onClick={() => {
          if (project === 1) {
            setProject(0);
          } else {
            setProject(1);
          }
        }}
      >
        <div className="translate-x-[10%] relative w-[3vw] h-[3vw]">
          <Image src="/icons/bitbridge.png" alt="bitbridge icon" fill></Image>
        </div>
        <p className={`${font.className} text-[1.4vw]`}>BitBridge</p>
      </div>

      {/* CAMELDEW */}
      <div
        className={`mt-[1%] w-[50%] h-[10%] select-none ${
          project === 2 ? "bg-lime-400" : "bg-lime-600"
        } translate-x-[7.5vw] translate-y-[8vw] border-[0.3vw] ${
          project === 2 ? "border-lime-200" : "border-white"
        } flex items-center gap-4 transition-all duration-300 ${
          project === 2 ? "scale-110 z-50" : ""
        }`}
        onClick={() => {
          if (project === 2) {
            setProject(0);
          } else {
            setProject(2);
          }
        }}
      >
        <div className="translate-x-[10%] relative w-[3vw] h-[3vw]">
          <Image src="/icons/cameldew.png" alt="bitbridge icon" fill></Image>
        </div>
        <p className={`${font.className} text-[1.4vw]`}>Cameldew Valley</p>
      </div>
      {/* CAMELDEW */}
      <div
        className={`mt-[1%] w-[50%] h-[10%] select-none ${
          project === 3 ? "bg-indigo-400" : "bg-indigo-600"
        } translate-x-[7.5vw] translate-y-[8vw] border-[0.3vw] ${
          project === 3 ? "border-indigo-200" : "border-white"
        } flex items-center gap-4 transition-all duration-300 ${
          project === 3 ? "scale-110 z-50" : ""
        }`}
        onClick={() => {
          if (project === 3) {
            setProject(0);
          } else {
            setProject(3);
          }
        }}
      >
        <div className="translate-x-[10%] relative w-[3vw] h-[3vw]">
          <Image src="/icons/parlor.png" alt="parlor icon" fill></Image>
        </div>
        <p className={`${font.className} text-[1.4vw]`}>Pixel Parlor</p>
      </div>
    </>
  );
}
