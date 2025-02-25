import Banner from "../Banner/Banner";
import Identify from "../produit/[barcode]/identite";
import Nutriscore from "../produit/[barcode]/nutriscore";
import Tableau from "../produit/[barcode]/table";
import SearchBar from "./SearchBar";

// import { useEffect } from "react";
// import { useState } from "react";

// const params = new URLSearchParams(location.search).get("barcode");

const fields = ["barcode", "generic_name", "image_front_url", "code"];

async function getRequest(barcode) {
  const apiURL = `https://world.openfoodfacts.org/api/v2/product/${params}.json?fields=${fields.join(
    ","
  )}`;
  console.log(apiUrl);
  const response = await fetch(apiURL);
  return response.json();
}

export default async function Page({ params: { barcode } }) {
  const data = await getRequest(barcode);

  return (
    <div>
      <Banner />

      <SearchBar />

      {/* <main> */}
      <Identify data={data} />
      <Tableau />
      <Nutriscore />
      {/* </main> */}
    </div>
  );
}
