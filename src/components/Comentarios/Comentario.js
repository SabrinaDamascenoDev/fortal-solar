import React from "react";
import "./comentario.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";



function Comentario() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
  
        
       
      };
    
  return (
    <div className="comentarios">
    <Slider {...settings}>
      <div className="comentario">
        <p className="comentarioEscrito" style={{fontSize: "100%", paddingTop: "10%"}}>
          Eu achei o sistema da Fortal Solar realmente muito bom, agora eu posso
          gerarminha própria energia elétric, o que eu mais gostei foi do
          suporte que é nota 1000!!
        </p>
        <h3>João Alves</h3>
        <p>Cliente - Solução Residencial</p>
        <div className="estrelas" >
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
        </div>
      </div>
      <div className="comentario">
        <p className="comentarioEscrito" style={{fontSize: "100%", paddingTop: "10%"}}>
          Eu achei o sistema da Fortal Solar realmente muito bom, agora eu posso
          gerarminha própria energia elétric, o que eu mais gostei foi do
          suporte que é nota 1000!!
        </p>
        <h3>João Alves</h3>
        <p>Cliente - Solução Residencial</p>
        <div className="estrelas">
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
        </div>
      </div>
      <div className="comentario">
        <p className="comentarioEscrito" style={{fontSize: "100%", paddingTop: "10%"}}>
          Eu achei o sistema da Fortal Solar realmente muito bom, agora eu posso
          gerarminha própria energia elétric, o que eu mais gostei foi do
          suporte que é nota 1000!!
        </p>
        <h3>João Alves</h3>
        <p>Cliente - Solução Residencial</p>
        <div className="estrelas">
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
          <FaStar size={16} color="#ff8c00" />
        </div>
      </div>

    </Slider>
    </div>
  );
}

export default Comentario;
