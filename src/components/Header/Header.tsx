import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Logo from "@/components/Logo/Logo";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className=""></nav>
      <ThemeToggler />
    </header>
  );
}
