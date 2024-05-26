import React from "react";
import logo from "../../images/fortal.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./rodape.css";

function Rodape() {
  return (
    <div className="containerRodape">
      <div className="inforsRodape">
        <div className="redesLogo">
          <img
            src={logo}
            alt="Logo da empresa Fortal Solar"
            className="logoRodape"
          />

         <p className="decriptionLogo">Com mais de 6 anos de experiência  estamos no mercado cearense oferecendo as mais completas soluções para energia solar sustentável.</p>
        </div>
        <div className="princLinks">
        <div className="rapidosLinks">
          <p className="titleRodape">Links Úteis</p>
          <div className="todosLinksRapidos">
            <p className="inforsP">Contato</p>
            <p className="inforsP">Sobre a empresa</p>
            <p className="inforsP">Projetos</p>
          </div>
        </div>
        <div className="informacoesGerais">
          <p className="titleRodape">Empresa</p>
          <p className="inforsP">
            Av. Oliveira Paiva, N° 730 <br></br>- Fortaleza, Ceará
          </p>
          <p className="inforsP">Email: Contato@fortalsolar.com.br</p>
          <p className="inforsP">Tel: (85) 3063-9883</p>
        </div> 
         </div>
        <div className="newsLetter">
          <p className="titleRodape">Newsletter</p>
          <p className="decriptionLetter">
            Receba nossas Ofertas e Novidades e fique por dentro do Mundo da
            Energia Renovável.
          </p>
         
          <form className="formRodape">
            <input type="email" placeholder="Digite seu email aqui" />
            <input type="submit" className="btnRodape"/>
          </form>
       </div>
      </div>
      <div className="copyright">
        <p>Fortal Solar © 2024 – Desenvolvido por Sabrina Damasceno</p>
         <div className="redesRodape">
            <li>
              <FaFacebook className="iconRodape" />
            </li>
            <li>
              <FaInstagram className="iconRodape" />
            </li>
            <li>
              <FaYoutube className="iconRodape" />
            </li>
          </div>
      </div>
    </div>
  );
}

export default Rodape;
