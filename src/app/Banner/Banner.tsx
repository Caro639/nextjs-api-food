"use client";
import Link from "next/link";
import styles from "../produit/[barcode]/page.module.css";
import Image from "next/image";

// export function ClientComponent({ children }) {
//   return <>{children}</>;
// }

export function Nav() {
  return (
    <h4 className="title">
      <Link href="/a-propos">a-propos</Link>
      <Link href="/produit">article</Link>
    </h4>
  );
}

export default function Banner() {
  const title = "Qué'Za'Quo?";

  return (
    <div>
      <Image
        src="/logo_white.svg"
        alt="Logo Qué'Za'Quo?"
        className={styles.logowhite}
        width={251}
        height={141}
      />
      {/* <h1 className={styles.titre}>{title}</h1> */}
      <Nav />
    </div>
  );
}
