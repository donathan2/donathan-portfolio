"use client";
import NextImage from "next/image";
import { useEffect } from "react";
import { SUNRISE_FRAMES } from "./frames";

interface SunriseBackgroundProps {
  frame: number;
}

export function SunriseBackground({ frame }: SunriseBackgroundProps) {
  // Preload all frames
  useEffect(() => {
    SUNRISE_FRAMES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="absolute inset-0">
      <NextImage
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
