import Image from "next/image";
import { Tiny5 } from "next/font/google";

const font = Tiny5({ subsets: ["latin"], weight: "400" });
export default function Photo5({ active }: { active: boolean }) {
  return (
    <div
      className={`absolute inset-0 ${
        active ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <Image src="/display/photo5.png" alt="photo" fill unoptimized></Image>
      <div className="absolute w-[100%] h-[10%] top-[-14%] space-y-[-0.3vw] ">
        <p className={`${font.className} text-center text-black text-[1.03vw]`}>
          Williamstown
        </p>
        <p className={`${font.className} text-center text-black text-[0.9vw]`}>
          December 28, 2025 6:58 AM
        </p>
      </div>
    </div>
  );
}
