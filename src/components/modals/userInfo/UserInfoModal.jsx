import React from "react";
import { useForm } from "react-hook-form";

import ModalContainer from "@components/modals/ModalContainer";
import UserInfoModalBody from "./UserInfoModalBody";

const UserInfoModal = ({ isOpen, setOpen }) => {
  // Modal Body Props

  // Essential Modal Props
  const { register, handleSubmit } = useForm();
  const handleModalClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    setOpen(false);
  };

  const modalTitleText = "연락처";
  const submitBtnText = "확인";

  // Modal Body
  const body = <UserInfoModalBody {...{ register }} />;

  return <ModalContainer {...{ isOpen, body, handleSubmit, handleModalClose, onSubmit, modalTitleText, submitBtnText }} />;
};

export default UserInfoModal;
