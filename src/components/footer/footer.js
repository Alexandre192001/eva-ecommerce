import React, {Fragment} from 'react';
import "./footer.css";
import FooterInfo from './infomacao-footer/info-footer';
// Imagens para Footer
import ImgLoja from '../img/svg/loja.svg';
import ImgMapa from '../img/svg/mapa.svg';
import ImgWhats from '../img/svg/whatsapp.svg';
import ImgEmail from '../img/svg/email.svg';

export default function Footer(){
  return(
    <Fragment>
      <div className="footer">
        
        <div className="titulo-footer">
          <h1>Eva Shop</h1>
        </div>

          <div className="container-dados-footer">

          <div className="text-footer">
          <FooterInfo url={ImgLoja} text1="Quem somos" text2="Políticas de privacidade" text3="Feedback de Clientes" text4="Trocas e devoluções"/>
          </div>

          <div className="text-footer">
          <FooterInfo url={ImgMapa} text1="Rua Av. Rio Negro, 1100" text2="Jardim Roselandia" text3="14406-005" text4="Franca / SP"/>
          </div>
          
          <div className="text-footer">

            <FooterInfo url={ImgLoja}/>

              <div className="redes-sociais-footer">
                <img alt="Imagem Whats" src={ImgWhats}></img>
                <p>(16) 9 98179-7325</p> 
              </div>

              <div className="redes-sociais-footer">
                <img alt="Imagem Email" src={ImgEmail}></img>
                <p>contato@evacommerce.com.br</p>
              </div>

          </div>
          </div>
        </div>
      
    </Fragment>
  );

}
