import Image from "next/image";
import styles from "./page.module.css";
import Menu from "../app/Menu/menu";
import Footer from "../app/Footer/footer";
import Banner from "../app/Banner/Banner";
import Animation from "../app/produit/[barcode]/animation";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu />
      <Banner />

      <Animation />

      <h1 className={styles.title}>
        Que contient le produit que vous allez manger ?
      </h1>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src='/food.webp'
          // src='/course.webp'
          alt="télécharger l'application"
          width={1335}
          height={2000}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href='/a-propos'
          className={styles.card}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className={styles.scannerContainer}>
            <div className={styles.scannerLine}></div>
          </div>
          <h2>
            Rechercher un produit{" "}
            <span>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M3 5v14' />
                <path d='M8 5v14' />
                <path d='M12 5v14' />
                <path d='M17 5v14' />
                <path d='M21 5v14' />
              </svg>
            </span>
          </h2>
          <p>
            Entrez votre code-barre et découvrez si le produit est bon pour
            votre santé.
          </p>
        </a>
      </div>
      <Footer />
    </main>
  );
}
