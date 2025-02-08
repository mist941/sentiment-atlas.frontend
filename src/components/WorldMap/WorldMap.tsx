"use client";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./styles.css";

export default function WorldMap() {
  return (
    <div>
      <ComposableMap
        width={450}
        height={200}
        projection="geoEqualEarth"
        projectionConfig={{ scale: 75, rotate: [-10, 0, 0] }}
      >
        <Geographies geography="features.json">
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                className="geography"
                geography={geo}
                fill="#06F"
                stroke="#FFF"
                strokeWidth={0.1}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
