import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({tarefas, handleTarefaClick, handleApagarTarefa}) => {
    return (
        <div>
        {tarefas.map((tarefa) => (
        <Tarefa
        key={tarefa.id}
        tarefa = {tarefa}
        handleTarefaClick = {handleTarefaClick}
        handleApagarTarefa = {handleApagarTarefa}/>
        ))}
        </div>
    )
}

export default Tarefas;