import React from 'react';
import rasm1 from '../../components/img/icon.png'
import rasm2 from '../../components/img/icon (1).png'
import rasm3 from '../../components/img/icon (2).png'
import './Hero.css'
const data =[
    {
        id:1,
        img:rasm1,
        title:'Поиск конкретного производителя',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.'


    },
    {
        id:2,
        img:rasm2,
        title:'Поиск конкретного производителя',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.'


    },
    {
        id:3,
        img:rasm3,
        title:'Доставка образцов товаров',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut.'


    },
]

const Hero = () => {
    let cards = data?.map(el=>(
        <div className="card-hammasi" key={el.id}>
           
        <img src={el.img} alt="" />
        <h1>{el.title}</h1>
        <p>{el.p}</p>
    </div>
    ))
    return (
        <div className='card-all'>
            <div className="card container">   
            <div className="al"></div>
            {cards}
            </div>
            
        </div>
    );
}

export default Hero;
