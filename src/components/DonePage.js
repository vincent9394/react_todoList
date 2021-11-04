import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const DonePage = () => {
  const doneList = useSelector((state) =>
    state.todoList.filter((item) => item.done)
  );

  return (
    <div className="todo">
      <h2>Done Todo List</h2>
      {doneList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default DonePage;
