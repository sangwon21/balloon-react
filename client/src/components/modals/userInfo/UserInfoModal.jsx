import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import ModalContainer from "@components/modals/ModalContainer";
import UserInfoModalBody from "./UserInfoModalBody";

const UserInfoModal = ({ isOpen, setOpen }) => {
  // Modal Body Props
  const {
    language: { langData, language },
    receiver,
  } = useSelector((index) => index);

  // Essential Modal Props
  const { handleSubmit } = useForm();
  const handleModalClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    setOpen(false);
  };

  const modalTitleText = langData["T0006"];
  const submitBtnText = langData["L0031"];

  // Modal Body
  const body = <UserInfoModalBody {...{ language, receiver }} />;

  return <ModalContainer {...{ isOpen, body, handleSubmit, handleModalClose, onSubmit, modalTitleText, submitBtnText }} />;
};

export default UserInfoModal;
