import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import logo from "../../images/fortal.png"
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='contactHeader'>
            <p style={{fontSize: "100%"}}>Atendimento de Segunda á Sexta das 8:00 hs às 18:00 hs </p>

            <div className='iconsInicias'>
                <li><FaFacebook className='iconHeader' /></li>
                <li><FaInstagram  className='iconHeader'  /></li>
                <li><FaYoutube className='iconHeader'   /></li>
            </div>
        </div>

        <div className='headHeader'>
            <img src={logo} alt='Logo' className='logoHeader'/>
            <div className='inforsHeader'>
                <div className='inforHeader'>
                    <FaMapMarkerAlt color="#ff8c00" className='iconHeaderHead'/>
                    <p>Fortaleza-Ceará</p>
                </div>
                <div className='inforHeader'>
                    <FaPhone  color="#ff8c00" className='iconHeaderHead'/>
                    <p>85 3063-9883</p>
                </div>
            </div>
        </div>
        <div className='menuOficial'>
            <li className='underline'>Home</li>
            <li>Quem Somos</li>
            <li>Nossos Serviços</li>
            <li>Projetos</li>
            <li>Contato</li>
        </div>

    </div>
  );
}

export default Header;
