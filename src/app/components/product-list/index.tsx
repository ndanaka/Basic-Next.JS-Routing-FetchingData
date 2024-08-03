/**
 * @desc Product list component
 * @createdBy Midas
 * @createdAt 08/01/2024
 * @updatedAt 08/01/2024
 */

"use client";

import { useRouter } from "next/navigation";

// Define product types
interface Product {
  id: number;
  title: string;
  description: string;
}

const ProductList = ({ products }: { products: Product[] }) => {
  const router = useRouter();

  return (
    <ul>
      {products && products.length ? (
        products.map((item) => {
          return (
            <li
              onClick={() => router.push(`/products/${item.id}`)}
              key={item.id}
            >
              {item.id} {item.title}
            </li>
          );
        })
      ) : (
        <h1>No Products</h1>
      )}
    </ul>
  );
};

export default ProductList;
