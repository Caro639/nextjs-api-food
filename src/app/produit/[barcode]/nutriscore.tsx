import styles from "./page.module.css";
import Image from "next/image";

export default function Nutriscore() {
  return (
    <div className={styles.logos}>
      <Image
        src="/nutri_d.svg"
        alt="nutriscore"
        className={styles.nutriscore}
        width={278}
        height={150}
      />

      <Image
        src="/nova.svg"
        alt="score nova"
        className={styles.nova}
        width={68}
        height={130}
      />
    </div>
  );
}
// data product
