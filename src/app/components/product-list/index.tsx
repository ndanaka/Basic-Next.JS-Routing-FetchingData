"use client";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Product1",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product2",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product3",
  },
];

const ProductList = () => {
  return (
    <ul>
      {products.map((productItem) => {
        return <li key={productItem.id}>{productItem.name}</li>;
      })}
    </ul>
  );
};

export default ProductList;
