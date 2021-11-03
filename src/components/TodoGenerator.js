import { useState } from "react";
import { useDispatch } from "react-redux";
// import api from "../apis/api";
import { createTodo } from "../apis/todos";

const TodoGenerator = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const updateTodoList = () => {
   createTodo( {text : text, done: false})
      .then(response => dispatch({ type: "todo/add", payload: response.data }));
   
    // dispatch({ type: "todo/add", payload: response.data });
  };

  

  return (
    <div>
      <input
        onChange={(event) => setText(event.target.value)}
        defaultValue={text}
      />
      <button onClick={updateTodoList}>add</button>
    </div>
  );
};
export default TodoGenerator;
