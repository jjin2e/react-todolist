import React from "react";

function TodoList({ todos, setTodos, isDone }) {
  return (
    <div
      style={{
        border: "1px solid #000",
        padding: "10px",
        margin: "10px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <h2>{isDone ? "DONELIST" : "TODOLIST"}</h2>
      {todos
        .filter((filteredTodo) => {
          return filteredTodo.isDone === isDone;
        })
        .map((todo) => {
          return (
            <div
              key={todo.id}
              style={{
                border: "1px solid #000",
                padding: "15px",
                margin: "0 10px",
              }}
            >
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.contents}</p>
              <button
                onClick={() => {
                  const newTodos = todos.filter(
                    (filteredTodo) => filteredTodo.id !== todo.id
                  );
                  setTodos(newTodos);
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  const newTodos = todos.map((item) => {
                    if (item.id === todo.id) {
                      return { ...item, isDone: !item.isDone };
                    } else {
                      return item;
                    }
                  });
                  setTodos(newTodos);
                }}
              >
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default TodoList;
