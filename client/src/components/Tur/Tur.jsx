
import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";

const Tur = () => {
  return (
    <div className='obyekt'>
    <h1>Uy</h1>

    <div className="obyekt-item">
       <form className='obyekt-item__form'>
         <input className='obyekt-item__search' type="text" placeholder='Input search text' />
         <button className="search-btn"><AiOutlineSearch/></button>
       </form>

       <div className="obyekt-item__card">
        <h2>Qarizdorlar</h2>
        <p>+</p>
       </div>

       <div className="obyect-item-content">
         <p>Tur</p>
       </div>
    </div>
  </div>
  )
}

export default Tur