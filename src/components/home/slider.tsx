import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { motion } from "framer-motion";

export function SunriseSlider({
  setFrame,
  framesCount,
  frame,
}: {
  setFrame: (n: number) => void;
  framesCount: number;
  frame: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 1.8 }}
    >
      <Slider.Root
        className="h-[6vw] w-[2.8vw] translate-y-[4.43vw] rounded relative flex flex-col bg-cover bg-center"
        style={{
          backgroundImage: "url('/display/slider.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "300%",
        }}
        orientation="vertical"
        min={0}
        max={framesCount - 1}
        step={1}
        value={[frame]}
        onValueChange={(val) => setFrame(val[0])}
      >
        <Slider.Track className="flex-1 w-10 h-10 z-20 rounded relative">
          <Slider.Range className="absolute w-10 h-10 z-20 rounded-full" />
        </Slider.Track>
        <div className="z-40 absolute w-[6vw] h-[6vw] left-1/2 -translate-x-1/2 top-[-4.0vw] pointer-events-none">
          <Image src="/display/dayicon.png" alt="day icon" fill />
        </div>
        <div className="z-40 absolute w-[6vw] h-[6vw] left-1/2 -translate-x-1/2 bottom-[-4.0vw] pointer-events-none">
          <Image src="/display/nighticon.png" alt="night icon" fill />
        </div>
        <Slider.Thumb
          className="absolute z-50 translate-x-[-0.60vw] translate-y-[-1vw] w-[4.5vw] h-[2vw] focus:outline-none focus:ring-0 active:outline-none active:ring-0"
          style={{
            backgroundImage: "url('/display/sliderknob.png')",
            backgroundSize: "contain",
          }}
        />
      </Slider.Root>
    </motion.div>
  );
}
