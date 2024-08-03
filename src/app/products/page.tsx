/**
 * @des Product page
 * @createdBy Midas
 * @createdAt 08/01/2024
 * @updatedAt 08/01/2024
 */

// Import components
import ProductList from "../components/product-list";

/**
 * @desc Function to get all products
 * @returns {Array} All products
 */
const fetchAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });

    const result = await response.json();

    if (result && result.products && result.products.length) {
      return result.products;
    }
  } catch (error) {
    console.error("Failed to fetch users", error);
  }
};

const Products = async () => {
  // fetch products from the server
  const products = await fetchAllProducts();

  return <ProductList products={products} />;
};

export default Products;
