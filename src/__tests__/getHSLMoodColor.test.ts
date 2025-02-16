import { getHSLMoodColor } from "@/helpers/getHSLModColor";

describe("getHSLMoodColor", () => {
  it("should return HSL color for min mood", () => {
    const result = getHSLMoodColor(-1, -1, 1);
    expect(result).toBe("hsl(0, 60%, 50%)");
  });

  it("should return HSL color for max mood", () => {
    const result = getHSLMoodColor(1, -1, 1);
    expect(result).toBe("hsl(120, 60%, 50%)");
  });

  it("should return HSL color for middle mood", () => {
    const result = getHSLMoodColor(0, -1, 1);
    expect(result).toBe("hsl(60, 60%, 50%)");
  });
});
