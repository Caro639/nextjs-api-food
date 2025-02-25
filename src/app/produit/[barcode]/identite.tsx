"use client";

import Image from "next/image";

import styles from "./page.module.css";
import Tableau from "./table";

export function Photo({ src, h, w }) {
  return (
    <div>
      <Image src={src} alt="" className={styles.photo} width={w} height={h} />
    </div>
  );
}

export default function Identify({ data: { product } }) {
  return (
    <div>
      <h2>{product.generic_name}</h2>
      <Photo
        src={product.image_front_url}
        h={product.images[1].sizes[400].h}
        w={product.images[1].sizes[400].w}
      />

      <h3 className="marque">{product.brands}</h3>
      <h4 className="Iban">Code-barre : {product.code}</h4>
      <p className="description">
        Ingrédients :{product.ingredients_text}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, odio
        doloribus? Labore consequuntur praesentium quam deleniti consectetur
        enim officia, nam reiciendis commodi? Magnam reiciendis blanditiis
        molestias mollitia quibusdam delectus vitae accusamus consectetur unde
        possimus expedita rem ut, nesciunt tempora quod deleniti voluptatum
        accusantium! Hic repellendus est impedit doloribus aliquam rerum!
      </p>
    </div>
  );
}
