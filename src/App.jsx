import { Header } from './components/Header';
import { Tabs } from './components/Tabs';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

//* Hooks
import { useEffect, useState } from 'react';

function App() {
  // const todos = [
  //   { input: 'Hello! Add your first todo!', complete: true },
  //   { input: 'Get the groceries!', complete: false },
  //   { input: 'Learn how to web design', complete: false },
  //   { input: 'Say hi to gran gran', complete: true },
  // ];

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true },
  ]);

  const [selectedTab, setSelectedTab] = useState('Open');

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }];
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    // update/edit
    let newTodoList = [...todos];
    let CompletedTodo = todos[index];
    CompletedTodo['complete'] = true;
    newTodoList[index] = CompletedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    // delete
    let newTodoList = todos.filter((val, valIndex) => {
      return index !== valIndex;
    });
    setTodos(newTodoList);
    handleSaveData(newTodoList)
  }

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }));
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) return;
    let db = JSON.parse(localStorage.getItem('todo-app'));
    setTodos(db.todos);
  }, []);

  return (
    <>
      <Header todos={todos} />
      <Tabs
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        todos={todos}
      />
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompleteTodo={handleCompleteTodo}
        todos={todos}
        selectedTab={selectedTab}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  );
}

export default App;
