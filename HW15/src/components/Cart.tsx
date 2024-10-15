import React from "react";  
import { Product } from "./types";  

interface CartProps {  
  cart: { [key: string]: number };   
  products: Product[];   
  addToCart: (product: Product) => void;  
  removeFromCart: (product: Product) => void;   
}  

const Cart: React.FC<CartProps> = ({  
  cart,  
  products,  
}) => {  
  return (  
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 gap-4">  
      {products.map((product) => {  
        const quantity = cart[product.name] || 0;  
        const totalPrice = quantity * product.price; 

        return (  
          <div key={product.name} className="bg-[#1e3932] rounded-md py-2 text-center">  
            <img  
              src={product.img}  
              alt={product.name}  
              className="mx-auto w-24 h-40 object-cover"  
            />  
            <div className="flex flex-col justify-start items-start ml-2">  
              <p className="text-white font-semibold py-2">{product.name}</p>  
              <p className="text-[#d8c9a4] font-semibold py-2">${totalPrice.toFixed(2)}</p> 
              <p className="text-white py-2">Qty: {quantity}</p>  
            </div>    
          </div>  
        );  
      })}  
    </div>  
  );  
};  

export default Cart;