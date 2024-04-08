import React from 'react';
import { useState } from 'react';
import './Header.css'
import { IoIosMenu } from "react-icons/io";

//Header map///
const data = ['Home', 'About','Blog','Contact','Help']
//

const Header = () => {
    const [toogli,sitToggli] = useState(false)
    return (
        <div>
               <header>
        <nav className="navbar  container">
            <h2 className="navbar__logo">грузовик</h2>
            <ul className= {`navbar__collection  ${toogli? 'show':""}`} >
                {
                  data.map((index,value) =>(
                    <li className="navbar__item" key={value}>
                    <a href="#" class="navbar__link">{index}</a>
                </li>
                  ))  
                }
            </ul>
            <div class="navbar__menu" onClick={() =>  sitToggli(!toogli)}>
            <IoIosMenu />
            </div>
        </nav>
    </header>

    
        </div>
    );
}

export default Header;
