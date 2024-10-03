import { useState } from 'react';

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1>My To-Do List</h1>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
          padding: 20px;
          border-radius: 8px;
          background-color: #f9f9f9;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .input-wrapper {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        input {
          flex: 1;
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-right: 10px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #0070f3;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease-in;
        }
        button:hover {
          background-color: #005bb5;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border-bottom: 1px solid #ddd;
        }
        .delete-btn {
          color: white;
          background-color: red;
          border: none;
          padding: 5px 10px;
          cursor: pointer;
          border-radius: 4px;
        }
        .delete-btn:hover {
          background-color: darkred;
        }
      `}</style>
    </div>
  );
}
