import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { FormOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

const ModalItem = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <FormOutlined className="tool" type="primary" onClick={showModal}/>
    
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalItem