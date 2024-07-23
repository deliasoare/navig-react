import { useState } from 'react';
import Photo from '../assets/LOGO_NAVIGAID.png'

import { RxHamburgerMenu } from 'react-icons/rx';
import { BsFillFilePersonFill } from "react-icons/bs";

function Header({isLogged, isOpen, setIsOpen}) {

    const toggleMenu = (e) => {
        setIsOpen(!isOpen);
      };

    return (
        <div className="header">
            <div className="logo">
                <img src={Photo} alt="" />
                <div className="name">NavigAid</div>
            </div>
            <div className="categories">
                <div className="discover">Discover</div>
                <div className="review">Review</div>
            </div>
             <div className="user-menu">
                <button className="user-icon" onClick={toggleMenu}>
                    <div className="icons">
                        <RxHamburgerMenu size={30}/>
                        <BsFillFilePersonFill size={30}/>
                    </div>
                </button>
                {isOpen && (
                    <div className="dropdown-menu">
                        {isLogged ?
                            <div className="logged">
                                <div className="menu-item">Profile</div>
                                <div className="menu-item">Logout</div>

                            </div>
                        :
                            <div className="n-logged">
                                <div className="menu-item">Login</div>
                                <div className="menu-item">Register</div>
                            </div>
                        }
                        
                    </div>
                )}
                </div>
        </div>
    );
}

export default Header;