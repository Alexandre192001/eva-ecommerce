import React,{Fragment} from "react";
// Importação react-carousel
import {Carousel} from "react-responsive-carousel";
// CSS do react-responsive-carousel
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
// Imagens do carrossel
import ImgBackGround from "../../img/images/banner.jpeg";
import ImagemHeader1 from '../../img/images/imagem-header-transition-1.jpg';
import ImagemHeader2 from '../../img/images/imagem-header-transition-2.jpg';
import ImagemHeader3 from '../../img/images/imagem-header-transition-3.jpeg';
import "./header.css";


export default function Header(){
  return(
    <Fragment>
      <header className="header">
           <Carousel className="main-slide">
                <div>
                    <img alt="img-fundo" src={ImgBackGround} />
                    <div className="info-header">
                    <h1>Seu livros favoritos</h1>
                    <p>estão te esperando aqui!</p> 
                  </div>
                </div>

                <div>
                    <img alt="img-fundo" src={ImagemHeader1} />
                    <div className="info-header">
                    <h1>Livros de alta demanda</h1>
                    <p>Você só encontra aqui!</p> 
                  </div>
                </div>

                <div>
                    <img alt="img-fundo" src={ImagemHeader2} />
                    <div className="info-header">
                    <h1>Os melhores acessórios</h1>
                    <p>para seu escritório em um único lugar!</p> 
                  </div>
                </div>

                <div>
                    <img alt="img-fundo" src={ImagemHeader3} />
                    <div className="info-header">
                    <h1>Todos os tipos de Roupas</h1>
                    <p>de Alta qualidade por um preço que cabe no seu bolso!</p> 
                  </div>
                </div>
            </Carousel>
      </header>
    </Fragment>
  )
}