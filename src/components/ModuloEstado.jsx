import { useState } from "react";

export function ModuloEstado() {
  const [tarefas, setTarefas] = useState(["Aprender React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div>
      <h2>1. Módulo de Estado (useState)</h2>

      <input
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma tarefa"
      />

      <button onClick={adicionarTarefa}>
        Adicionar
      </button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}