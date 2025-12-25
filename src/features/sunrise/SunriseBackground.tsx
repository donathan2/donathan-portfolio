"use client";
import Image from "next/image";
import { SUNRISE_FRAMES } from "./frames";
import { useSunriseAnimation } from "./useSunriseAnimation";

export function SunriseBackground() {
  const { frame } = useSunriseAnimation();

  return (
    <div className="absolute inset-0">
      <Image
        src={SUNRISE_FRAMES[frame]}
        alt={`Sunrise frame ${frame + 1}`}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
