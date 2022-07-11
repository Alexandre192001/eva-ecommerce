import React,{Fragment} from "react";
// Importando arquivos para o MAIN
import InfoMain from "../main/informacoes-page/info-page";
import CategoriasMain from "../main/categorias/categorias";
import DestaquesCategorias from "./categorias/cards-destaque/destaques";
import DestaqueLivros from "./categorias/cards-livros/livros";
import DestaqueEscritorio from "./categorias/cards-escritorio/escritorio";
import DestaqueVestuario from "./categorias/cards-vestuario/vestuario"

export default function Main(){
  return(
    <Fragment>
      <InfoMain/>
      <CategoriasMain/>
      <DestaquesCategorias/>
      <DestaqueLivros/>
      <DestaqueEscritorio/>
      <DestaqueVestuario/>
    </Fragment>
  );
}

