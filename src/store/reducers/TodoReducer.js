import { ActionTypes } from "./Constants";

const initState = { todoList: [] };
const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODOLIST_ITEM:
      return { todoList: [...state.todoList, action.payload] };

    case ActionTypes.UPDATE_TODOLIST_ITEM:
      const newTodoList = state.todoList.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      });
      return { todoList: newTodoList };

    case ActionTypes.DELETE_TODOLIST_ITEM:
      const filteredList = state.todoList.filter((item) => {
        return item.id !== action.payload;
      });
      return { todoList: filteredList };

    case ActionTypes.INIT_TODOLIST:
      return { todoList: action.payload };

    default:
      return state;
  }
};
export default todoReducer;
