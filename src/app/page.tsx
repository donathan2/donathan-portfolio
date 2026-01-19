"use client";
import { SunriseBackground } from "@/features/sunrise/SunriseBackground";
import { Name } from "@/features/name/Name";
import { useSunriseAnimation } from "@/features/sunrise/useSunriseAnimation";
import { SUNRISE_FRAMES } from "@/features/sunrise/frames";
import { Darkness } from "@/components/home/darkness";
import Projects from "@/components/projects/button";
import Bio from "@/components/bio/button";

export default function Home() {
  const { frame, setFrame } = useSunriseAnimation();
  return (
    <main className="relative min-h-screen">
      <SunriseBackground frame={frame} />
      <Darkness frame={frame} />

      <div className="relative z-10 flex h-full justify-center items-center">
        <div className="w-full max-w-[1200px] px-6">
          <div className="flex flex-col items-center gap-2">
            <div className="flex relative items-center justify-center w-full gap-6">
              <Name
                setFrame={setFrame}
                framesCount={SUNRISE_FRAMES.length}
                frame={frame}
              />
            </div>
            <div className="flex gap-8 -translate-y-[clamp(64px,9vw,72px)]">
              <Projects />
              <Bio />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
