import { Fragment } from "react";

export default function InfoFooter(props){
  return(
    <Fragment>
      <div className="informacao-footer-container">
        <img alt="imagem-footer" src={props.url}></img>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
        <p>{props.text4}</p>
        <p>{props.text5}</p>
      </div>
    </Fragment>
  )
}


