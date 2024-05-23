import React, { useState, useEffect } from "react";
import "./inicial.css";
import Header from "../Header/Header";
import { ReactTyped as Typed } from "react-typed";
import fotoAbout02 from "../../images/fotoabout03.jpg";

function Inicial() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefone: '',
    cidade: '',
    energia: '',
  });

  const handleFormEdit = (event, name) => {
    setFormData({
      ...formData,
      [name]: event.target.value,
    });
  };

  const handleForm = async (event) => {
    event.preventDefault(); // Mover para o início da função para prevenir comportamento padrão antes do envio
    try {
      const response = await fetch('https://emailleadfortalsolar-production.up.railway.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dadosCliente: JSON.stringify(formData),
        }),
      });
      if (response.ok) {
        // Se a resposta for bem-sucedida, você pode fazer algo aqui, como exibir uma mensagem de sucesso
        console.log('Formulário enviado com sucesso!');
      } else {
        // Se a resposta não for bem-sucedida, você pode lidar com o erro aqui
        console.error('Erro ao enviar o formulário');
      }
    } catch (error) {
      // Lidar com erros de rede ou outros erros
      console.error('Erro de rede ou outro erro:', error);
    }
  };

  const [porcentagem, setPorcentagem] = useState(0);

  useEffect(() => {
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
    }, 100); // Ajuste a velocidade da contagem conforme necessário

    return () => clearInterval(interval); // Limpa o intervalo quando o componente é desmontado
  }, []);

  return (
    <div className="inicial">
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
        <div className="aboutDescription">
          <p className="beforeTitleAbout">Sobre a empresa</p>
          <p className="titleAbout">
            Nós estamos contruindo seu <strong>Futuro</strong>
          </p>
          <p className="aboutCompany">
            Estamos há mais de 6 anos no mercado, a Fortal Solar centraliza suas
            atividades na implantação de sistemas completos de energia solar
            buscando soluções inteligentes e sustentáveis na economia de energia
            elétrica obtendo assim para seus clientes um bom retorno financeiro.
          </p>
          <p className="aboutCompany">
            Trabalhamos com os melhores produtos que existem no mercado de
            energia solar nossa equipe é composta por profissionais
            especializados no ramo, desenvolvemos sistemas para residências
            áreas indústrias, comercias entre outras.
          </p>
          <button className="botaoStyleAbout">Saiba mais</button>
        </div>
        <div className="aboutFotos">
          <img src={fotoAbout02} alt="foto02" className="fotoAbout02" />
        </div>
      </div>
      {/* INFORMAÇOES MARCANTES SOBRE A EMPRESA */}
      <div className="informacoesMarcantes">
        <div className="cardInfor">
          <h4>+1000</h4>
          <p>Projetos</p>
        </div>
        <div className="cardInfor">
          <h4>+6</h4>
          <p>Anos no Mercado</p>
        </div>
        <div className="cardInfor">
          <h4>{porcentagem}%</h4>
          <p>Clientes Satisfeitos</p>
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
            </div>
          </div>
          <div className="formularioContato">
            <form onSubmit={handleForm}>
              <label>Nome</label>
              <input
                placeholder="Nome"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleFormEdit(e, 'name')}
              />
              <label>Email*</label>
              <input
                type="email"
                placeholder="Escreva seu Email"
                required
                value={formData.email}
                onChange={(e) => handleFormEdit(e, 'email')}
              />
              <label>Telefone*</label>
              <input
                type="text"
                placeholder="(DDD) Seu número de celular/Whatsapp"
                required
                value={formData.telefone}
                onChange={(e) => handleFormEdit(e, 'telefone')}
              />
              <label>Cidade*</label>
              <input
                type="text"
                placeholder="Sua cidade"
                required
                value={formData.cidade}
                onChange={(e) => handleFormEdit(e, 'cidade')}
              />
              <label>Valor da Conta de Energia Elétrica*</label>
              <input
                type="text"
                placeholder="Digite o valor da sua última conta"
                required
                value={formData.energia}
                onChange={(e) => handleFormEdit(e, 'energia')}
              />
              <input type="submit" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicial;