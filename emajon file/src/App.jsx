import React, { Children } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Shope/Home';
import About from './About/About';
import Orders from './Orders/Orders';
import Shope from './Shope/Shope-page/Shope';
import Singup from './Authintication/Singup';
import Login from './Authintication/Login';


const App = () => {
  const router = createBrowserRouter([
 {
  path: "/",
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:"/Order",
      element:<Shope></Shope>
    },
    {
      path:"/orer-Review",
      element:<Orders></Orders>
    },
   {
    path:"/About",
    element:<About></About>
   },
   {
    path:"/singUP",
    element:<Singup></Singup>
   },
   {
    path:"/login",
    element:<Login></Login>
   }

  ]
 }
  
  ])
 
  return (
    <div>
<RouterProvider router={router}>

</RouterProvider>
   
    </div>
  );
};

export default App;