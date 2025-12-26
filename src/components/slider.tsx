import * as Slider from "@radix-ui/react-slider";

export function SunriseSlider({
  setFrame,
  framesCount,
}: {
  setFrame: (n: number) => void;
  framesCount: number;
}) {
  return (
    <Slider.Root
      className="h-[25vw] w-[1vw] bg-gray-200 rounded relative flex flex-col"
      orientation="vertical"
      min={0}
      max={framesCount - 1}
      step={1}
      value={[0]} // initial slider value
      onValueChange={(val) => setFrame(val[0])} // update frame as user drags
    >
      <Slider.Track className="flex-1 bg-gray-300 z-20 rounded relative">
        <Slider.Range className="absolute z-30 bg-amber-900 rounded" />
      </Slider.Track>
      <Slider.Thumb className="w-1 h-1 z-40 bg-red-700 rounded-full" />
    </Slider.Root>
  );
}
