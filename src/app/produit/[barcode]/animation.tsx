import styles from "./page.module.css";

export default function Animation() {
  return (
    <div className={styles.animation}>
      <div className={styles.polling_message}>
        Recherchez, informez-vous !
        <br />
        Entrez votre code-barre !
      </div>
      <div className={styles.cylon_eye}></div>
    </div>
  );
}
