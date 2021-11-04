import React, { useState } from "react";
import { Modal } from "antd";
import { FormOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import api from "../apis/api.js";

const ModalItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const updateStatus = () => {
    const updated = { ...todo, text: text };

    api
      .put(`/todos/${todo.id}`, updated)
      .then((response) =>
        dispatch({ type: "updateTodo", payload: response.data })
      );

    setIsModalVisible(false);
  };

  return (
    <>
      <FormOutlined className="tool" onClick={showModal} />
      <Modal
        title="Edit Todo"
        visible={isModalVisible}
        onOk={updateStatus}
        onCancel={handleCancel}
      >
        <input
          size="61"
          onChange={(event) => setText(event.target.value.toString())}
          defaultValue={todo.text}
        />
      </Modal>
    </>
  );
};

export default ModalItem;
