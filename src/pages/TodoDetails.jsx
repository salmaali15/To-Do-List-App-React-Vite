import { useParams, useNavigate } from 'react-router-dom';

function TodoDetails({ todos }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find(todo => todo.id.toString() === id);

  if (!todo) {
    return <h2 className="text-center">Todo not found!</h2>;
  }

  return (
    <div className="w-50 border p-5 rounded-3 text-center">
      <h2>{todo.title}</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Description:</strong> {todo.description}</p>
      <p><strong>Status:</strong> {todo.status}</p>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Todos</button>
    </div>
  );
}

export default TodoDetails;