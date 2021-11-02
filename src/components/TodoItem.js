import "../style/TodoItem.css";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const newText = todo.done ? <del>{todo.text}</del> : todo.text;
  const dispatch = useDispatch();
  return (
    <div className="box">
      <span
        onClick={() =>
          dispatch({ type: "todo/updateStatus", payload: todo.id })
        }
      >
        {" "}
        {newText}{" "}
      </span>

      <span
        onClick={() => dispatch({ type: "todo/delete", payload: todo.id })}
        className="delete"
      >
        x
      </span>
    </div>
  );
};

export default TodoItem;
