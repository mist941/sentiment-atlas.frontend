"use client";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import styles from "./WorldMap.module.css";
import { useState } from "react";
import { MapPosition } from "@/types/map";

export default function WorldMap() {
  const [position, setPosition] = useState<MapPosition>({
    coordinates: [0, 0],
    zoom: 1,
  });

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
                />
              );
            })
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
}
