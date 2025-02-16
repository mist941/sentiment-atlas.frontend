import Link from "next/link";
import styes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styes.footer}>
      <p className={styes.copyright}>
        © {new Date().getFullYear()} Sentiment Atlas. All rights reserved.
      </p>
      <p className={styes.author}>
        Author:{" "}
        <Link
          className={styes.link}
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
