import React from 'react';
import Procuct from './Procuct';

const Singproduct = ({product, hendelBey,cart}) => {
  
  const {name,price,seller,ratings,img,quantity} = product
  


    return (
    
 
 <div className="card bg-base-100 shadow-xl shadow-gray-50 w-[300px] h-[520] my-2 border-4">
  <figure>
    <img
      src={img}
      alt={name} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {name.length> 20? name.slice(0,15)+"...":name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>Manufacturer BY:{seller}</p>
    <span>Rating:{ratings}</span>
    
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-1">${price}</div>
      
      <div className="badge badge-outline p-1">{quantity}</div>
    </div>
  </div>
  <div>  <button onClick={()=>hendelBey(product)} className="p-4 w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">BEY NOW</button></div>
</div>
       
       
    );
};

export default Singproduct;