import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} Sentiment Atlas. All rights reserved.
      </p>
      <p className={styles.author}>
        Author:{" "}
        <Link
          className={styles.link}
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/ivan-statkevich-a9868819b/"
        >
          Ivan Statkevich
        </Link>
      </p>
    </footer>
  );
}
