import { Earth } from "lucide-react";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Earth size={32} />
      <p className={styles.text}>SA</p>
    </div>
  );
}
