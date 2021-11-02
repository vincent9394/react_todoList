import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoGenerator = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const updateTodoList = () => {
    dispatch({ type: "todo/add", payload: text });
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
