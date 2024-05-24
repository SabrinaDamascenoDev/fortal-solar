import React from "react";
import "./comentario.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const NextArrow = ({ onClick }) => (
    <div className="slick-arrow next" onClick={onClick}>
      &#62;
    </div>
  );
  
  const PrevArrow = ({ onClick }) => (
    <div className="slick-arrow prev" onClick={onClick}>
      &#60;
    </div>
  );

function Comentario() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
       
      };
    
  return (
    <div className="comentarios">
    <Slider {...settings}>
      <div className="comentario">
        <h3>João Alves</h3>
        <p>Cliente - Solução Residencial</p>
        <div className="estrelas">
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
        </div>
        <p className="comentarioEscrito">
          Eu achei o sistema da Fortal Solar realmente muito bom, agora eu posso
          gerarminha própria energia elétric, o que eu mais gostei foi do
          suporte que é nota 1000!!
        </p>
      </div>
      <div className="comentario">
      <h3>João Alves</h3>
        <p>Cliente - Solução Residencial</p>
        <div className="estrelas">
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
        </div>
        <p className="comentarioEscrito">
          Eu achei o sistema da Fortal Solar realmente muito bom, agora eu posso
          gerarminha própria energia elétric, o que eu mais gostei foi do
          suporte que é nota 1000!!
        </p>
      </div>
      <div className="comentario">
      <h3>João Alves</h3>
        <p>Cliente - Solução Residencial</p>
        <div className="estrelas">
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
          <FaStar size={24} color="yellow" />
        </div>
        <p className="comentarioEscrito">
          Eu achei o sistema da Fortal Solar realmente muito bom, agora eu posso
          gerarminha própria energia elétric, o que eu mais gostei foi do
          suporte que é nota 1000!!
        </p>
      </div>

    </Slider>
    </div>
  );
}

export default Comentario;
