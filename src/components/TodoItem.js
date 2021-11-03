import "../style/TodoItem.css";
import { useDispatch } from "react-redux";

import { deleteTodo, updateTodo } from "../apis/todos";
import { CloseOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import ModalItem from "./ModalItem";

const TodoItem = ({ todo }) => {
  const newText = todo.done ? <del>{todo.text}</del> : todo.text;
  const dispatch = useDispatch();

  const updateStatus = () => {
    updateTodo({ id: todo.id, done: !todo.done }).then((response) =>
      dispatch({ type: "todo/updateStatus", payload: response.data })
    );
  };

  const deleteItem = () => {
    deleteTodo(todo.id).then((response) =>
      dispatch({ type: "todo/delete", payload: todo.id })
    );
  };

  return (
    <div className="box">
      <span onClick={updateStatus}> {newText} </span>

      <div>
        <CloseOutlined fill="blue" onClick={deleteItem} className="tool" />
        <ModalItem />
      </div>
    </div>
  );
};

export default TodoItem;
