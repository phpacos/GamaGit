//useState permite citar e modificar estados. retorna uma array
//o array tem duas posições. [usuario, setUsuario]
import React, { useState } from 'react';
import axios from 'axios';


function App(props) {
  //define o estado inicial do usuário como vazio
  //onChange : captura alterações no input
  const [ usuario, setUsuario] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>console.log(response.data));
 }
  return (  
   
    <>
    <p>{usuario}</p>
    <input className="usuario" placeholder="Usuário" value= {usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;


//jsx