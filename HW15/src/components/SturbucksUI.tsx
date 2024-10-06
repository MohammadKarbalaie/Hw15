import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { data } from '../assets/data';
import { Product } from "./types";
import Cart from "./Cart";

export const UI: React.FC = () => {
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const newCart = {
                ...prevCart,
                [product.name]: (prevCart[product.name] || 0) + 1,
            };
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    const removeFromCart = (product: Product) => {
        setCart((prevCart) => {
            const newCart = { ...prevCart };
            if (newCart[product.name] > 0) {
                newCart[product.name] -= 1;
            }
            localStorage.setItem("cart", JSON.stringify(newCart));
            return newCart;
        });
    };

    const totalPrice = data.reduce((total, product) => {
        const quantity = cart[product.name] || 0;
        return total + product.price * quantity;
    }, 0);

    const handleSubmitOrder = () => {
        setCart({});
        localStorage.removeItem("cart");
    };

    return (
        <div className='flex flex-col gap-4 bg-[#ececec] pb-5 rounded-md'>
            <div>
                <div className="flex items-center justify-center gap-4 py-4">
                    <img src="../src/assets/logo.png" alt="logo" width={70} />
                    <h1 className="font-bold text-4xl">Starbucks</h1>
                </div>
                <div>
                    <p className="font-semibold text-xl">Starbucks Online Coffee Order</p>
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

            <div className="flex flex-col bg-[#e9c9a2] gap-4 mx-2 py-3 items-center justify-center rounded-lg">
                <button
                    type="submit"
                    onClick={handleSubmitOrder}
                    disabled={totalPrice === 0}
                    className={`px-4 py-2 font-semibold text-lg rounded ${totalPrice === 0 ? 'bg-none' : 'bg-gray-500'} text-white`}
                >
                    Submit Order
                </button>
            </div>
        </div>
    );
};
