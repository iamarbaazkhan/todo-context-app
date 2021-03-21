import React, { useReducer } from "react";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { TodoContext } from "./context/TodoContext";
import todoReducer from "./context/reduce";
import Todoform from "./Components/Todoform";
import Todos from "./Components/Todos";
const App = () => {
  //same as useState using dispatch
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {/* for styling using container */}
      <Container fluid>
        <h1>Todo App with Context API</h1>
        <Todos />
        <Todoform />
      </Container>
    </TodoContext.Provider>
  );
};

export default App;
