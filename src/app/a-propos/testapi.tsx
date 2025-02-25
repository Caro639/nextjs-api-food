// "use client";
// import styles from "./page.module.css";    
// import React, {ChangeEvent, useEffect, useState} from "react";

// const [productData, setProductData] = useState(null);

// useEffect(() => {
//     const params = new URLSearchParams(window.location.search).get("barcode");
//     const fields = [
//       "barcode",
//       "code",
//       "generic_name",
//       "image_front_url",
//       "nutriments",
//       "nutriscore_data",
//       "nutriscore_grade",
//       "nutriscore_score",
//     ];
//     const apiURL = `https://world.openfoodfacts.org/api/v2/product/${params}.json?fields=${fields.join(",")}`;
  
//     fetch(apiURL)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         const p = data.product;
//         const n = p.nutriments;
//         const nd = p.nutriscore_data;
  
//         // Update the state variable with the API response data
//     //     setProductData({
//     //   "p.dataProduct",
//     //         // Add more data fields as needed
//     //       });
//         })
//         .catch(function (error) {
//           console.error("Error fetching data", error);
//         });
//     }, []);

//     export default function SearchBar () { 
//         function handleChange(event: ChangeEvent<HTMLInputElement>): void {
//             throw new Error("Function not implemented.");
//         }

//     return (
//         <form
//           className={styles.Barre}
//           onSubmit={(e) => {
//             e.preventDefault();
//             window.location.href = `/produit/${}`;
//           }}
//         >
//           <input
//             type="search"
//             name="barcode"
//             className={styles.Article}
//             onChange={handleChange}
//             value={"3017760819121"}
//             placeholder="Scanner ou rechercher un article !"
//           />
//           <input type="submit" name="submit" className={styles.submit} value="search" />
//           {productData && (
//             <div className={styles.Produit}>
//               <h2>{productData.article}</h2>
//               <img src={productData.Photo} alt={productData.photo} />
//               <h4>{productData.Iban}</h4>
//               {/* Render more data fields as needed */}
//             </div>
//           )}
//         </form>
//       );
//           }