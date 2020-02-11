import React, {useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';

const App = props => {
  const [todos, setTodos] = useState(props.todos);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className='app'>
      <header className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </header>
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
