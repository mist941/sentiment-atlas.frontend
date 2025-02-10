const lerp = (start: number, end: number, t: number): number =>
  start + (end - start) * t;

export const getHSLMoodColor = (
  mood: number,
  minMood: number,
  maxMood: number
): string => {
  const normalizedMood = (mood - minMood) / (maxMood - minMood);

  const hue = lerp(0, 120, normalizedMood);

  const saturation = 60;
  const lightness = 50;

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
