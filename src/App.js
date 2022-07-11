import './App.css';
import React, {Fragment} from 'react';
import Header from './components/cabeçalho/cabeçalho';
import Main from './components/main/main';
import Contato from './components/sessao-contato/contato';
import Footer from './components/footer/footer';

function App() {
  return (
   <Fragment>
    <Header/>
    <Main/>
    <Contato/>
    <Footer/>
   </Fragment>
  );
}

export default App;
