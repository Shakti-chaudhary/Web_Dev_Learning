import React from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
