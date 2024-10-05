import React, { useState } from "react";
import ProductList from "./ProductList";
import { data } from '../assets/data';
import { Product } from "./types";


export const UI: React.FC = () => {
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    const addToCart = (product: Product) => {
        setCart((prevCart) => ({
          ...prevCart,
          [product.name]: (prevCart[product.name] || 0) + 1,
        }));
      };
    
      // Handler to remove a product from the cart
      const removeFromCart = (product: Product) => {
        setCart((prevCart) => {
          const newCart = { ...prevCart };
          if (newCart[product.name] > 0) {
            newCart[product.name] -= 1;
          }
          return newCart;
        });
      };
    
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

            <div className='grid grid-cols-5 w-full px-4 gap-3'>
            <div className="bg-[#1e3932] rounded-md py-2">
                    <img src="../src/assets/Cappuccino.png" alt="" width={150} className="mx-auto" />
                    <p className="text-white font-semibold text-left px-3 py-2">Cappuccino</p>
                    <p className="text-[#d8c9a4] font-semibold text-left px-3 py-2">$3.5</p>
                    <span className="flex text-white items-start justify-start">
                    <p className="px-2 py-1">Qty : </p>
                        <p className="py-1 ">0</p>
                    </span>
                </div>
                <div className="bg-[#1e3932] rounded-md py-2">
                    <img src="../src/assets/Latte.png" alt="" width={150} className="mx-auto" />
                    <p className="text-white font-semibold text-left px-3 py-2">Latte</p>
                    <p className="text-[#d8c9a4] font-semibold text-left px-3 py-2">$4</p>
                    <span className="flex text-white items-start justify-start">
                    <p className="px-2 py-1">Qty : </p>
                        <p className="py-1 ">0</p>
                    </span>
                </div>
                <div className="bg-[#1e3932] rounded-md py-2">
                    <img src="../src/assets/Espresso.png" alt="" width={150} className="mx-auto" />
                    <p className="text-white font-semibold text-left px-3 py-2">Espresso</p>
                    <p className="text-[#d8c9a4] font-semibold text-left px-3 py-2">$2.5</p>
                    <span className="flex text-white items-start justify-start">
                    <p className="px-2 py-1">Qty : </p>
                        <p className="py-1 ">0</p>
                    </span>
                </div>
                <div className="bg-[#1e3932] rounded-md py-2">
                    <img src="../src/assets/Mocha.png" alt="" width={150} className="mx-auto" />
                    <p className="text-white font-semibold text-left px-3 py-2">Mocha</p>
                    <p className="text-[#d8c9a4] font-semibold text-left px-3 py-2">$4.5</p>
                    <span className="flex text-white items-start justify-start">
                    <p className="px-2 py-1">Qty : </p>
                        <p className="py-1 ">0</p>
                    </span>
                </div>
                <div className="bg-[#1e3932] rounded-md py-2">
                    <img src="../src/assets/Americano.png" alt="" width={150} className="mx-auto" />
                    <p className="text-white font-semibold text-left px-3 py-2">Americano</p>
                    <p className="text-[#d8c9a4] font-semibold text-left px-3 py-2">$3</p>
                    <span className="flex text-white items-start justify-start">
                    <p className="px-2 py-1">Qty : </p>
                        <p className="py-1 ">0</p>
                    </span>
                </div>
            </div>

            <div className="py-1 font-semibold text-xl">
                <p>Total : $65.5</p>
            </div>

            <div className="flex flex-col bg-[#e9c9a2] gap-4 ml-2 mr-2 py-3 items-center justify-center mx-auto rounded-lg">
                <button type="submit">Submit Order</button>
            </div>
        </div>
    )
}