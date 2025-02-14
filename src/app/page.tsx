import WorldMap from "@/components/WorldMap/WorldMap";
import styles from "./page.module.css";
import { CountryData } from "@/types/map";
import MapSuggestion from "@/components/MapSuggestion/MapSuggestion";

export default async function Home() {
  const res = await fetch(
    "https://bvsx5ay5gusxfszwonmv45rw5y0gzqid.lambda-url.us-east-1.on.aws/",
    {
      cache: "no-store",
    }
  );

  const data: CountryData[] = await res.json();

  return (
    <main className={styles.container}>
      <WorldMap data={data} />
      <MapSuggestion />
    </main>
  );
}
