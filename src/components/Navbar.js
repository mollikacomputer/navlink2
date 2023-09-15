import React from 'react';
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
]
const Navbar = () => {
    return (
        <nav className='flex justify-between container'>
            <h2 className='text-2xl font-semibold'> Next Ranjit</h2>
            <ul className='flex'>
                {
                    navItemsName.map(({path, title})=>(
                        <li className='mx-2' key={path}>
                            {title}
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;