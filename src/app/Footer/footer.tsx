import Link from "next/link";
import styles from "../produit/[barcode]/page.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <h4 className={styles.title}>
        <Link href="/" className={styles.retour}>
          Accueil
        </Link>
      </h4>

      <h4 className={styles.title}>
        <Link
          href="/a-propos"
          className={styles.retour}
        >
          Mentions légales
        </Link>
      </h4>

      <h4 className={styles.title}>
        <Link
          href="/a-propos"
          className={styles.retour}
        >
          Contact
        </Link>
      </h4>
    </footer>
  );
}

export default function Bottom() {
  return <Footer />;
}
