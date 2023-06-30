import React from "react";
import Tarefa from "./Tarefa";

const Tarefas = ({tarefas, handleTarefaClick, handleApagarTarefa}) => {
    return (
        <>
        {tarefas.map((tarefa) => (
        <Tarefa
        key={tarefa.id}
        tarefa = {tarefa}
        handleTarefaClick = {handleTarefaClick}
        handleApagarTarefa = {handleApagarTarefa}/>
        ))}
        </>
    )
}

export default Tarefas;