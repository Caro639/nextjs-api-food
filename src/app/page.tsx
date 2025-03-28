import Image from "next/image";
import styles from "./page.module.css";
import Menu from "../app/Menu/menu";
import Footer from "../app/Footer/footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <div className={styles.description}>
        <div>
          <a
            href="/a-propos"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/logo_white.svg"
              alt="Que za quo Logo"
              className={styles.vercelLogo}
              width={180}
              height={140}
              priority
            />
          </a>
        </div>
      </div>

      <h1 className={styles.title}>
        Que contient le produit que vous allez
        manger ?
      </h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/course.webp"
          alt="télécharger l'application"
          width={1335}
          height={2000}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/a-propos"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Cliquez Ici <span>-&gt;</span>
          </h2>
          <p>
            Entrez votre code-barre et découvrez
            les informations de votre produit.
          </p>
        </a>
      </div>
      <Footer />
    </main>
  );
}
