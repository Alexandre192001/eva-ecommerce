import React, {Fragment,useState} from 'react'
import "./contato.css";
// Imagem da sessao contato
import ImgEnvelope from "../img/svg/newsletter.svg";

export default function FormularioContato(){
  // Validação dos campos do formulario
  const [form, setForm] = useState({
    name:"",  
    email:""
  })
  
  const handleChange = (e)=>{
    let newProp = form;
    newProp[e.target.name] = e.target.value;
    setForm({...newProp});

  }

  const [emptyValue, setEmptyValue] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setValidEmail(true)

  let EmptyValue =  Object.values(form).some(obj=>obj=="");
  setEmptyValue(EmptyValue)

  let validacaoEmail = form["email"].toLocaleLowerCase()
  .match(/[a-z]+@[a-z]+\.com(\.br)*/)
  setValidEmail(validacaoEmail)
  }

  return(
    <Fragment>
      <section className="sessao-contato">
        <div className="logo-envelope">
        <img alt="imagem-enveloé" src={ImgEnvelope}></img>

      <div className="paragrafo-logo">
      <p>Receba nossas novidades, descontos e muito mais</p>
      </div>
      </div>

      <form className="formulario" onSubmit={(e)=>{handleSubmit(e)}}>
        <div className="inputs-form">
        
        <div className="campo-nome">
        {emptyValue ?<span className="name-error">Nome Precisa ser preenchido</span> :""}
        <input autoComplete='off' type="text" name="name" onChange={(e)=>handleChange(e)} placeholder='Digite seu nome'></input>
        </div>
       
        
        <div className="campo-email">
        {emptyValue && form["email"]==""?<span className="email-error">Email inválido</span> :""}
        {!validEmail && form["email"]!=="" ? <span className="email-error">Email inválido</span> :"" }
        <input  autoComplete='off' type="email" onBlur={(e)=>handleChange(e)} name="email" placeholder="Digite seu email"></input>
        </div>

        </div>
        <input type="submit" value="Eu quero receber novidades!"></input>
      </form>

     </section>
    </Fragment>
  );
}

