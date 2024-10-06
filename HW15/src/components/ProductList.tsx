import React from "react";
import { Product } from "./types";

interface ProductListProps {
  products: Product[];
  addTocart: (product: Product) => void;
  remove: (product: Product) => void;
  cart: { [key: string]: number };
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  addTocart,
  remove,
  cart,
}) => {
  return (
    <div className="product-list w-full grid grid-cols-5 px-4 gap-3">
      {products.map((product, index) => (
        <div className="bg-[#1e3932] rounded-md py-2" key={index}>
          <img
            src={product.img}
            alt={product.name}
            width={120}
            className="mx-auto"
          />
          <p className="text-white font-semibold text-left px-3 py-2">
            {product.name}
          </p>
          <p className="text-[#d8c9a4] font-semibold text-left px-3 py-2">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex text-white items-center justify-center">
            <button
              className="bg-yellow-200 text-black px-4 py-1 rounded-tl-md rounded-bl-md"
              onClick={() => remove(product)}
              disabled={cart[product.name] === 0} 
            >
              -
            </button>
            <p className="bg-white text-black px-4 py-1">
              {cart[product.name] || 0}
            </p>
            <button
              className="bg-yellow-200 text-black px-4 py-1 rounded-tr-md rounded-br-md"
              onClick={() => addTocart(product)}
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
