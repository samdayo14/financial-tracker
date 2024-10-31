
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
const nav = [
    {
        navItem:'Dashboard',
        path:'/dashboard'
    },
    {
        navItem:'Transactions',
        path:'/transactions'
    },
    {
        navItem:'Budgets',
        path:'/budgets'
    },
    {
        navItem:'Settings',
        path:'/settings'
    },
]

  return (
    <div className="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg transition-transform duration-300 ease-in-out overflow-hidden">
      <h2 className="text-white text-2xl font-bold text-center mt-4">Spring Credit</h2>
      <ul className="mt-8 space-y-4 px-4">
        {nav.map((item,index) => (

        <li key={index}>
          <Link to={item.path}  className="block text-white hover:bg-white hover:bg-opacity-10 rounded-lg p-2">{item.navItem}</Link>
        </li>

        ))}
       
      </ul>
    </div>
  );
};

export default Navbar;
