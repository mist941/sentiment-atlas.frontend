import { Earth } from "lucide-react";
import styles from "./Logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      <Earth size={32} />
      <p className={styles.text}>SA</p>
    </Link>
  );
}
