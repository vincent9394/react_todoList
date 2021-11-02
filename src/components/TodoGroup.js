import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoGroup = () => {
  const todos = useSelector((state) => state.todoList);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoGroup;
