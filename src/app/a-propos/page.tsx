import Link from "next/link";
import Image from "next/image";

import styles from "./page.module.css";
import Banner from "../Banner/Banner";
import SearchBar from "./SearchBar";
import { Footer } from "../Footer/footer";
import Menu from "../Menu/menu";

export default function About() {
  return (
    <div>
      <Menu />
      <Banner />

      <SearchBar />
      <main>
        <h1 className={styles.titre}>
          A propos de Qué&apos;Za&apos;Quo?
        </h1>
        <h2 className={styles.titre2}>
          Entrez votre code-barre !
        </h2>
        <p className={styles.texte}>
          Entrez votre code-barre ! Lorem ipsum
          dolor sit amet consectetur adipisicing
          elit. Debitis, odio doloribus? Labore
          consequuntur praesentium quam deleniti
          consectetur enim officia, nam reiciendis
          commodi? Magnam reiciendis blanditiis
          molestias mollitia quibusdam delectus
          vitae accusamus consectetur unde
          possimus expedita rem ut, nesciunt
          tempora quod deleniti voluptatum
          accusantium! Hic repellendus est impedit
          doloribus aliquam rerum!
        </p>
        <Footer />
      </main>
    </div>
  );
}
