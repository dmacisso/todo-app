/* eslint-disable react/prop-types */
import { useState } from 'react';

export function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="input-container">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputValue) return; //* guard against empty todos.
          handleAddTodo(inputValue);
          setInputValue('');
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          type="text"
          placeholder="Add task"
        />
      </form>
      <button
        onClick={() => {
          if (!inputValue) return; //* guard against empty todos.
          handleAddTodo(inputValue);
          setInputValue('');
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
