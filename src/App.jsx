import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoDetails from './pages/TodoDetails';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); 
  const [filter, setFilter] = useState('All'); 

  const addTodoItem = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
      status: 'In Progress', 
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoItem = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeStatus = (id, newStatus) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, status: newStatus } : todo)));
  };

  return (
    <Router>
      <div className="d-flex justify-content-center align-items-center flex-column p-3">
        <Routes>
          {/* >>>>>>>>>>Home Page<<<<<<<<<<<<< */}
          <Route path="/" element={
            <div className="w-100 border p-5 m-auto rounded-3">
              <h1 className="text-center">Todo App</h1>
              <br />
              <TodoForm addTodo={addTodoItem} />
              <br />
              <div className="d-flex justify-content-center mb-3">
                {['All', 'In Progress', 'Completed'].map((status) => (
                  <button
                    key={status}
                    className={`btn me-2 mb-4 ${filter === status ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setFilter(status)}>
                    {status}
                  </button>
                ))}
              </div>
              <TodoList todos={todos} deleteTodo={deleteTodoItem} changeStatus={changeStatus} filter={filter} />
            </div>
          } />
          
          <Route path="/todo/:id" element={<TodoDetails todos={todos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;