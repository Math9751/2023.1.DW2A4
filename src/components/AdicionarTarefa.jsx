import React, { useState } from 'react';
import './AdicionarTarefa.css'
import Botao from './Botao'
import ReactJsonSchemaComponent from './ReactJsonSchemaComponent';

const AdicionarTarefa = ({handleAdicionarTarefa}) => {
    const [inputData, setInputData] = useState ('')
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAdicionarTarefaClick = () => {
        handleAdicionarTarefa(inputData);
        setInputData('');
    }
    
    const schema = {
        type: 'object',
        required: ['tarefa'],
        properties: {
          age: { type: 'string' },
          done: { type: "boolean", title: "Done?", default: false },
        },
      };
      
      function validate(formData, errors) {
        if (formData.tarefa == null) {
          errors.tarefa.addError("Insira uma tarefa.");
        }
        return errors;
      }
      
      const onSubmit = ({ formData }, e) => console.log("submit: ", formData);
    return ( 
        <div className='adicionar-tarefa-container'>
            <form>
                <input
                id='tarefa'
                onChange={handleInputChange}
                value={inputData}
                className='adicionar-tarefa-input'
                type='text'
                placeholder='Saia do PC e leia um livro'
                required
                autocomplete="on"
                />;
            <div className="adicionar-tarefa-botao">/</div>
            <Botao onClick={handleAdicionarTarefaClick}>Adicionar</Botao>
            </form>
        </div>
        );
}
 
export default AdicionarTarefa;