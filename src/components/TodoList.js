import TodoGroup from "./TodoGroup";
import "../style/TodoList.css";
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "../apis/todos";

const TodoList = () => {
  const dispatch = useDispatch()
    useEffect(() => {
    getAllTodos()
        .then( response => dispatch({type:"todo/init", payload:response.data}));
  });

  return (
    <div className="todo">
      <h2>Todo List</h2>
      <TodoGroup />
      <TodoGenerator />
    </div>
  );
};

export default TodoList;
