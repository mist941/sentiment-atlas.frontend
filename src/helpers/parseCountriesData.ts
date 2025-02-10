import { CountryData } from "@/types/map";

type ParseCountriesDataOutput = Record<CountryData["country"], number>;

export const parseCountriesData = (
  data: CountryData[]
): ParseCountriesDataOutput => {
  return data.reduce((acc, country) => {
    acc[country.country] = parseFloat(country.average_sentiment);
    return acc;
  }, {} as ParseCountriesDataOutput);
};
