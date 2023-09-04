import { useState } from 'react';
import {FiSearch} from 'react-icons/fi'
import './style.css'
import api from './services/api'


function App() {


  const[input, setInput] = useState('')
  const[cep, setCep] = useState({})

  const  handleSearch = async (event) =>{
    // 01310930/json/
    // if(cep === ''){
    //   alert('Preencha algum CEP')
    //   return
    // }
    // try{
      if(event.target.value.length == 8){
        const response = await api.get(`${event.target.value}/json`)
        setCep(response.data)
      }
    //   setInput('')  
    // }catch{
    //   alert('Ops erro ao buscar')
    //   setInput('')  
    // }
  }

  return (
    <div className="container">
     <h1 className="title">Buscador CEP</h1>

     <div className="containerInput">

    <input 
    type="text"
    placeholder="Digite seu CEP..."
    // value={input}
    onChange={handleSearch}
    />

    <button className="buttonSearch" >
    <FiSearch size={25} color='#FFF'/>
    </button>
     </div>


    {Object.keys(cep).length > 0 && (

    <main className='main'>
      <h2>CEP: {cep.cep}</h2>
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
      
     </main>
    )}
     

    </div>
  );
}

export default App;
