import React from 'react';
import picture from "./../../assets/images/austin-wade-AoYT0ArTTmg-unsplash 1.png"
import rectengal from "./../../assets/images//Rectangle 7.png"
import { Link } from 'react-router-dom';
import HOMEDS from './HomeDesing/HOMEDS';
import Newsfed from './Shared/Navebar/Newsfed';
import Singproduct from '../../Shope/Shope-page/Products/Singproduct';


const Home = () => {
    return (
        <div>
            <section className='mt-[160px] grid grid-cols-2 justify-items-center px-5 bg-'>
<div className='ml-8'>
<div className='w-[
597px h-[323px] pt-[180px] text-black  w-[597px] text-left mt-8'  >
    <span className='font-[luto] text-[17px] font-semibold'>Sale up to 70% off</span>
    <h1 className='font-[
700] text-[58px] leading-[72px] mb-4'>New Collection For Fall</h1>
    <p className=''>Discover all the new arrivals of ready-to-wear collection.</p>
    <button className="btn btn-active bg-amber-500	;
 px-7 my-4 "><Link to='/Order'>Shop NOW</Link></button>
</div>
</div>
<div className='relative w-[
470px] h-[654px]'>
   
    <img className='' src={rectengal} alt=""/>
 
   <img className='absolute left-4 top-1' src={picture} alt=""/>

</div>
            </section>
         
            <HOMEDS></HOMEDS>
            <Newsfed></Newsfed>
        </div>
    );
};

export default Home;