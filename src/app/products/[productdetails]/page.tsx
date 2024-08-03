/**
 * @desc Product details component
 * @createdBy Midas
 * @createdAt 08/01/2024
 * @updatedAt 08/01/2024
 */

import React from "react";

// Define params types
interface Params {
  id: number;
  productdetails: number;
}

/**
 * @desc Get product details by id
 * @param {number} id  product id
 * @returns {Array} Product details
 */
const fetchProductDetails = async (id: number) => {
  try {
    const respose = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "GET",
      next: {
        revalidate: 0,
      },
    });

    const result = await respose.json();

    return result;
  } catch (error) {
    console.error("Failed to fetch users", error);
  }
};

const ProductDetails = async ({ params }: { params: Params }) => {
  const productdetails = await fetchProductDetails(params.productdetails);

  return (
    <div>
      <h1>{productdetails?.title}</h1>
      <p>{productdetails?.description}</p>
      <p>{productdetails?.price}</p>
    </div>
  );
};

export default ProductDetails;
