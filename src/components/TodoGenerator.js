import { useState } from "react";
import { useDispatch } from "react-redux";
// import api from "../apis/api";
import { createTodo } from "../apis/todos";
import { Button } from "antd";
import 'antd/dist/antd.css';
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
      <Button type="primary" onClick={updateTodoList}>add</Button>
    </div>
  );
};
export default TodoGenerator;
