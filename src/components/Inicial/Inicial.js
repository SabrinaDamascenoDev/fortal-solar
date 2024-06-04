import React, { useState, useEffect, useRef } from "react";
import { ReactTyped as Typed } from "react-typed";

//Components
import Rodape from "../Rodape/Rodape";
import Header from "../Header/Header";
import Porcentagem from "../porcentagem/porcentagem";
import Comentario from "../Comentarios/Comentario";


import fotoAbout02 from "../../images/fotoabout03.jpg";

import renovavelImage from "../../images/renovavel.jpg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCoins, faPenRuler, faSolarPanel } from '@fortawesome/free-solid-svg-icons';

import "./inicial.css";

function Inicial() {
  //scroll efecct
  const elementsRef = useRef([]);
  const shownElements = useRef(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !shownElements.current.has(entry.target)) {
          entry.target.classList.add('show');
          entry.target.classList.remove('hidden');
          shownElements.current.add(entry.target);
        }
      });
    });

    const currentElements = elementsRef.current;
    currentElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      currentElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  //enviar para a api
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    cidade: "",
    energia: "",
  });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    event.preventDefault();
    try {
      const formDataString = `{"dadosCliente": "nome: ${formData.name}\\n email: ${formData.email}\\n telefone: ${formData.telefone}\\n cidade: ${formData.cidade}\\n Conta de energia: ${formData.energia}"}`;

      const response = await fetch(
        "https://emailleadfortalsolar-production.up.railway.app/envia-email/lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: formDataString,
        }
      );
      // Verificar se a solicitação foi bem-sucedida
      if (response.ok) {
        console.log("Formulário enviado com sucesso!");
      } else {
        console.error("Erro ao enviar o formulário");
      }
    } catch (error) {
      console.error("Erro de rede ou outro erro:", error);
    }
  };

  const [porcentagem, setPorcentagem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Configura a porcentagem de visibilidade necessária para ativar o evento
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const targetPorcentagem = 100; // Número total de projetos
    const interval = setInterval(() => {
      setPorcentagem((prevCounter) => {
        if (prevCounter < targetPorcentagem) {
          return prevCounter + 1;
        } else {
          clearInterval(interval); // Interrompe a animação quando alcança o número total de projetos
          return targetPorcentagem;
        }
      });
    }, 50); // Ajuste a velocidade da contagem conforme necessário

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, [isVisible]);


  return (
    <div className="inicial hidden"  ref={(el) => (elementsRef.current[0] = el)}>
      <Header />
      <div className="container">
        <div className="inicio">
          <p className="boasvindas">Bem-Vindo ao Fortal Solar</p>
          <h2>
            Melhor energia solar da região <br />
            <Typed
              strings={["Sustentável, acessível e essencial."]}
              typeSpeed={80}
              backSpeed={90}
              loop={2}
              showCursor={true}
              cursorChar={"|"}
              className="slogan"
            />
          </h2>
          <div className="botoes">
            <button className="botaoStyle style01bnt">Entre em contato</button>
            <button className="botaoStyle style02bnt">Sobre a Empresa</button>
          </div>
        </div>
      </div>
      {/* Sobre a empresa */}
      <div className="aboutInicio">
        <div
          className="aboutDescription hidden"
          ref={(el) => (elementsRef.current[1] = el)}
        >
          <p className="beforeTitleAbout">Sobre a empresa</p>
          <p className="titleAbout">
            Nós estamos contruindo seu <strong>Futuro</strong>
          </p>
          <p className="aboutCompany">
            Estamos há mais de 6 anos no mercado, a Fortal Solar centraliza suas
            atividades na implantação de sistemas completos de energia solar
            buscando soluções inteligentes e sustentáveis na economia de energia
            elétrica obtendo assim para seus clientes um bom retorno financeiro.
            <br></br>
            <br></br>
            Trabalhamos com os melhores produtos que existem no mercado de
            energia solar nossa equipe é composta por profissionais
            especializados no ramo, desenvolvemos sistemas para residências
            áreas indústrias, comercias entre outras.
          </p>
          <button className="botaoStyleAbout">Saiba mais</button>
        </div>
        <div
          className="aboutFotos hidden"
          ref={(el) => elementsRef.current.push(el)}
        >
          <img src={fotoAbout02} alt="foto02" className="fotoAbout02" />
        </div>
      </div>
      {/* INFORMAÇOES MARCANTES SOBRE A EMPRESA */}
      <div className="informacoesMarcantes">
        <div
          className="cardInfor hidden"
          ref={(el) => elementsRef.current.push(el)}
        >
          <h4>+1000</h4>
          <p>Projetos</p>
        </div>
        <div
          className="cardInfor hidden"
          ref={(el) => elementsRef.current.push(el)}
        >
          <h4>+6</h4>
          <p>Anos no Mercado</p>
        </div>
        <div
          className="cardInfor hidden"
          ref={(el) => elementsRef.current.push(el)}
          
        >
          <div ref={ref}>
          {isVisible && ( 
          <h4>{porcentagem}%</h4>
            )}
          </div>  
          
          <p>Clientes Satifeitos</p>
        </div>
      </div>
      {/* FORMULARIO DE CONTATO */}
      <div className="formContato">
        <h2 className="titleForm">
          PASSOS PARA COMEÇAR A PRODUZIR ENERGIA LIMPA E DE GRAÇA
        </h2>
        <p className="descriptionForm">
          Conheça agora os passos, para você ou sua empresa começar a produzir
          Energia Solar
        </p>
        <div className="elementsFormContato">
          <div className="caminhosParaContato">
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline-item">1</div>
                <div className="timeline-item">2</div>
                <div className="timeline-item">3</div>
                <div className="timeline-item">4</div>
              </div>
              <div className="timeline-textos">
                <div
                  className="timeTexto hidden"
                  ref={(el) => elementsRef.current.push(el)}
                >
                  <h3>Simulação Financeira</h3>
                  <p>Preencha o Formulário e requisite seu orçamento</p>
                </div>
                <div
                  className="timeTexto hidden"
                  ref={(el) => elementsRef.current.push(el)}
                >
                  <h3>Avalie Nossa Proposta</h3>
                  <p>
                    Nossos Especialistas vão analisar o seu caso e oferecer as
                    melhores propostas para suprir suas necessidades.
                  </p>
                </div>
                <div
                  className="timeTexto hidden"
                  ref={(el) => elementsRef.current.push(el)}
                >
                  <h3>Fechamento do Negócio</h3>
                  <p>
                    Vamos disponibilizar as melhores formas de pagamentos com
                    prazos e valores que se adequam a sua realidade.
                  </p>
                </div>
                <div
                  className="timeTexto hidden"
                  ref={(el) => elementsRef.current.push(el)}
                >
                  <h3>Agora é Conosco</h3>
                  <p>
                    Agora é só aguardar que faremos a instalação do seu Projeto
                    e a ligação junto a distribuidora.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="formularioContato">
            <form
              onSubmit={handleForm}
              className="hidden"
              ref={(el) => elementsRef.current.push(el)}
            >
              <h2>Orçamento Grátis</h2>
              <label>Nome</label>
              <input
                placeholder="Nome"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleFormEdit(e, "name")}
                className="inputForm"
              />
              <label>Email*</label>
              <input
                type="email"
                placeholder="Escreva seu Email"
                required
                value={formData.email}
                onChange={(e) => handleFormEdit(e, "email")}
                className="inputForm"
              />
              <label>Telefone*</label>
              <input
                type="text"
                placeholder="(DDD) Seu número de celular/Whatsapp"
                required
                value={formData.telefone}
                onChange={(e) => handleFormEdit(e, "telefone")}
                className="inputForm"
              />
              <label>Cidade*</label>
              <input
                type="text"
                placeholder="Sua cidade"
                required
                value={formData.cidade}
                onChange={(e) => handleFormEdit(e, "cidade")}
                className="inputForm"
              />
              <label>Valor da Conta de Energia Elétrica*</label>
              <input
                type="text"
                placeholder="Digite o valor da sua última conta"
                required
                value={formData.energia}
                onChange={(e) => handleFormEdit(e, "energia")}
                className="inputForm"
              />
              <input type="submit" value="Enviar" className="btnSubmit" />
            </form>
          </div>
        </div>
      </div>
        

      {/*PORCENTAGENS RENOVAVEL*/}
      <div className="porcentagensDiv">
        <div
          className="imgRenovavel hidden"
          ref={(el) => elementsRef.current.push(el)}
        >
          <img
            src={renovavelImage}
            alt="Imagem que demonstra a energia renovavel, com um sol iluminando uma planta, por conta da preservação do meio ambient"
          />
        </div>
        <div
          className="inforsRenovavel hidden"
          ref={(el) => elementsRef.current.push(el)}
        >
          <p className="pRenovavel">
            Valorizando as Soluções Ecologicamente Corretas
          </p>
          <h4>Nossa Empresa sempre desenvolve Projetos Sustentáveis</h4>
          <p>
            Pensando no Meio Ambiente e no Bem Estar das Pessoas nossa equipe de
            Profissionais desenvolve cuidadosamente cada projeto pensando no
            melhor aproveitamento do ecossistema nativo e sempre entregando o
            melhor das Soluções Sustentáveis e Ecologicamente Corretas.
          </p>
          <div className="porcentagensNiveis">
            <div className="porc02">
              <h5>Ambiente Preservado</h5>
              <div className="niveis">
                <Porcentagem percentage={75} />
              </div>
            </div>
            <div className="porc03">
              <h5>Economia Energética</h5>
              <div className="niveis">
                <Porcentagem percentage={87} />
              </div>
            </div>
            <div className="porc04">
              <h5>Impacto Ambietal</h5>

              <div className="niveis">
                <Porcentagem percentage={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*PROCESSOS*/}
      <div className="sessaoProcessos">
      
        <div className="inforsProcessos">
              <p className="inforPProcessos">Experiência e Confiabilidade ao Seu Dispor</p>
              <h2>Conheça Nossos Processos</h2>
              <div className="processos">
                <div className="processo hidden" ref={(el) => elementsRef.current.push(el)}>
                    <FontAwesomeIcon icon={faClipboardList} color="#ff8c00" className="iconsProcessos"/>
                    <p className="titleProcessos">Consultoria do Projeto</p>
                    <p className="descricaoProcessos">Desenvolvemos soluções customizadas para atender às necessidades específicas de cada cliente, desde residências até empreendimentos comerciais.</p>
                </div>
                <div className="processo hidden" ref={(el) => elementsRef.current.push(el)}>
                    <FontAwesomeIcon icon={faPenRuler} color="#ff8c00" className="iconsProcessos"/>
                    <p className="titleProcessos">Instalação do Sistema</p>
                    <p className="descricaoProcessos">Nosso processo de instalação dos equipamentos fotovoltaicos, assegura uma transição suave para uma fonte de energia limpa e sustentável.</p>
                </div>
                <div className="processo hidden" ref={(el) => elementsRef.current.push(el)}>
                    <FontAwesomeIcon icon={faCoins} color="#ff8c00" className="iconsProcessos"/>
                    <p className="titleProcessos">Execução do Projeto</p>
                    <p className="descricaoProcessos">Nossa abordagem envolve a criação de esquemas detalhados e a implementação de sistemas eficientes, visando maximizar a geração de energia solar.</p>
                </div>
                <div className="processo hidden" ref={(el) => elementsRef.current.push(el)}>
                  <FontAwesomeIcon icon={faSolarPanel} color="#ff8c00" className="iconsProcessos"/>
                  <p className="titleProcessos">Projeto Pronto</p>
                    <p className="descricaoProcessos">Oferecemos suporte durante todo o ciclo, desde a elaboração até a operação plena do sistema fotovoltaico, garantindo eficiência energética e redução de custos para nossos clientes.</p>
                </div>
              </div>
        </div>
      

    </div>
    
      {/*COMENTARIOS SOBRE A EMPRESA*/}

      <div className="comenSessao">
            <div className="informaçõesDosComenarios hidden"  ref={(el) => elementsRef.current.push(el)}>
            <p className="comenInicial">Comentários dos Clientes</p>
            <h2>Casos de Sucesso</h2>
            </div>
            <div classname="hidden"  ref={(el) => elementsRef.current.push(el)}>
                <Comentario  />
            </div>
      </div>

      {/*RODAPE*/}
      <div className="hidden"  ref={(el) => elementsRef.current.push(el)}>
        <Rodape />
      </div>
    </div>
  );
}

export default Inicial;
