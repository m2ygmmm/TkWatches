import { Link, NavLink } from "react-router-dom";
import React, { useState } from 'react';
import logo from '../logo_transparent_bg.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "flowbite-react";
import 'flowbite'

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Navbar fluid className="bg-blackShade md:p-10 p-6 drop-shadow-xl"> 
            <Navbar.Brand href="/">
                <img src={logo} className="mr-3 h-20" alt="TK Logo" />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
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
                        <Link target="_blank" to="https://wa.me/message/DDKQQA46IXC4L1"><FontAwesomeIcon className="text-center text-white md:text-2xl text-3xl py-2 px-2 block hover:text-stone transition-all" icon={faWhatsapp}/></Link>
                        <Link target="_blank" to="https://www.instagram.com/timelesskettlesuk/"><FontAwesomeIcon className="text-center text-white md:text-2xl text-3xl py-2 px-2 block hover:text-stone transition-all" icon={faInstagram}/></Link>
                        <NavLink to="/cart"><FontAwesomeIcon className="text-center text-white md:text-2xl text-3xl py-2 px-2 block hover:text-stone transition-all" icon={faShoppingCart}/></NavLink>
                    </li>
                </ul>
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default NavBar;

