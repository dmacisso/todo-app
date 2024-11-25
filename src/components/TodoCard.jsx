/* eslint-disable react/prop-types */

export function TodoCard({
  todo,
  handleDeleteTodo,
  handleEditTodo,
  todoIndex,
  handleCompleteTodo,
}) {
  // const { todoIndex, todos } = props;
  // const todo = todos[todoIndex];
  // console.log(todo);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => {
            handleCompleteTodo(todoIndex);
          }}
          disabled={todo.complete}
        >
          <h6>Done</h6>
        </button>
        {/* <button
          onClick={() => {
            handleEditTodo(todoIndex);
          }}
        >
          <h6>Edit</h6>
        </button> */}
        <button
          onClick={() => {
            handleDeleteTodo(todoIndex);
          }}
        >
          <h6>Delete</h6>
        </button>
      </div>
    </div>
  );
}
