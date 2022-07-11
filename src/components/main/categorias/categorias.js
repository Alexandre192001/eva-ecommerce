import React,{Fragment} from 'react';
import "./categorias.css";
import Cards from './categoria-propriedade';
// Imagens dos cards
import ImgCardLivros from '../../img/images/category-1.jpeg';
import ImgCardEscritorio from '../../img/images/category-2.jpeg';
import ImgCardVestuario from '../../img/images/category-3.jpeg';

export default function CategoriasMain(){
  return(
    <Fragment>
      <div className="card-categoria-wrapper">

       <Cards  className="card-categoria" url={ImgCardLivros} titulo="Livros"/>
       <Cards className="card-categoria" url={ImgCardEscritorio} titulo="Escritório"/>
       <Cards className="card-categoria" url={ImgCardVestuario}  titulo="Vestuário"/>
       
      </div>
    </Fragment>
  );
}
