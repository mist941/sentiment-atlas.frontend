"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import styles from "./WorldMap.module.css";
import { useState } from "react";
import { CountryData, MapPosition } from "@/types/map";
import { parseCountriesData } from "@/helpers/parseCountriesData";
import { getHSLMoodColor } from "@/helpers/getHSLModColor";

interface WorldMapProps {
  data: CountryData[];
}

export default function WorldMap({ data = [] }: WorldMapProps) {
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: 1,
  });

  const countriesData = parseCountriesData(data);

  const moods = data.map((c) => parseFloat(c.average_sentiment));
  const minMood = Math.min(...moods);
  const maxMood = Math.max(...moods);

  const handleMoveEnd = (position: MapPosition) => {
    setPosition(position);
  };

  return (
    <ComposableMap
      width={450}
      height={200}
      projection="geoEqualEarth"
      projectionConfig={{ scale: 75, rotate: [-10, 0, 0] }}
    >
      <ZoomableGroup
        zoom={position.zoom}
        center={position.coordinates}
        onMoveEnd={handleMoveEnd}
      >
        <Geographies geography="features.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              return (
                <Geography
                  key={geo.rsmKey}
                  className={styles.geography}
                  geography={geo}
                  data-country-code={geo.id}
                  data-country-name={geo.properties.name}
                  fill={getHSLMoodColor(
                    countriesData[geo.id],
                    minMood,
                    maxMood
                  )}
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}
