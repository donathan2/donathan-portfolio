"use client";

import * as Slider from "@radix-ui/react-slider";
import { useEffect, useState } from "react";

export function SunriseSlider({
  setFrame,
  framesCount,
  frame,
}: {
  setFrame: (n: number) => void;
  framesCount: number;
  frame: number;
}) {
  const [sliderWidth, setSliderWidth] = useState(101); // min width
  const [thumbWidth, setThumbWidth] = useState(8); // min thumb width

  useEffect(() => {
    const updateSizes = () => {
      const width = Math.min(Math.max(window.innerWidth * 0.14, 101), 202); // clamp(101px,14vw,202px)
      const thumb = Math.min(Math.max(window.innerWidth * 0.011, 8), 16); // clamp(8px,1.1vw,16px)
      setSliderWidth(width);
      setThumbWidth(thumb);
    };

    updateSizes();
    window.addEventListener("resize", updateSizes);
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  return (
    <div className="relative flex items-end">
      {/* Slider background */}
      <div
        className="absolute left-1/2 aspect-[12.5/1] bottom-0 -translate-x-1/2 bg-no-repeat bg-bottom pointer-events-none z-0"
        style={{
          width: `${sliderWidth * 1.65}px`, // match your 165% multiplier
          backgroundImage: "url('/display/slider.png')",
          backgroundSize: "100%",
        }}
      />
      <Slider.Root
        orientation="horizontal"
        min={0}
        max={framesCount - 1}
        step={1}
        value={[frame]}
        onValueChange={(val) => setFrame(val[0])}
        className="relative flex items-end aspect-[12.5/1] overflow-visible z-10"
        style={{
          width: `${sliderWidth}px`,
        }}
      >
        {/* Track */}
        <Slider.Track className="relative flex-1 h-full px-[20%]">
          <Slider.Range className="absolute inset-y-0" />
        </Slider.Track>

        {/* Thumb */}
        <Slider.Thumb
          className="block rounded-full bg-no-repeat bg-bottom focus:outline-none flex-shrink-0"
          style={{
            width: `${thumbWidth}px`,
            aspectRatio: "1 / 2",
            backgroundImage: "url('/display/sliderknob.png')",
            backgroundSize: "100%",
          }}
        />
      </Slider.Root>
    </div>
  );
}
