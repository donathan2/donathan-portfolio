import { SunriseBackground } from "@/features/sunrise/SunriseBackground";
import { Name } from "@/components/home/Name";

export default function Home() {
  return (
    <main className="relative h-screen">
      <SunriseBackground />
      <div className="pointer-events-none absolute z-10 left-0 right-0 top-[15%] flex items-center justify-center">
        <Name />
      </div>
    </main>
  );
}
