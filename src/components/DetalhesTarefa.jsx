import React from 'react';
import Botao from './Botao';
import { useParams, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './DetalhesTarefa.css'

const DetalhesTarefa = () => {

    const params = useParams();
    const history = useHistory();

    const handleBotaoVoltarClick = () => {
        history.goBack()
    }

    return (
        <div>
        <div className="botao-voltar-container">
            <Botao onClick={handleBotaoVoltarClick}>Voltar</Botao>
        </div>
        <div className="detalhes-tarefa-container">
            <h2>{params.tarefaTitulo}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates optio dignissimos voluptas, voluptatum,pariatur aliquam numquam,
                aut odit rerum iste quidem eveniet nam quis modi non odio rem voluptate aperiam?</p>
        </div>
        </div>
    );
}
 
export default DetalhesTarefa;