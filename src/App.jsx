import React, { useEffect, useState } from 'react';
import Tarefas from './components/Tarefas';
import Header from './components/Header';
import AdicionarTarefa from './components/AdicionarTarefa';
import './App.css';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Bro, Route } from 'react-router-dom';
import DetalhesTarefa from './components/DetalhesTarefa';
import axios from 'axios';

const App = () => {

  const [tarefas, setTarefas] = useState ([
    {
      id: '1',
      title: 'Praticar o violão',
      completed: false,
  },
  
  {
    id: '2',
    title: 'Pegar referências',
    completed: true,
  },
]);

  useEffect (() => {
    const fetchTarefas = async () => {
      const {data} = await axios.get(
        'https://mocki.io/v1/c24b18c6-1bbc-4d32-bbaa-1b75179712a6'
      );

      setTarefas(data);

    };

    fetchTarefas();
  }, []);



const handleTarefaClick  = (tarefaId) => {
  const newTarefas = tarefas.map (tarefa => {
    if (tarefa.id === tarefaId) return {
      ...tarefa, completed: !tarefa.completed
    }
      return tarefa;
  }
  );
  setTarefas(newTarefas);

}

const handleAdicionarTarefa = (tarefaTitulo) => {
  const newTarefas = [...tarefas, {
    title: tarefaTitulo,
    id: uuidv4(),
    completed: false,
  },
];

setTarefas(newTarefas);

};

const handleApagarTarefa = (tarefaId) => {
  const newTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
  setTarefas(newTarefas);
}
 


  return (
    <Bro>
  <div className='container'>
    <Header/>
    {/* <Routes>  */}
    <Route path='/'
    exact
    render = {() => (
      <>
      <AdicionarTarefa handleAdicionarTarefa = {handleAdicionarTarefa} />
      <Tarefas tarefas = {tarefas}
      handleTarefaClick = {handleTarefaClick}
      handleApagarTarefa = {handleApagarTarefa} />
      </>
    )
    } />
    <Route path='/:tarefaTitulo' exact component = {DetalhesTarefa} />
    {/* </Routes> */}
  </div>
  </Bro>
  )
  
};

export default App;