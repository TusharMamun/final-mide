import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const hendelLogin = (event) => {
        event.preventDefault();
        const from= event.target
        const name = from.firstName.value
        const email =from.email.value;
    
      
        const password= from.password.value;
      
      }
    return (
        <div className ="mt-24">
        <div className="max-w-4xl mx-auto font-[sans-serif] p-6">
      <div className="text-center mb-16">
       
        <h4 className="text-gray-800 text-base font-semibold mt-6"></h4>
      </div>

      <form onSubmit={hendelLogin} className="border-2 p-5 ">
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-gray-800 text-sm mb-2 block">First Name</label>
            <input name="firstName" type="text" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
         
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Email Id</label>
            <input name="email" type="email" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
         
          <div>
            <label className="text-gray-800 text-sm mb-2 block">Password</label>
            <input name="password" type="password" className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>

        </div>
        <div className="form-control mt-6">
               <input type="submit" value="SingUp"  className="btn btn-primary"/>
             </div>
             
      </form>
      <div className="form-control mt-6 mb-6">
          <button className='btn btn-outline '> Login IN With Google</button>
             </div>
      <div className="mt-2 mb-4 text-center text-sm text-slate-600">
                    
                       <Link to="/singup" className="font-medium text-[#4285f4]">Singup</Link>
                   </div>
    </div>
    </div>
    );
};

export default Login;