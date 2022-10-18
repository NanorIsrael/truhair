import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faXmark, faHouse, faCircleQuestion, faBriefcase, faImages, faBook, faUserDoctor, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Header() {
 const [toggleNave , settoggleNav] = useState(false);

const handleNav = () => settoggleNav(prev => !prev)


    return (
            <header>
                <div className={`overlay ${toggleNave ? "" : "hideNav"}`} onClick={handleNav} ></div>
                <div className="navbar bg-black text-white">
                    <p className="nav-brand">TruHAIR & BEAUTY</p>
                    <div className="mobile-menu " onClick={handleNav} >
                        <FontAwesomeIcon icon={faBars} /> 
                    </div>
                    <nav id="nav" className={toggleNave ? "":"hideNav"}>

                        <span className="mobile-menu-exit " onClick={handleNav} >
                            <FontAwesomeIcon icon={faXmark} /> 
                        </span>
                        <ul className="md:flex">
                            <li className={`m-2 p-2`} onClick={handleNav}>
                            <FontAwesomeIcon icon={faHouse} />
                                <NavLink  to='/'> 
                                    Home
                                </NavLink>
                             </li>
                            <li className={`m-2 p-2`} onClick={handleNav}>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                                <NavLink to='/about'>
                                About
                                </NavLink></li>
                            <li className={`m-2 p-2`} onClick={handleNav}>
                            <FontAwesomeIcon icon={faBriefcase}/>
                                <NavLink to='/our-services'>
                                Our Services
                                </NavLink>
                            </li>
                            <li className={`m-2 p-2`} onClick={handleNav}>
                            <FontAwesomeIcon icon={faImages}/>
                                <NavLink to='/'>
                                    Gallery
                                </NavLink>
                                </li>
                            <li className={`m-2 p-2`} onClick={handleNav}>
                                <FontAwesomeIcon icon={faBook}/>
                                <NavLink to='/book-now'>
                                    Book Now
                                </NavLink></li>
                            <li className={`m-2 p-2`} onClick={handleNav}>
                            <FontAwesomeIcon icon={faUserDoctor}/>
                                <NavLink to='/team'>
                                    Team
                                </NavLink>
                            </li>
                            <li className={`m-2 p-2`} onClick={handleNav}>
                                <FontAwesomeIcon icon={faPhone}/>
                                <Link to='/'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </header>
    )
} 

export default Header;