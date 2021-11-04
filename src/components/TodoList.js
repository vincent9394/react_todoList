import TodoGroup from "./TodoGroup";
import "../style/TodoList.css";
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "../apis/todos";
import { initTodoList } from "../store/actions/TodoAction";

const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllTodos().then((response) => dispatch(initTodoList(response)));
  });
  

  return (
    <div className="todo">
      <div className="todoBox">
        <div>
          <p>
            Todo List <TodoGenerator />
          </p>
        </div>
        <div>
          <TodoGroup />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
