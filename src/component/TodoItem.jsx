import { Link } from 'react-router-dom';

function TodoItem({ todo, deleteTodo, changeStatus }) {
  return (
    <div className="border p-3 rounded-3 d-flex justify-content-between align-items-center">
      <div>
        <Link to={`/todo/${todo.id}`} style={{ textDecoration: 'none', color: 'black' }}>
          <strong>{todo.title}</strong>
        </Link>
        <p>{todo.description}</p>
      </div>

      <div className="d-flex justify-content-end">
        <select className="form-select me-2" value={todo.status} onChange={(e) => changeStatus(todo.id, e.target.value)}>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
      <br></br>
    </div>
  );
}

export default TodoItem;