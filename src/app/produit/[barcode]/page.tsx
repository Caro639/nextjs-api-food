import SearchBar from "../../a-propos/SearchBar";
import Banner from "../../Banner/Banner";
import Identify from "./identite";
import Tableau from "./table";
import Nutriscore from "./nutriscore";
import Animation from "./animation";

// const params = new URLSearchParams(location.search).get("barcode");

const fields = [
  "barcode",
  "generic_name",
  "image_front_url",
  "images",
  "code",
  "brands",
  "ingredients_text",
  "nutriments",
];

async function getRequest(barcode: any) {
  const apiURL = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json?fields=${fields.join(
    ","
  )}`;
  const response = await fetch(apiURL);

  return response.json();
}

export default async function Page({ params: { barcode } }) {
  const data = await getRequest(barcode);

  if (data.status_verbose == "product not found") {
    return (
      <div>
        <Banner />
        <SearchBar />
        <main>404</main>
      </div>
    );
  }

  return (
    <div>
      <Banner />

      <SearchBar />
      <Animation />
      {/* <main> */}
      <Identify data={data} />
      <Tableau data={data} />
      <Nutriscore />
      {/* </main> */}
    </div>
  );
}
