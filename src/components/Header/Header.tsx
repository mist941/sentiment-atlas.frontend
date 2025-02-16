import ThemeToggler from "@/components/ThemeToggler/ThemeToggler";
import Logo from "@/components/Logo/Logo";
import styles from "./Header.module.css";
import { CircleHelp } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.rightSide}>
        <nav className={styles.navigation}>
          <Link href="/about">
            <CircleHelp />
          </Link>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}
