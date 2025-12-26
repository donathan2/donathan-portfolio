import { useEffect, useState } from "react";
import { SUNRISE_FRAMES } from "./frames";

const FRAME_DURATION = 115; // ms per frame

export function useSunriseAnimation() {
  const [frame, setFrame] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    if (frame < SUNRISE_FRAMES.length - 1) {
      const id = setTimeout(() => {
        setFrame(frame + 1);
      }, FRAME_DURATION);

      return () => clearTimeout(id);
    } else {
      setFinished(true);
    }
  }, [frame, finished]);

  return {
    frame,
    finished,
    setFrame,
  };
}