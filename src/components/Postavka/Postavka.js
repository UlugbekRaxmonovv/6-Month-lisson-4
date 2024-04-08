import React from 'react';
import './Postavka.css'
import rasm1  from '../../components/img/rasm4.png'
import rasm2  from '../../components/img/rasm5.png'
import rasm3  from '../../components/img/rasm6.png'

const data =[
    {
        id:1,
        h1:'Предложение от продавца',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. '

    },
    
  
]
const data1 =[
    {
        id:1,
        h1:'Доставка',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. '

    },
    
  
]
const data2 =[
    {
        id:1,
        h1:'Установка у клиента',
        p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Ultrices eros in cursus turpis massa tincidunt. Venenatis urna cursus eget nunc scelerisque viverra mauris in. '

    },
    
  
]
const Postavka = () => {

    let card = data?.map((el)=>(
        <div className="postavka-list">
              <h1>{el.h1}</h1>
              <p>{el.p}</p>
        </div>
    ))

    let card1 = data1?.map((el)=>(
        <div className="postavka-list">
              <h1>{el.h1}</h1>
              <p>{el.p}</p>
        </div>
    ))

    let card2 = data2?.map((el)=>(
        <div className="postavka-list">
              <h1>{el.h1}</h1>
              <p>{el.p}</p>
        </div>
    ))
    return (
        <div className='Postavka'>
            <div className="postavka-all container">
                <h1>Этапы поставки </h1>
                <div className="postavka-row">
                <div className="postavka-list">
                    <img src={rasm1} alt="" />
                </div>
              {card}
                </div>

                <div className="postavka-row1">
                <div className="postavka-list1">
                    <img src={rasm2} alt="" />
                </div>
              {card1}
                </div>

                <div className="postavka-row2">
                <div className="postavka-list2">
                    <img src={rasm3} alt="" />
                </div>
              {card2}
                </div>
            </div>
            
        </div>
    );
}

export default Postavka;
