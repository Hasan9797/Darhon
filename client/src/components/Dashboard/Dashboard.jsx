
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Dashboard.css';
import { data } from './DashboardData';

const Dashboard = () => {
  const [active, setActive] = useState(data[0]);

  

  return (
    <div className='dashboard'>
       <ul className='dashboard-list'>
        {data.map((item) => {
          return (
            <li className='dashboard-item' key={item.id}>
              <Link to={item.to} onClick={() => setActive(item)} className={`dashboard-links ${active == item && 'dashboard-links__active'}`} > <span>{item.icon}</span> <span>{item.name}</span></Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Dashboard


// 