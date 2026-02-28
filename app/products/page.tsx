"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  image: string;
}
const ProductPage = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);

  useEffect(() => {
  fetch("https://fakestoreapi.com/products?limit=3")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(error => console.log(error));
}, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {products.map((product:ProductItem ) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};
export default ProductPage;