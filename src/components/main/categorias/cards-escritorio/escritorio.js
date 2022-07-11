import React, {Fragment,useEffect,useState, useRef} from 'react'
import "./escritorio.css";
import Banner from '../../../img/images/banner.jpeg';

export default function CardEscritorio(){
    // Carrossel
    const carrossel = useRef(null);
    const handleLeftClick=(e)=>{
      e.preventDefault();
      carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const handleRightClick=(e)=>{
      e.preventDefault();
      carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
  
    // API
    const [data, setData] = useState([])  
    // Consumindo API
    useEffect(()=>{ 
      fetch("https://www.eva-test-api.plataformaeva.com/products")
      .then((response)=>response.json())
      .then(setData)
    },[]);
  
    if(!data || !data.length) return null;
  
  return(
    <Fragment>
      <section className="sessao-escritorio-wrapper">
        <h1 className="titulo-sessao" id="escritorio">Destaques em Escritório</h1>
        <div className="carrossel-escritorio-wrapper" ref={carrossel}>

          {data.map((item)=>{
          const {id,name,stars,price,promotional_price} = item
         return( 
         <div className="card-escritorio" key={id}>
          <img alt="imagem" src={Banner}></img>
          <div className="info-card">
            <p className="titulo-card">{name}</p>
            <p className="avaliacao-produto">{stars}</p>
            <p className="preco-antigo">R$ {price}</p>
            <p className="preco-novo">R$ {promotional_price}</p>
            <p className="preco-boleto">Ou R$ 88,20 com 10% off no boleto</p>
            <button className="btn-comprar">Comprar</button>
          </div>
          </div>)
          })}
        </div>

        <div className="container-setas-escritorio">
        <div onClick={handleLeftClick} className="seta-carrossel-left-escritorio">
          <div className="setacima"></div>
          <div className="setabaixo"></div>
        </div>

        <div onClick={handleRightClick} className="seta-carrossel-right-escritorio">
          <div className="setacima"></div>
          <div className="setabaixo"></div>
        </div>
        </div>

        
      </section>
    </Fragment>
  )
}