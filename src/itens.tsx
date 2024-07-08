import React from "react"
import { useState } from "react"


export function Tarefa ({tarefa, removeTarefa, editarLista, index}){
    const [itemEditado, setItemEditado] = useState<boolean>(false)
    const [novaTarefaEditada, setNovaTarefaEditada] = useState<string>(tarefa)

    function iniciarEdicao(){
        setItemEditado(!itemEditado)
        if (itemEditado) {
            editarLista(index, novaTarefaEditada);
          }
    }
    return(
        <div>
         <li> <label></label>
            <input type="checkbox" id="check" /><label htmlFor="check"></label> {(itemEditado ?(<input type="text" id="tarefaEditada"
            onChange={(event) => setNovaTarefaEditada(event.target.value)} />):<label htmlFor="check">{tarefa}</label>)}
            <button id="exc" onClick={()=> removeTarefa(index)}>Excluir</button> 
            <button id="edt"  onClick={()=> iniciarEdicao()}>Editar</button>
         </li>
        </div>
       
    )
}
