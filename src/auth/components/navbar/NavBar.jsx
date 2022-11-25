import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useState } from 'react';

import './navbar.css';


export const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header 
            className="flex items-center justify-between w-full py-2 px-[7%] relative bg-indigo-600 text-lg text-white rounded"
        >

            <img src={logo} alt="logo" className="" />

            <button
                className="text-3xl p-2 md:hidden"
                onClick={toggle}
            >

                    <i className={`fas transition-all
                duration-300
                ease-in-out ${isOpen ? "fa-times" : "fa-bars"}`}></i> 
            </button>

            <nav
                className={`md:static absolute
                top-full bg-indigo-700 text-slate-400 md:bg-transparent left-0 right-0 border-[rgba(0,0,0,0.2)]
                border-t-[0.1rem]
                border-b-[0.1rem]  
                space-y-2
                md:space-y-0
                md:border-none
                transition-all
                duration-300
                ease-in-out
                ${isOpen ? 'navBarActive' : 'navBar'}
                `}
            >
                <NavLink
                to="/auth/login"
                    className={`hover:text-white block text-center p-2 md:inline-block
                    `}
                    style={({isActive}) => isActive ? { color: 'white'} : { color: '' }}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/auth/register"
                    className={`hover:text-white block text-center p-2 md:inline-block`}
                    style={({isActive}) => isActive ? { color: 'white'} : { color: '' }}
                >
                    Register
                </NavLink>
            </nav>
            
        </header>
    )
}
