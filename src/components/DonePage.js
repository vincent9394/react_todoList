// import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import { useSelector } from "react-redux";
import DoneItem from "./DoneItem";
const DonePage =() =>{
    return(
        <div className="todo">
        <h2>Todo List</h2>
        {TodoGroup1}
        <TodoGenerator />
      </div>
    );
};

const TodoGroup1 = () => {
    const todos = useSelector((state) => state.todoList);
  
    return (
      <div>
        {todos.map((todo) => (
          <DoneItem key={todo.id} todo={todo} />
        ))}
      </div>
    );
  };



export default DonePage;