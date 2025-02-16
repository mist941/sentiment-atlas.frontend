import { parseCountriesData } from "@/helpers/parseCountriesData";
import { CountryData } from "@/types/map";

describe("parseCountriesData", () => {
  it("should correctly parse country sentiment data", () => {
    const input: CountryData[] = [
      {
        country: "USA",
        average_sentiment: "0.75",
        country_name: "",
        date: "",
      },
      {
        country: "Germany",
        average_sentiment: "-0.2",
        country_name: "",
        date: "",
      },
      {
        country: "France",
        average_sentiment: "0.1",
        country_name: "",
        date: "",
      },
    ];

    const expectedOutput = {
      USA: 0.75,
      Germany: -0.2,
      France: 0.1,
    };

    expect(parseCountriesData(input)).toEqual(expectedOutput);
  });

  it("should handle empty input", () => {
    const input: CountryData[] = [];
    expect(parseCountriesData(input)).toEqual({});
  });

  it("should handle invalid sentiment values", () => {
    const input: CountryData[] = [
      {
        country: "Canada",
        average_sentiment: "not_a_number",
        country_name: "",
        date: "",
      },
    ];

    const output = parseCountriesData(input);

    expect(output.Canada).toBeNaN();
  });
});
