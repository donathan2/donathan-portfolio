import Image from "next/image";
import { Tiny5 } from "next/font/google";

const font = Tiny5({ subsets: ["latin"], weight: "400" });
export default function Photo4({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute inset-0 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image src="/display/photo4.png" alt="photo" fill unoptimized></Image>
      <div className="absolute w-[100%] h-[10%] top-[-14%] space-y-[-0.3vw] ">
        <p className={`${font.className} text-center text-black text-[1.03vw]`}>
          Glassboro
        </p>
        <p className={`${font.className} text-center text-black text-[0.9vw]`}>
          December 23, 2025 3:42 PM
        </p>
      </div>
    </div>
  );
}
