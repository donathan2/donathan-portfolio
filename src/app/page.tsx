"use client";
import { SunriseBackground } from "@/features/sunrise/SunriseBackground";
import { Name } from "@/features/name/Name";
import { useSunriseAnimation } from "@/features/sunrise/useSunriseAnimation";
import { SunriseSlider } from "@/components/slider";
import { SUNRISE_FRAMES } from "@/features/sunrise/frames";

export default function Home() {
  const { frame, setFrame } = useSunriseAnimation();
  return (
    <main className="relative h-screen">
      <SunriseBackground frame={frame} />
      <div className="pointer-events-none absolute z-10 top-0 left-0 right-0 flex justify-center">
        <Name></Name>
        <div className="absolute right-[14vw] top-[3vw] z-20 pointer-events-auto">
          <SunriseSlider
            setFrame={setFrame}
            framesCount={SUNRISE_FRAMES.length}
          />
        </div>
      </div>
    </main>
  );
}
