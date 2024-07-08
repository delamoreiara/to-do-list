import  React  from "react";
import { ListaTarefas } from "./retorno";
import { useState } from "react";
export function ToDoList(){

    const [tarefas, setTarefas] = useState<Array<[]>>([]);
    const [novaTarefa, setNovaTarefa] = useState<string> ("");
    

    const adicionarItem = () => {
        const addTarefa = [...tarefas, novaTarefa]
        setTarefas(addTarefa as any);
        setNovaTarefa("");
    }

    const removerItem = (index : number) => {
        const itensExcluidos = [...tarefas]
        itensExcluidos.splice(index, 1);
        setTarefas(itensExcluidos);
    }
     
    const editarLista = (index : number, valor : never ) => {
        const novaTarefaEditada = [...tarefas];
        novaTarefaEditada[index] = valor;
        setTarefas(novaTarefaEditada);
    }
return(
    <body>
        <header><br/><br/><br/><br/><br/><br/></header>

        <div className="conteudo">
            <div className="tarefa">
                <input id="campo"
                value={novaTarefa}
                onChange={(event)=> {setNovaTarefa(event.target.value)}}
                placeholder="Adicione uma tarefa..."
                name="Tarefas"
                />
                <button id="add"
                onClick={adicionarItem}>Adicionar</button>
                
            </div>
            <ListaTarefas tarefas={tarefas} removeTarefa={removerItem} editarLista={editarLista} />
        </div>
    </body>
)  
}