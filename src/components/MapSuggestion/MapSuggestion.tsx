import styles from "./MapSuggestion.module.css";

export default function MapSuggestion() {
  return (
    <div className={styles.suggestionWrapper}>
      <p>Sentiment Scale</p>
      <div className={styles.suggestionLineWrapper}>
        <div className={styles.suggestionLine} />
      </div>
      <div className={styles.scaleRange}>
        <p>-100</p>
        <p>0</p>
        <p>100</p>
      </div>
    </div>
  );
}
