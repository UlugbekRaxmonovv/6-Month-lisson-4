import React from 'react';
import './Hero.css'
import rasm1  from '../../components/img/adir-Cargo-Insurance 1.png'


const data =[
    {
        id:1,
        title:'Поставщик Дальнего Востока',
        p:'Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.',
        h3:'Узнать больше'
    },
    {
        id:1,
        img:rasm1
    },
]


const Hero = () => {

    return (
        <div>
            <div className="hero container">
            <div className="hero-logo">
                    <h1>{data[0].title}</h1>
                    <p>{data[0].p}</p>
                    <h3>{data[0].h3}</h3>
                    <div className="all5"></div>
                </div>
                <div className="hero-logo">
                    <img src= {data[1].img}alt="" />
                </div>
            </div>
        </div>
    );}
export default Hero;
