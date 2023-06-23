import "./App.css";
import uuid from "react-uuid";
import { useState } from "react";
import TodoList from "./components/TodoList";
import { useDispatch, useSelector } from "react-redux";
import { todosAdd } from "./redux/modules/todos";

function App() {
  const todoData = useSelector((state) => {
    return state.todos.todos;
  });

  const dispatch = useDispatch();

  return (
    <>
      <header
        style={{
          backgroundColor: "pink",
          padding: "10px",
        }}
      >
        Header
      </header>
      <main
        style={{
          backgroundColor: "#81cce6",
          padding: "10px",
        }}
      >
        <div>
          <h1>input영역</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();

              const newTodo = {
                id: uuid(),
                title,
                contents,
                isDone: false,
              };
              // setTodos([...todos, newTodo]); 지역 관리소
              dispatch(todosAdd(newTodo));
            }}
          >
            <input
              type="text"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <input
              type="text"
              value={contents}
              onChange={(event) => {
                setContents(event.target.value);
              }}
            />
            <button>등록</button>
          </form>
          <TodoList todos={todos} setTodos={setTodos} isDone={false} />
          <TodoList todos={todos} setTodos={setTodos} isDone={true} />
        </div>
      </main>
      <footer
        style={{
          backgroundColor: "#99c999",
          padding: "10px",
        }}
      >
        Footer
      </footer>
    </>
  );
}

export default App;
