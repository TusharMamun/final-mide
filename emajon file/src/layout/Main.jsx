import React from 'react';
import Navebar from '../components/Shope/Shared/Navebar/Navebar';
import Fotter from '../components/Shope/Shared/Navebar/Fotter';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
        <Navebar></Navebar>
       <Outlet></Outlet>
       <Fotter></Fotter>
        </div>
    );
};

export default Main;