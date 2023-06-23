// 중앙 데이터 관리소(Store)를 설정하는 부분
import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

// rootReducer : reducer를 하나로 모아서 한 개로 만들어놓은 기본 reducer
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
