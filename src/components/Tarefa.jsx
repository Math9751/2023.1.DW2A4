import React from 'react';
import './Tarefa.css';
import { BsXCircleFill, BsFillInfoSquareFill } from 'react-icons/bs';
import {useHistory } from 'react-router-dom'

const Tarefa = ({tarefa, handleTarefaClick, handleApagarTarefa}) => {
    const history = useHistory();

    const handleDetalhesTarefaClick = () => {
        history.push(`/${tarefa.title}`);
    } 

    return (
    <div className='tarefa-container'
    style={tarefa.completed ? {borderLeft: '6px solid green'} : {}}>
        <div className='tarefa-title'
        onClick={() => handleTarefaClick(tarefa.id)}>
            {tarefa.title}
            </div>

            <div className='botoes-container'>
                <button className='remover-tarefa-botao'
                onClick={() => handleApagarTarefa(tarefa.id)}>
                    <BsXCircleFill/>
                </button>
                <button className='ver-detalhes-tarefa' onClick={handleDetalhesTarefaClick}>
                    <BsFillInfoSquareFill/>
                </button>
            </div>

        </div>
    );
}
 
export default Tarefa;