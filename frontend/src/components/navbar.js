import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../logo_transparent_bg.png'; // Import the logo image correctly
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import 'flowbite'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <nav className="bg-gradient-to-b from-blackShade ease-in hover:bg-blackShade transition-all drop-shadow-2xl w-full z-20 top-0 start-0 fixed">
            <div className="flex flex-wrap items-center md:justify-around justify-center mx-auto p-4">
                <Link to="/" className="flex items-center flex-1 ">
                    <img src={logo} className="md:h-32 h-24" alt="TK" />
                </Link>
                <button
                    data-collapse-toggle="navbar-dropdown"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-blackShade"
                    onClick={toggleMenu}
                    aria-controls="navbar-dropdown"
                    aria-expanded="false"
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`hidden w-full md:flex md:w-auto flex justify-center`} id="navbar-dropdown">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg items-center md:flex-row md:space-x-8 rtl:space-x-reverse ">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? "text-center md:text-2xl underline underline-offset-4 text-3xl font-EB_Garamond block py-1 px-2 text-white hover:text-stone transition-all" : "text-center md:text-2xl no-underline text-3xl font-EB_Garamond block py-1 px-2 text-white hover:text-stone transition-all")} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-center md:text-2xl underline underline-offset-4 text-3xl font-EB_Garamond block py-1 px-2 text-white hover:text-stone transition-all" : "text-center md:text-2xl no-underline text-3xl font-EB_Garamond block py-1 px-2 text-white hover:text-stone transition-all")}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/store" className={({ isActive }) => (isActive ? "text-center md:text-2xl underline underline-offset-4 text-3xl font-EB_Garamond block py-1 px-2 text-white hover:text-stone transition-all" : "text-center md:text-2xl no-underline text-3xl font-EB_Garamond block py-1 px-2 text-white hover:text-stone transition-all")}>Store</NavLink>
                        </li>
                        <li className="flex flex-row pt-4 md:pt-0">
                            <Link target="_blank" to="https://www.instagram.com/timelesskettlesuk/"><FontAwesomeIcon className="text-center text-white md:text-2xl text-3xl py-2 px-2 block hover:text-stone transition-all" icon={faInstagram}/></Link>
                            <NavLink to="/cart"><FontAwesomeIcon className="text-center text-white md:text-2xl text-3xl py-2 px-2 block hover:text-stone transition-all" icon={faShoppingCart}/></NavLink>

                        </li>
              
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}

export default NavBar;

