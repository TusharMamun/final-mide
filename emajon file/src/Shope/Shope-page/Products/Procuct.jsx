import React, { useEffect, useState } from 'react';
import Singproduct from './Singproduct';

const Procuct = ({hendelBey,cart}) => {




    
    const [products,setproducts]=useState([])
    useEffect(()=>{
fetch ("products.json")
.then(res=>res.json())
.then(data=>setproducts(data))

    },[])
    return (
        <div className='pt-24 px-20'>
<div className='grid grid-cols-3 gap-5'>
{
    products.map(pruductSing => <Singproduct key={pruductSing.id} product={pruductSing} hendelBey={hendelBey} cart={cart}> </Singproduct>)
}
</div>
        </div>
    );
};

export default Procuct;