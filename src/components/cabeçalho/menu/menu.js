import React,{ Fragment,useState } from "react";
import "./menu.css"
// Importações das imagens
import MenuHamburguer from "../../img/svg/menu-hamburguer.svg";
import LogoEva from "../../img/images/logo.png";
import Lupa from "../../img/svg/busca.svg";
import MinhaConta from "../../img/svg/usuario.svg"; 
import Carrinho from "../../img/svg/carrinho.svg"

export default function MenuHeader(){

  // Animação do MenuHamburguer
  const[active,setMode] = useState(false)
  const ToogleMode = ()=>{
    setMode(!active)
  }
  
  return(
    <Fragment>
      <nav className="menu-header">
        <img alt="LogoEva" className="logo-header" src={LogoEva}></img>

        <div className="categorias">
          <select className="select-categoria">
            <option>Categorias</option>
            <option value="livros">Livros</option>
            <option value="escritorio">Escritório</option>
            <option value="vestuario">Vestuário</option>
            <option value="informatica">Informática</option>
          </select>
        </div>

        <div className="campo-busca">
          <input type="text" className="input-busca"></input>
          <img alt="Lupa" src={Lupa} className="lupa"></img>
        </div>

        <div className={active ? 'menu menuOpen' : 'menu menuClose'}>

        <div className="usuario-login">
          <p className="conta-user">
            Minha conta
          </p>
          <img alt="Usuario" src={MinhaConta} ></img>
        </div>

        <div className="carrinho">
          <p className="label-carrinho">
            Carrinho (2)
          </p>
          <img alt="Carrinho" src={Carrinho} ></img>
        </div>
        
        </div>
        
        <img  alt="menu" onClick={ToogleMode}  src={MenuHamburguer} className={active? 'icon iconActive' : 'icon'}></img>
      </nav>
    </Fragment>
  );
}
