// Principal.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import MonedasImage from '../components/Monedas/1.png';
import ConvertidorImage from '../components/Convertidor/3.png';
import ImagenSeries from '../components/Series/2.png';
import './Principal.css';

function Principal() {
  return (
    <div className="principal-container">
      
      <ul>
        <li>
          <h1/>
          <br></br>
          <Link to="/monedas"><img src={MonedasImage} alt="Monedas" /></Link>
          <h1></h1>
        </li>
        <li>
          <Link to="/convertidor"><img src={ConvertidorImage} alt="Convertidor" /></Link>
          <h1></h1>
        </li>
        <li>
          <Link to="/series"><img src={ImagenSeries} alt="Series" /></Link>
          <h1></h1>
        </li>
      </ul>
    </div>
  );
}

export default Principal;
