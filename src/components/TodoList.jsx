/* eslint-disable react/prop-types */

import { TodoCard } from './TodoCard';

export function TodoList(props) {
  const { todos, selectedTab } = props;
  // const tab = 'All';
  const filteredTodoList =
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Completed'
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filteredTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input === todo.input)}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
}