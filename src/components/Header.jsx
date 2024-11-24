/* eslint-disable react/prop-types */
export function Header({ todos }) {
  const openTasks = (todos.filter((todo) => !todo.complete)).length;
  const isTasksPlural = openTasks !== 1; 
  const taskOrTasks = isTasksPlural ? 'tasks' : 'task';


  return (
    <header>
      <h1 className="text-gradient">
        You have {openTasks} open {taskOrTasks}.
      </h1>
    </header>
  );
}
