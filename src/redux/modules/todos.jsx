import uuid from "react-uuid";

// action의 type
const TODOS_ADD = "TODOS/ADD";
const TODOS_REMOVE = "TODOS/REMOVE";
const TODOS_SWITCH = "TODOS/SWITCH";

// action 생성 함수
export const todosAdd = (payload) => {
  return {
    type: TODOS_ADD,
    payload,
  };
};

export const todosRemove = (id) => {
  return {
    type: TODOS_REMOVE,
    payload: { id },
  };
};

export const todosSwitch = (id) => {
  return {
    type: TODOS_SWITCH,
    payload: { id },
  };
};

// 초기 상태값 (state)
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트 공부하기",
      contents: "내용입니다.",
      isDone: false,
    },
  ],
};

// 리듀서 : 'state'에 변화를 일으키는 함수
// (1) state를 action의 type에 따라 변경하는 함수

const todos = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ADD:
      return { todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export default todos;
