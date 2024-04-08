import React from 'react';
import rasm1 from '../../img/rasm1.png'
import rasm2 from '../../img/rasm2.png'
import rasm3 from '../../img/rasm3.png'
import './Section.css'
const data=[
    {
        id:1,
        img:rasm1,
        title:'Станки и оборудование',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
        h2:'20 000 руб.'
    },
    {
        id:2,
        img:rasm2,
        title:'Компоненты и запчасти',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
        h2:'18 000 руб.'
    },
    {
        id:3,
        img:rasm3,
        title:'Станки и оборудование',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut.',
        h2:'20 000 руб.'
    },
]
const Section = () => {

    let cards = data?.map((el) =>(
        <div className="creat-all1" key={el.id}>
            <img src={el.img} alt="" />
           <div className="all-row">
           <h1>{el.title}</h1>
            <p>{el.p}</p>
            <h2>{el.h2}</h2>
           </div>
                 
        </div>
    ))
    return (
        <div className='creat'>
          <div className="creat-all container">
            <h1>Выполненные работы</h1>
            <p>Мы собрали информацию по грузам, которые мы уже доставили. У нас специальный подход к каждому виду товаров.
         </p>
            <div className="creat-row">
                {cards}
            </div>

          </div>
            
        </div>
        
    );
}

export default Section;
