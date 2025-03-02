import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submitTodo = (e) => {
        e.preventDefault();
        if (title.length === 0) return;
        addTodo(title, description);
        setTitle('');
        setDescription('');
    };

    return (
        <div className="w-100">
            <form onSubmit={submitTodo}>
                <div className="form-group">
                    <label htmlFor="title">Enter Todo Title</label>
                    <input
                        type="text"
                        id="title"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group mt-3">
                    <label htmlFor="description">Enter Todo Description</label>
                    <textarea
                        rows={6}
                        id="description"
                        className="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="form-group mt-3 align-items-center justify-content-center d-flex">
                    <button type="submit" className="btn btn-success">Save</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;
