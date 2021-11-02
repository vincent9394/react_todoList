import {v4 as uuidv4} from 'uuid'

const initState = {todoList: [{id:1, text:"todo 1", done: false},{id:1, text:"todo 1", done: false}]};
const todoReducer = (state = initState, action) => {
    switch (action.type){
        case 'todo/add':
            const todo = {id :uuidv4(), text: action.payload, done:false }
            return {todoList:[...state.todoList, todo]}
        case 'todo/updateStatus':
            const newTodoList = state.todoList.map(item => {
                if (item.id === action.payload){
                    return {...item, done: !item.done}
                }
                return item
            })
            return {todoList:newTodoList}
        case 'todo/delete':
            const filteredList = state.todoList.filter(item => {
                return item.id !== action.payload
            })
            return {todoList : filteredList}
        default:
            return state
    }

}
export default todoReducer;