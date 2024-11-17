import React, { useState } from 'react';

import Cart from './cart-privew/cart';
import Procuct from './Products/Procuct';

const Shope = () => {
  const [cart, setCart]= useState([])
    // singlie pruduct get fort item coutn
    let newCart=[]
// single broduct countity maninteine
    const hendelBey=(clickedProduct)=>{
        const exit = cart.find(product=> product.id === clickedProduct.id) 
if (!exit) {
    clickedProduct.quantity=1;
    newCart =[...cart,clickedProduct];
}else{
    const rest = cart.filter(product=>product.id !== clickedProduct.id)
    exit.quantity = exit.quantity + 1;
    newCart =[...rest,exit]
}



setCart(newCart) }

const heandelClearCart=()=>{
  console.log("hellow");
  setCart("")
  
}  
    return (
     
        <div className='flex max-w-[1440px] mx-auto' >
      
            <div className='w-4/5'>
         
          <Procuct hendelBey={hendelBey} cart={cart}></Procuct>
                </div>
                {/* <h1 className="text-black text-2xl mt-40">length{cart.length}</h1> */}
        <Cart cart={cart}  heandelClearCart={heandelClearCart}>
    
        </Cart>
        </div>
    );
};

export default Shope;