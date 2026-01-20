import Image from "next/image";
import { useState } from "react";
import Photo1 from "./photos/photo1";
import Photo2 from "./photos/photo2";
import Photo3 from "./photos/photo3";
import Photo4 from "./photos/photo4";
import Photo5 from "./photos/photo5";
import Photo6 from "./photos/photo6";
import Photo7 from "./photos/photo7";
import { motion } from "framer-motion";

export default function Phone() {
  const [photo, setPhoto] = useState(1);
  return (
    <div className="relative w-full h-full">
      <Image src="/display/phone.png" alt="phone" fill unoptimized></Image>
      <div className="absolute w-[68.8%] aspect-[44/58] top-[18.6%] left-[15.6%]">
        <Photo1 active={photo === 1} />
        <Photo2 active={photo === 2} />
        <Photo3 active={photo === 3} />
        <Photo4 active={photo === 4} />
        <Photo5 active={photo === 5} />
        <Photo6 active={photo === 6} />
        <Photo7 active={photo === 7} />
      </div>
      <button
        className="absolute w-[11.2%] h-[5.3%] bottom-[13.5%] left-[15.4%]"
        onClick={() => setPhoto(7)}
      ></button>

      <button
        className="absolute w-[9.4%] h-[5.3%] bottom-[13.5%] left-[26.5%]"
        onClick={() => setPhoto(3)}
      ></button>
      <button
        className="absolute w-[9.4%] h-[5.3%] bottom-[13.5%] left-[35.9%]"
        onClick={() => setPhoto(4)}
      ></button>
      <button
        className="absolute w-[9.4%] h-[5.3%] bottom-[13.5%] left-[45.3%]"
        onClick={() => setPhoto(1)}
      ></button>
      <button
        className="absolute w-[9.4%] h-[5.3%] bottom-[13.5%] left-[54.7%]"
        onClick={() => setPhoto(2)}
      ></button>
      <button
        className="absolute w-[9.4%] h-[5.3%] bottom-[13.5%] left-[64.1%]"
        onClick={() => setPhoto(5)}
      ></button>
      <button
        className="absolute w-[11.2%] h-[5.3%] bottom-[13.5%] left-[73.5%]"
        onClick={() => setPhoto(6)}
      ></button>
      <motion.div
        className="absolute w-[14%] h-[6%] left-[2%] bottom-[13.3%] z-50"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -2, 2, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image src="/display/right-arrow.png" alt="right arrow" fill></Image>
      </motion.div>
    </div>
  );
}
