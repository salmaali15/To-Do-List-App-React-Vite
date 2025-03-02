import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, changeStatus, filter }) {
  const filteredTodos = todos.filter(todo => filter === 'All' || todo.status === filter);

  return (
    <div className='w-100' >
      <h4 className="text-center">Todo List</h4>
      {filteredTodos.length === 0 ? <p>No todos found!</p> : null}
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} changeStatus={changeStatus} />
      ))}
    </div>
  );
}

export default TodoList;