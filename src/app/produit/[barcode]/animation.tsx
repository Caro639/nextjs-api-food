import styles from "./page.module.css";

export default function Animation() {
  return (
    <div className={styles.animation}>
      <div className={styles.polling_message}>Analyse en cours...</div>
      <div className={styles.scannerContainer}>
        <div className={styles.scannerLine}></div>
      </div>
    </div>
  );
}
