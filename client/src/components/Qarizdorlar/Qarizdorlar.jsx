
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const Qarizdorlar = () => {
  return (
    <div className='obyekt'>
    <h1>Obyekt</h1>

    <div className="qarizdorlar-item">
       <form className='qarizdorlar-item__form'>
         <input className='qarizdorlar-item__search' type="text" placeholder='Input search text' />
         <button className="search-btn"><AiOutlineSearch/></button>
       </form>

       <div className="qarizdorlar-item__card">
        <h2>Qarizdorlar</h2>
        <p>+</p>
       </div>

       <div className="qarizdorlar-item-content">
         <div className="qarizdorlar-item-content__top">
           <p>Umumiy qarzdorlar soni</p>
           <p>Foiz arizdorligi</p>
           <p>Xonalar soni</p>
           <p>Kreditga olingan xonadonning kvadrati</p>
           <p>Xonadan topshiradigan yili</p>
           <p></p>
           <p></p>
           <p></p>
         </div>
         <div className="qarizdorlar-item-content__bottom">
           <p>3</p>
           <p>2</p>
           <p>4</p>
           <p>120 m2</p>
           <p>2020</p>
           <p><button>O'chirish</button></p>
           <p><button>Qo'shish</button></p>
           <p><button>O'zgartrish</button></p>
         </div>
       </div>
    </div>
  </div>
  )
}

export default Qarizdorlar