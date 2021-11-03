import "../style/TodoItem.css";
import { useDispatch } from "react-redux";
// import api from "../apis/api";
import { deleteTodo, updateTodo } from "../apis/todos";


const TodoItem = ({ todo }) => {
  const newText = todo.done ? <del>{todo.text}</del> : todo.text;
  const dispatch = useDispatch();

    const updateStatus =() => {
        // const url = "/"+todo.id; 
        // console.log("/todos"+url);
        // console.log(todo.done);
            updateTodo({id:todo.id, done: !todo.done})
             .then(response => dispatch({ type: "todo/updateStatus", payload: response.data }));


        
    }

    const deleteItem =() =>{
        deleteTodo(todo.id)
            .then(response => dispatch({ type: "todo/delete", payload: todo.id }))
        
    }

  return (
    <div className="box">
      <span
        onClick={updateStatus}
      >
        {" "}
        {newText}{" "}
      </span>

      <span
        onClick={deleteItem}
        className="delete"
      >
        x
      </span>
    </div>
  );
};

export default TodoItem;
