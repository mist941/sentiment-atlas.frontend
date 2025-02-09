import styes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styes.footer}>
      <p className={styes.copyright}>
        © {new Date().getFullYear()} Sentiment Atlas. All rights reserved.
      </p>
    </footer>
  );
}
