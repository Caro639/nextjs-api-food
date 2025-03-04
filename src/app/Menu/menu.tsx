import Link from "next/link";
import Image from "next/image";
import styles from "../produit/[barcode]/page.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link
        href="tel:+14155550132"
        className={styles.tel}
      >
        +1 (415) 555‑0132
      </Link>
      <Image
        src="/fb.svg"
        alt="Logo de Facebook"
        className={styles.fb}
        width={150}
        height={150}
      />

      <Image
        src="/pinterest.svg"
        alt="Logo de Pinterest"
        className={styles.pinterest}
        width={150}
        height={150}
      />

      <Image
        src="/twiter.svg"
        alt="Logo de Twiter"
        className={styles.twiter}
        width={150}
        height={150}
      />
    </div>
  );
}
