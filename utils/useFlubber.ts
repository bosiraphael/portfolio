import { interpolate } from "flubber";
import { MotionValue, useTransform } from "framer-motion";

export function useFlubber(
  progress: MotionValue<number>,
  paths: [string, string]
) {
  return useTransform(progress, [0, 1], paths, {
    mixer: (a, b) => interpolate(a, b),
  });
}
