import { RefObject } from "react";

export default function useCountryTooltip(
  ref: RefObject<HTMLDivElement | null>
) {
  return function showTooltip(
    event: React.MouseEvent<SVGPathElement>,
    countryName: string,
    sentiment: number
  ) {
    const tooltip = ref.current;
    if (!tooltip || !event.target) return;

    tooltip.style.visibility = "visible";
    tooltip.style.top = `${event.clientY - 30}px`;
    tooltip.style.left = `${event.clientX - 40}px`;
    tooltip.textContent = `${countryName}: ${sentiment}`;

    event.target.addEventListener("mouseleave", () => {
      tooltip.style.visibility = "hidden";
    });
  };
}
