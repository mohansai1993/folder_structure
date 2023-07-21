import { Modal } from "antd";
import { useState } from "react";

interface PrimaryModalType {
  buttonContent: JSX.Element | string;
  title?: string | null;
  isModalOpen: boolean;
  handleCancel: () => void;
  showModal: () => void;
  children?: any;
}
function PrimaryModal({
  buttonContent,
  title = null,
  isModalOpen,
  handleCancel,
  showModal,
  children,
}: PrimaryModalType) {
  return (
    <div>
      {" "}
      <div onClick={showModal}>{buttonContent}</div>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="p-2 pb-4">{children}</div>
      </Modal>
    </div>
  );
}

export default PrimaryModal;
