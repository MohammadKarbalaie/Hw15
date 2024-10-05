import React, { useState } from "react";
import ProductList from "./ProductList";
import { data } from '../assets/data';
import { Product } from "./types";
import Cart from "./Cart";



export const UI: React.FC = () => {
    const [cart, setCart] = useState<{ [key: string]: number }>({});
  
    const addToCart = (product: Product) => {
      setCart((prevCart) => ({
        ...prevCart,
        [product.name]: (prevCart[product.name] || 0) + 1,
      }));
    };
  
    const removeFromCart = (product: Product) => {
      setCart((prevCart) => {
        const newCart = { ...prevCart };
        if (newCart[product.name] > 0) {
          newCart[product.name] -= 1;
        }
        return newCart;
      });
    };
  
    // محاسبه قیمت کل
    const totalPrice = data.reduce((total, product) => {
      const quantity = cart[product.name] || 0;
      return total + product.price * quantity;
    }, 0);
    
    return(
        <div className='flex flex-col gap-4 bg-[#ececec] pb-5 rounded-md' >
            <div>
               <div className="flex items-center justify-center gap-4 py-4">
                    <img src="../src/assets/logo.png" alt="logo" width={70}/>
                    <h1 className="font-bold text-4xl">Starbucks</h1>
               </div>
                <div>
                    <p className="font-semibold text-xl">Starbucks Online Coffe Order</p>
                </div>
            </div>

            <ProductList
                products={data}
                addTocart={addToCart}
                remove={removeFromCart}
                cart={cart}
            />
            <h1 className="font-semibold text-xl">Bill</h1>
                <Cart
                    cart={cart}
                    products={data}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
           

            <div className="py-1 font-semibold text-xl">
                <p>Total : {totalPrice.toFixed(2)}</p>
            </div>

            <div className="flex flex-col bg-[#e9c9a2] gap-4 ml-2 mr-2 py-3 items-center justify-center mx-auto rounded-lg">
                <button type="submit">Submit Order</button>
            </div>
        </div>
    )
}