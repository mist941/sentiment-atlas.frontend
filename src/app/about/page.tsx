import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
  return (
    <main className={styles.container}>
      <h1>About Sentiment Atlas</h1>
      <section className={styles.group}>
        <h2 className={styles.title}>Project Purpose</h2>
        <p>
          The goal of Sentiment Atlas is to provide a visual and data-driven
          representation of public sentiment across different countries. The
          project was born out of the need for a better understanding of global
          opinions and discussions on social platforms.
        </p>
      </section>
      <section className={styles.group}>
        <h2 className={styles.title}>How It Works</h2>
        <ol className={styles.list}>
          <li>
            <b>Data Collection</b> - Sentiment Atlas fetches real-time and
            historical data from Reddit, using its API to gather user
            discussions, comments, and posts.
          </li>
          <li>
            <b>Sentiment Analysis</b> - The collected data is processed using
            natural language processing (NLP) techniques to determine the
            overall sentiment (positive, neutral, or negative).
          </li>
          <li>
            <b>Data Visualization</b> - The results are displayed on an
            interactive map, where users can click on different countries to
            explore sentiment trends in detail.
          </li>
        </ol>
      </section>
      <section className={styles.group}>
        <h2 className={styles.title}>Technologies Used</h2>
        <ul className={styles.list}>
          <li>
            <b>Frontend:</b> Next.js, TypeScript.
          </li>
          <li>
            <b>Backend:</b> Python, AWS Lambda.
          </li>
          <li>
            <b>Data Processing:</b> vaderSentiment.
          </li>
          <li>
            <b>APIs:</b> Reddit API for data collection.
          </li>
          <li>
            <b>Cloud Infrastructure:</b> AWS (Lambda, DynamoDB, EventBridge,
            CloudFormation, API Gateway).
          </li>
        </ul>
      </section>
      <section className={styles.group}>
        <h2 className={styles.title}>Author</h2>
        <ul className={styles.list}>
          <li>
            <b>GitHub:</b>{" "}
            <Link
              className={styles.link}
              rel="noreferrer noopener"
              target="_blank"
              href="https://github.com/mist941"
            >
              GitHub Profile
            </Link>
          </li>
          <li>
            <b>LinkedIn:</b>{" "}
            <Link
              className={styles.link}
              rel="noreferrer noopener"
              target="_blank"
              href="https://www.linkedin.com/in/ivan-statkevich-a9868819b/"
            >
              LinkedIn Profile
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
