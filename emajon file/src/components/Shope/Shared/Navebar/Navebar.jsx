import React, { useContext } from 'react';
import logo from "../../../../assets/images/logo--2.jpg"
import { Link, NavLink } from 'react-router-dom';
import Singup from './../../../../Authintication/Singup';
import { Authcontext } from '../../../../Orders/Context/Context';

const Navebar = () => {
const {name}= useContext(Authcontext)
  const menuItem =(
        <>
         <ul className="flex flex-col gap-2 text-[background: #FFFFFF;
        ] p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-[17px] sm:none">
       <li> 
        <NavLink href="/" className="block py-2 px-3 md:p-0 text-white  md:text-[background: #FFFFFF;
]md:dark:text-blue-500  text-[
        17px] font-normal" aria-current="page">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Order" className="block py-2 px-3 md:p-0 text-white  md:text-[background: #FFFFFF;
]md:dark:text-blue-500  text-[
        17px] font-normal" aria-current="page">Order</NavLink>
      </li>
      <li>
        <NavLink to="/orer-Review" className="block py-2 px-3 md:p-0 text-white  md:text-[background: #FFFFFF;
]md:dark:text-blue-500  text-[
        17px] font-normal" aria-current="page">Order Review</NavLink>
      </li>
   
      <li>
        <NavLink to="/About" className="block py-2 px-3 md:p-0  text-white  md:text-[background: #FFFFFF;
]md:dark:text-blue-500  text-[
        17px] font-normal" aria-current="page">About us</NavLink>
      </li>
      
      <li>
      <button>  <NavLink to="/singUP" className="block py-2 px-3 md:p-0  text-white  md:text-[background: #FFFFFF;
]md:dark:text-blue-500  text-[
        17px] font-normal" aria-current="page">Singup</NavLink></button>
      </li>
            </ul>
            <div className="flex-none mx-5">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content z-[1] mt-3 w-52 shadow bg-black">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end bg-black">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New{name}</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    
  </div>
            </>
    )
    return (
        <div>


<nav className="bg-black border-gray-200 text-white width-[1070px] mx-auto  h-20' px-[140px] justify-center fixed right-0 left-0 top-0 z-20 mb-40">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

      <img src= {logo}className="h-24 w-24" alt="Flowbite Logo" />
 
  <div classNameName="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
     
  
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
 { menuItem}
  </div>

  </div>
</nav>

        </div>
    );
};

export default Navebar;