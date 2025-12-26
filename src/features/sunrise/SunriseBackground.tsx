"use client";
import Image from "next/image";
import { SUNRISE_FRAMES } from "./frames";

interface SunriseBackgroundProps {
  frame: number;
}

export function SunriseBackground({ frame }: SunriseBackgroundProps) {
  return (
    <div className="absolute inset-0">
      <Image
        src={SUNRISE_FRAMES[frame]}
        alt={`Sunrise frame ${frame + 1}`}
        fill
        style={{ objectFit: "cover" }}
        priority
        draggable={false}
        unoptimized
      />
    </div>
  );
}
