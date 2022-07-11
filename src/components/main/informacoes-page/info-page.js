import React,{Fragment} from 'react';
import "./info-page.css";
// Importando imagens 
import ImagemCadeado from "../../img/svg/cadeado.svg";
import ImagemCartao from "../../img/svg/cartao.svg";
import ImagemCaminhao from "../../img/svg/caminhao.svg";

export default function Info(){
  return(
    <Fragment>
      <div className="info-main-wrapper">

      <div className="info-main">
      <img alt="Cadeado - IMG" src={ImagemCadeado}></img>
      <p>Site seguro</p>
      </div>
      

      <div className="info-main">
      <img alt="Cartão - IMG" src={ImagemCartao}></img>
      <p>Até 12x sem juros</p>
      </div>

      <div className="info-main">
      <img alt="Caminhão - IMG" src={ImagemCaminhao}></img>
      <p>Entrega para todo o Brasil</p>
      </div>
      
      </div>
    </Fragment>
  )
}

