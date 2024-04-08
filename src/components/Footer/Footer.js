
import React from 'react';
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

const data=[
    {   
        id:1,
       link1:['LOGO']
    },
    {   
        id:2,
        link:['Каталог','о компании','Индивидуальная ','Партнерам']
    },
    {   
        id:3,
        link:['2D, 3D модели','Шоу-румы','Дилерам ','Контакты','Конфигуратор']
    },
    {   
        id:4,
        icon:<FaInstagram />,
        icon1: <FiFacebook />,
        link:['+38 (099)-638-45-37'],
        button:'Персональная'
       
        
    },
]

const Footer = () => {
    let items = data.map((el, ind) => (
        <div className="footur-all" key={ind}>
            <h1 className='text'>{el.link1}</h1>
            <ul>
                     
            {el.icon &&
                    <li key={el.id}>
                        <div className="all">
                            <div className="all1">
                            <a href="" className="">{el.icon}</a>
                            <a href="" className="">{el.icon1}</a>
                            </div>
                        </div>
                       
                    </li>
                }
      
                { 
                el?.link?.map((link, index) => (
                    <li key={index}> 
                        <a href="" className="">{link}</a>
                       
                    </li>
        
                ))}
                {
                    el.button &&
                    <li key={el.id}>
                        <div className="link">
                        <div className="link2">
                        <div className="all3">{el.button}</div>
                        </div> <div className="link2">
                        <FaArrowRightLong />
                     </div>
                        </div>
                    </li>
                }
            </ul>
          
        </div>
    ));

    return (
    
        <footer>
            <div className="footur container">
            {items}
            </div>

            <h1 className='h-1'>© 1993–2021 Интернет-магазин «LOGO» — truck</h1>
        </footer>
    );
}

export default Footer;
