"use client";

import Image from "next/image";

import styles from "./page.module.css";
import Tableau from "./table";

// export function Photo({ src, h, w }) {//-
export function Photo({
  src,
  h,
  w,
}: {
  src: string;
  h: number;
  w: number;
}) {
  return (
    <div className={styles.photo}>
      <Image
        src={src}
        alt="Photo du produit"
        className={styles.photo}
        width={w}
        height={h}
      />
    </div>
  );
}

// export default function Identify({ data: { product } }) {//-
export default function Identify({
  data: { product },
}: {
  data: { product: any };
}) {
  return (
    <div className={styles.prod}>
      <h2 className={styles.question}>
        Quels sont les ingrédients dans ?
        <br />
        {product.generic_name}
      </h2>
      <Photo
        src={product.image_front_url}
        h={product.images[1].sizes[400].h}
        w={product.images[1].sizes[400].w}
      />

      <div className={styles.ing}>
        <h3 className={styles.marque}>
          {product.brands}
        </h3>
        <h4 className={styles.iban}>
          Code-barre : {product.code}
        </h4>
        <p className={styles.ingredients}>
          Ingrédients : {product.ingredients_text}
        </p>
      </div>
    </div>
  );
}
