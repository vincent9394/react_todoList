// import { act } from "react-dom/test-utils";
// import { v4 as uuidv4 } from "uuid";
// import api from "../apis/api";

const initState = { todoList: [] };
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "todo/add":
    //   const todo = { id: uuidv4(), text: action.payload, done: false };
      
      return { todoList: [...state.todoList, action.payload] };

    case "todo/updateStatus":
        // return { todoList: [...state.todoList, action.payload] };
      const newTodoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
      
          return action.payload;
        }
      
        return item;
      });
      return { todoList: newTodoList };

    case "todo/delete":
      const filteredList = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
      return { todoList: filteredList };
    
    case "todo/init":
        return {todoList : action.payload};
      
    default:
      return state;
  }
};
export default todoReducer;
