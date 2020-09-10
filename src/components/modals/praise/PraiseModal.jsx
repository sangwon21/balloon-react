import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { LANGUAGES } from "@constants/constant";

import ModalContainer from "@components/modals/ModalContainer";
import PraiseModalBody from "./PraiseModalBody";

const PraiseModal = ({ isOpen, setOpen }) => {
  const [message, setMessage] = useState("");
  const { register, handleSubmit } = useForm();
  const {
    language: { langData, language },
    receiver: { name, englishName },
  } = useSelector((index) => index);

  const handleModalClose = () => {
    if (message === "") return setOpen(false);
    if (window.confirm(langData["T0001"])) return setOpen(false);
  };

  const handleChange = ({ target: { value } }) => setMessage(value);

  const onSubmit = (data) => console.log(data);

  const receiverName = language === LANGUAGES.KO ? name : englishName ? englishName : name;

  const modalTitleText = langData["L0022"];
  const submitBtnText = langData["L0027"];
  const closeBtnText = langData["L0028"];

  const body = <PraiseModalBody {...{ receiverName, register, langData, handleChange }} />;

  return <ModalContainer {...{ isOpen, body, handleSubmit, handleModalClose, onSubmit, modalTitleText, submitBtnText, closeBtnText }} />;
};

export default PraiseModal;
