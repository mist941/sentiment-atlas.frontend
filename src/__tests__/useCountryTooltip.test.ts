import useCountryTooltip from "@/hooks/useCountryTooltip";
import "@testing-library/jest-dom";

describe("useCountryTooltip", () => {
  it("should update tooltip position and content on mouse event", () => {
    const tooltipDiv = document.createElement("div");
    document.body.appendChild(tooltipDiv);
    const ref = { current: tooltipDiv };

    const showTooltip = useCountryTooltip(ref);

    const mockEvent = {
      clientX: 100,
      clientY: 200,
      target: document.createElementNS("http://www.w3.org/2000/svg", "path"),
    } as unknown as React.MouseEvent<SVGPathElement>;

    showTooltip(mockEvent, "USA", 0.75);

    expect(tooltipDiv.style.visibility).toBe("visible");

    expect(tooltipDiv.style.top).toBe("170px");
    expect(tooltipDiv.style.left).toBe("60px");

    expect(tooltipDiv.textContent).toBe("USA: 0.75");
  });

  it("should hide tooltip on mouse leave", () => {
    const tooltipDiv = document.createElement("div");
    document.body.appendChild(tooltipDiv);
    const ref = { current: tooltipDiv };
    const showTooltip = useCountryTooltip(ref);

    const mockEvent = {
      clientX: 150,
      clientY: 250,
      target: document.createElementNS("http://www.w3.org/2000/svg", "path"),
    } as unknown as React.MouseEvent<SVGPathElement>;

    showTooltip(mockEvent, "Germany", -0.2);

    mockEvent.target.dispatchEvent(new Event("mouseleave"));

    expect(tooltipDiv.style.visibility).toBe("hidden");
  });

  it("should do nothing if ref is null", () => {
    const ref = { current: null };
    const showTooltip = useCountryTooltip(ref);

    const mockEvent = {
      clientX: 100,
      clientY: 200,
      target: document.createElementNS("http://www.w3.org/2000/svg", "path"),
    } as unknown as React.MouseEvent<SVGPathElement>;

    expect(() => showTooltip(mockEvent, "France", 0.1)).not.toThrow();
  });
});
