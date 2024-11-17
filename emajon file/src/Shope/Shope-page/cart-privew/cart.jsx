import React from 'react';
import Singproduct from '../Products/Singproduct';
import { Link } from 'react-router-dom';


const Cart = ({cart,heandelClearCart}) => {


console.log(cart);
let qUantity=0;
let total = 0;
let shipingCharg = 0;
for( const product of cart){
    qUantity= qUantity + product.quantity;
   total = total + product.price * product.quantity;
shipingCharg = shipingCharg + product.shipping;

}
const tex = parseFloat((total * 0.1).toFixed(2)) ;

 
    const grandTotal = total + shipingCharg + tex
      
        
    return (
      <>
       <div className='w-1/5 bg-orange-300 fixed min-h-screen right-0 top-16'>
        <div className='' >
       <h5 className='text-center py-7 px-10 text-xl text-black font-samibold'>Order Summary</h5>
      <div className='ps-8 my-12'>
      <p className='text-[#1C2B35] pb-2'>Selected Items: {cart.length}</p>
      <p className='text-[#1C2B35]  pb-2'>Total Shipping Charge: {shipingCharg}</p>
     
       <p className='text-[#1C2B35] pb-2'>Tax:{tex}</p>
       <p className='text-[#1C2B35;] pb-2'>Total Price: ${total}</p>
       <h6 className='text-[#1C2B35] pb-2  font-semibold text-xl'>Grand Total: ${grandTotal}</h6>
      </div>
<div>
<div className='p-1 mx-4 m-auto'>
<button className=" mb-3 ml-2  block mx-auto  p-2 bg-[#FF3030] text-white rounded-md w-full"><Link to="/orer-Review">Review Order</Link></button>
<button onClick={heandelClearCart} className=" block  p-2  ml-2 mx-auto bg-[#FF9900]

 text-white rounded w-full">Clear Cart</button>
</div>
</div>
                </div>
                      
        </div></>
    );
};

export default Cart;