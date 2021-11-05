import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { Pagination } from "antd";

const TodoGroup = () => {
  const todos = useSelector((state) => state.todoList);
  
  return (
    <>
      <div>
        {todos
          .sort((num1, num2) => num2.id - num1.id)
          .map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
      </div>
      <Pagination
        defaultCurrent={1}
        total={50}
        pageSizeOptions="1"
        showLessItems
      />
    </>
  );
};

export default TodoGroup;
