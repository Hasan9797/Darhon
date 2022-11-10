import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Obyekt from "../Obyekt/Obyekt";
import Uy from "../Uy/Uy";
import Tur from '../Tur/Tur';
import Xonadon from "../Xonadon/Xonadon";
import Shartnoma from "../Shartnoma/Shartnoma";
import Buxgalteria from "../Buxgalteria/Buxgalteria";
import Qarizdorlar from "../Qarizdorlar/Qarizdorlar";


const Routers = () => {
  return (
    <div className='routers'> 
       <Routes>
          <Route path = '/' element = {<Obyekt />} />
          <Route path = '/uy' element = {<Uy />} />
          <Route path = '/xonadon' element = {<Xonadon />} />
          <Route path = '/tur' element = {<Tur />} />
          <Route path = '/shartnoma' element = {<Shartnoma />} />
          <Route path = '/buxgalteria' element = {<Buxgalteria />} />
          <Route path = '/qarizdorlar' element = {<Qarizdorlar />} />
       </Routes>
       <footer>Safeeds Transport Inc ©2022 Created by &nbsp;  <Link to='/'> Ikhtiyor</Link></footer>
    </div>
  )
}

export default Routers