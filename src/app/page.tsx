"use client";
import { SunriseBackground } from "@/features/sunrise/SunriseBackground";
import { Name } from "@/features/name/Name";
import { useSunriseAnimation } from "@/features/sunrise/useSunriseAnimation";
import { SunriseSlider } from "@/components/home/slider";
import { SUNRISE_FRAMES } from "@/features/sunrise/frames";
import { Darkness } from "@/components/home/darkness";
import Projects from "@/components/projects/button";

export default function Home() {
  const { frame, setFrame } = useSunriseAnimation();
  return (
    <main className="relative h-screen">
      <SunriseBackground frame={frame} />
      <Darkness frame={frame} />

      <div className="h-full w-full absolute z-10 flex justify-center">
        <Name></Name>
        <div className="absolute right-[14vw] top-[3vw] z-20 pointer-events-auto">
          <SunriseSlider
            frame={frame}
            setFrame={setFrame}
            framesCount={SUNRISE_FRAMES.length}
          />
        </div>
        <div className="absolute z-30 w-[25vw] h-full">
          <Projects></Projects>
        </div>
      </div>
    </main>
  );
}
