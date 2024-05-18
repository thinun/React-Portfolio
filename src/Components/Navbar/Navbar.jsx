import React, {useRef, useState} from 'react';
import logo from '../../assets/T_logo_s.png';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

import './Navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState('home');

    const menuRef = useRef(null);
    const openMenu = () => {
            menuRef.current.style.right = '0';
    }
      const closeMenu = () => {
            menuRef.current.style.right = '-200px';
    }


    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className={"hamburger"}>
                <img src={menu_open} onClick={()=>{openMenu()}} alt={""} className={"nav-mob-open"}/>
            </div>


            <ul ref={menuRef} className={"nav-menu"}>
                <li><img src={menu_close} onClick={()=>{closeMenu()}} className={"nav-mob-close"}/></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#home"><p>Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={20} href="#about"><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={20} href="#my-projects"><p>Projects</p></AnchorLink>
                </li>
                <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p>Contact</p></AnchorLink></li>
            </ul>
        </div>
    );
};

export default Navbar;
