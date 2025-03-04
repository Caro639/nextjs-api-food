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
        {/* <p>
          Get started by editing&nbsp;
          <code className={styles.code}>
            src/app/a-propos/page.tsx
          </code>
        </p> */}
        <div>
          <a
            href="http://localhost:3000/a-propos"
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
          href="http://localhost:3000/a-propos"
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
        {/* 
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>
            Learn about Next.js in an interactive
            course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>
            Explore the Next.js 13 playground.
          </p>
        </a> */}

        {/* <a
          href="http://localhost:3000/produit"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Page produit <span>-&gt;</span>
          </h2>
          <p>Recherchez avec Que Za Quo.</p>
        </a> */}
      </div>
      <Footer />
    </main>
  );
}
