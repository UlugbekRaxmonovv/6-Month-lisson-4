import React from 'react';
import './Hero.css';
import rasm1 from '../../components/img/adir-Cargo-Insurance 1.png';

const data =[
    {
        id: 1,
        title: 'Поставщик Дальнего Востока',
        h3: 'Узнать больше'
    }
];

const Hero = () => {
    return (
        <div className="hero-tim">
            {data.map((item) => (
                <div key={item.id} className="hero container">
                    <div className="hero-logo">
                        <h1>{item.title}</h1>
                        <p>Наши клиенты получают полный спектр услуг по работе с Китаем. Начиная с подбора производителя заканчивая доставкой товара до двери. Настолько прозрачных сделок с Китаем вы еще не осуществляли.</p>
                        <h3>{item.h3}</h3>
                        <div className="all5"></div>
                    </div>
                    <div className="hero-logo">
                        <img src={rasm1} alt="" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Hero;
