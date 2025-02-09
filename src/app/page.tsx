import WorldMap from "@/components/WorldMap/WorldMap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <WorldMap />
    </main>
  );
}
