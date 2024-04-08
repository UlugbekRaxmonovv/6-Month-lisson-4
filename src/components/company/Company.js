import React from 'react';
import './Company.css'
import rasm1 from '../../components/img/logo1.png'
import rasm2 from '../../components/img/peopli.png'
import rasm3 from '../../components/img/p.png'
import { FaInstagramSquare } from "react-icons/fa";
import { SiInstatus } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import  rasm4 from '../../components/img/peopli1.png'
import  rasm5 from '../../components/img/peopli1.png'
import  rasm7 from '../../components/img/peopli2.png'
import  rasm8 from '../../components/img/peopli3.png'
import  rasm9 from '../../components/img/peopli4.png'


const data = [
  {
    id:1,
    h1:'Антон Макаров',
    p:'Руководитель компании'
},

]




const Company = () => {
    let card =data?.map((el)=>(
        <div className="rasm" key={el.id}>
        <h1>{el.h1}</h1>
        <p>{el.p}</p>
       </div>
    ))
    return (
        <div className='company'>
            <div className="company-all container">
                <h1>Сотрудники компании</h1>
                <div className="company-row">
                <div className="company-alt">
                  <div className="all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="logo">
                  <div className="rasm">
                      <img src={rasm2} alt="" />
                    </div>
                    {card}
                  </div>
                  <div className="icon">
                    <div className="icon-all">
                    <FaInstagramSquare />
                        </div>
                        <div className="icon-all">
                        <SiInstatus />
                        </div>
                        <div className="icon-all">
                        <FaFacebookSquare />
                        </div>
                    </div>
                 </div>

                 {/* ///2// */}
                 <div className="company-alt">
                  <div className="all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="logo">
                  <div className="rasm">
                      <img src={rasm3} alt="" />
                    </div>
                    <div className="rasm">
        <h1>Елена Валерьева</h1>
        <p>Главный бухгалтер</p>
       </div>
                  </div>
                  <div className="icon">
                    <div className="icon-all">
                    <FaInstagramSquare />
                        </div>
                        <div className="icon-all">
                        <SiInstatus />
                        </div>
                        <div className="icon-all">
                        <FaFacebookSquare />
                        </div>
                    </div>
                 </div>


                 {/* 3 */}
                 <div className="company-alt">
                  <div className="all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="logo">
                  <div className="rasm">
                      <img src={rasm4} alt="" />
                    </div>
                    <div className="rasm">
        <h1>Иван Аркадьев </h1>
        <p>Менеджер по закупкам</p>
       </div>
                  </div>
                  <div className="icon">
                    <div className="icon-all">
                    <FaInstagramSquare />
                        </div>
                        <div className="icon-all">
                        <SiInstatus />
                        </div>
                        <div className="icon-all">
                        <FaFacebookSquare />
                        </div>
                    </div>
                 </div>

                 {/* 4 */}
                 <div className="company-alt">
                  <div className="all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="logo">
                  <div className="rasm">
                      <img src={rasm7} alt="" />
                    </div>
                    <div className="rasm">
        <h1>Борис Вавилов</h1>
        <p>Бухгалтер</p>
       </div>
                  </div>
                  <div className="icon">
                    <div className="icon-all">
                    <FaInstagramSquare />
                        </div>
                        <div className="icon-all">
                        <SiInstatus />
                        </div>
                        <div className="icon-all">
                        <FaFacebookSquare />
                        </div>
                    </div>
                 </div>

                 {/* 5 */}
                 <div className="company-alt">
                  <div className="all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="logo">
                  <div className="rasm">
                      <img src={rasm8} alt="" />
                    </div>
                    <div className="rasm">
        <h1>Алина Кравец</h1>
        <p>Сотрудник отдела кадров</p>
       </div>
                  </div>
                  <div className="icon">
                    <div className="icon-all">
                    <FaInstagramSquare />
                        </div>
                        <div className="icon-all">
                        <SiInstatus />
                        </div>
                        <div className="icon-all">
                        <FaFacebookSquare />
                        </div>
                    </div>
                 </div>
                 {/* 6 */}
                 <div className="company-alt">
                  <div className="all">
                    <img src={rasm1} alt="" />
                  </div>
                  <div className="logo">
                  <div className="rasm">
                      <img src={rasm9} alt="" />
                    </div>
                    <div className="rasm">
        <h1>Виктор Козуб</h1>
        <p>Менеджер по закупкам</p>
       </div>
                  </div>
                  <div className="icon">
                    <div className="icon-all">
                    <FaInstagramSquare />
                        </div>
                        <div className="icon-all">
                        <SiInstatus />
                        </div>
                        <div className="icon-all">
                        <FaFacebookSquare />
                        </div>
                    </div>
                 </div>
                </div>
            </div>
            
        </div>
    );
}

export default Company;
