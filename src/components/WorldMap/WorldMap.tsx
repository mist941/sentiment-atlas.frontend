"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import styles from "./WorldMap.module.css";
import { useRef, useState } from "react";
import { CountryData, MapPosition } from "@/types/map";
import { parseCountriesData } from "@/helpers/parseCountriesData";
import { getHSLMoodColor } from "@/helpers/getHSLModColor";
import useCountryTooltip from "@/hooks/useCountryTooltip";

interface WorldMapProps {
  data: CountryData[];
}

const SENTIMENT_MODIFIER = 100;

export default function WorldMap({ data = [] }: WorldMapProps) {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const showTooltip = useCountryTooltip(tooltipRef);
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: 1,
  });

  const countriesData = parseCountriesData(data);

  const handleMoveEnd = (position: MapPosition) => {
    setPosition(position);
  };

  return (
    <div className={styles.mapContainer}>
      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{ scale: 230, rotate: [-10, 0, 0] }}
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
                    onMouseMove={(e) =>
                      showTooltip(
                        e,
                        geo.properties.name,
                        Number(
                          (countriesData[geo.id] * SENTIMENT_MODIFIER).toFixed(
                            2
                          )
                        )
                      )
                    }
                    fill={getHSLMoodColor(countriesData[geo.id], -1, 1)}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      <div className={styles.tooltip} ref={tooltipRef} />
    </div>
  );
}
