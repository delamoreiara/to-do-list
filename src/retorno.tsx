import React from "react"
import { Tarefa } from "./itens";

export function ListaTarefas({tarefas, removeTarefa, editarLista}){

    return ( 
        <div> 
            <ul id="itens">
                {tarefas.map((tarefa : string, index : string)=><Tarefa tarefa={tarefa} removeTarefa={removeTarefa} 
                editarLista={editarLista} index={index}/>
            )}
            </ul>
        </div>
    )
}