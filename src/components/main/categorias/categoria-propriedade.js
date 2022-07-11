import React,{Fragment} from 'react'


export default function Categoriasprops(props){
  return(
    <Fragment>
        <div className="card-categoria">
          <img src={props.url}></img>
          <h1>{props.titulo}</h1>
        </div>
    </Fragment>
  );

}


