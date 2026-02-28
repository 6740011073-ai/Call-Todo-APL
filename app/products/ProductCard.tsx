"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300">

      
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
          className="object-contain h-[150px]"
        />
      </div>

     
      <h3 className="text-sm mt-4 h-10 overflow-hidden text-gray-700">
        {product.title}
      </h3>

     
      <div className="flex justify-between items-center mt-3">
        <span className="text-gray-800 font-bold">
          ${product.price}
        </span>

        <Link
          href={`/products/${product.id}`}
          className="bg-red-600 text-white text-xs px-4 py-1 rounded-full hover:bg-purple-700 transition"
        >
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;