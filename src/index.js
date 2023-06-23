import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";
// ^ store를 가져올 때 configStore에서 가져와야함

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider : store를 기반으로 지배권을 행사 = App 컴포넌트가 있는 곳 전체에서 store를 쓸 수 있음
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
