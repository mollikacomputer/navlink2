import React from 'react';
import NavLink from './NavLink';
const navItemsName = [
    {
        path:'/',
        title:"Home",
    },
    {
        path:'/about',
        title:"About",
    },
    {
        path:'/services',
        title:"Services",
    },
    {
        path:'/contact',
        title:"Contact",
    },
];
const Navbar = () => {
    return (
        <nav className='flex justify-between container'>
            <h2 className='text-2xl font-semibold'> Next Ranjit</h2>
            <ul className='flex'>
                {
                    navItemsName.map(({path, title})=>(
                        <li className='mx-2' key={path}>
                            <NavLink exact={path === "/"} activeClassName={"text-blue-500"} href={path} >
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;