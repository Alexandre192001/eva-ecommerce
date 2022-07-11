import React,{Fragment} from 'react';
import NavMenu from './menu/menu';
import Header from './header/header';

export default function Cabeçalho(){
  return(
    <Fragment>
      <NavMenu/>
      <Header/>
    </Fragment>
  );
}

