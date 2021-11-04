import TodoGroup from "./TodoGroup";
import "../style/TodoList.css";
import TodoGenerator from "./TodoGenerator";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllTodos } from "../apis/todos";
import { initTodoList } from "../store/actions/TodoAction";
import { Layout, Menu, Breadcrumb } from "antd";
import { Pagination } from 'antd';
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;
const TodoList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllTodos().then((response) => dispatch(initTodoList(response)));
  });
  const todos = useSelector((state) => state.todoList);

  return (
    <>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">
          {" "}
          <div>
            <p>
              Todo List <TodoGenerator />
            </p>
          </div>
          <div>
            <TodoGroup />
          </div>
        </div>
      </Content>

      
    </>
  );
};

export default TodoList;
