import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import { TAREFA_STATUS } from './Utils/Utils'

function App() {
  const [inputTarefa, setInputTarefa] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const handleAddTask = () => {
    const tarefa = {
      id: Date.now(),
      nome: inputTarefa,
      status: TAREFA_STATUS.AGUARDANDO
    }

    setInputTarefa('');
    setTarefas([...tarefas, tarefa]);
  };

  const alterarStatusTarefa = (tarefa, novoStatus) => {
    const novasTarefas = tarefas.map(t => {
        if (t.id === tarefa.id){
          return {...t, status: novoStatus}
        }else{
          return t
        }
      }
    );
    setTarefas(novasTarefas);
  };

  const deletarTarefa = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  return (
    <div className="app">
      <div className='inner-container'>
        <div className='header'>
          <h1>Lista de Tarefas</h1>
          <p>O aplicativo ideal para registrar suas tarefas diarias</p>
        </div>
        <div className='input-container'>
          <input 
            className='input-task'
            type='text'
            placeholder='Ex: Lavar louça'
            value={inputTarefa}
            onChange={(e) => setInputTarefa(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleAddTask();
              }
            }}
          />
          <button 
            className='button-add'
            onClick={() => handleAddTask()}
          >
            Adicionar
          </button>
        </div>
        <div className='list-tasks'>
          {tarefas.map((tarefa) => {
            return (
              <Card 
                key={tarefa.id} 
                nome={tarefa.nome} 
                status={tarefa.status}
                alterarStatus={(novoStatus) => alterarStatusTarefa(tarefa, novoStatus)}
                deletarTarefa={() => deletarTarefa(tarefa.id)}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
