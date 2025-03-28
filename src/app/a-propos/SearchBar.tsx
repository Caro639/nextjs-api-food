"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
//  import {useState} from "react";

export default function SearchBar() {
  const router = useRouter();

  function handleSubmit(e: any) {
    e.preventDefault();
    const barcode = e.target.barcode.value;
    router.push(`/produit/${barcode}`);
  }

  return (
    <form
      className={styles.Barre}
      action="/produit"
      onSubmit={handleSubmit}
    >
      <label htmlFor="searchInput"></label>
      <input
        type="search"
        name="barcode"
        id="searchInput"
        className={styles.Article}
        placeholder="Entrez un code-barre - exemple: 8000500045497"
      />
      <input
        type="submit"
        name="submit"
        className={styles.submit}
        value="search"
      />
    </form>
  );
}
