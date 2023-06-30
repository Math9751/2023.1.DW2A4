import React, { useState } from 'react';
import './AdicionarTarefa.css'
import Botao from './Botao'

const AdicionarTarefa = ({handleAdicionarTarefa}) => {
    const [inputData, setInputData] = useState ('')
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAdicionarTarefaClick = () => {
        handleAdicionarTarefa(inputData);
        setInputData('');
    }
    

    return ( 
        <div className='adicionar-tarefa-container'>
            <form>
                <input
                onChange={handleInputChange}
                value={inputData}
                className='adicionar-tarefa-input'
                type='text'
                required
                />;
            <div className="adicionar-tarefa-botao">/</div>
            <Botao onClick={handleAdicionarTarefaClick}>Adicionar</Botao>
            </form>
        </div>
        );
}
 
export default AdicionarTarefa;