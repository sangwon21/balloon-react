import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGES } from "@constants/constant";
import { sendMessage } from "@utils/util";
import { showToastMessage, updateToastMessage, updateToastType } from "@modules/toast";
import { TOAST_TYPE } from "@constants/constant";

import ModalContainer from "@components/modals/ModalContainer";
import PraiseModalBody from "./PraiseModalBody";

const PraiseModal = ({ isOpen, setOpen, setShowSendEffect }) => {
  const dispatch = useDispatch();

  // Modal Body Props
  const [message, setMessage] = useState("");
  const {
    language: { langData, language },
    receiver,
    login,
  } = useSelector((index) => index);

  const handleChange = ({ target: { value } }) => setMessage(value);
  const receiverName = language === LANGUAGES.KO ? receiver.name : receiver.englishName ? receiver.englishName : receiver.name;

  // Essential Modal Props
  const { register, handleSubmit } = useForm();
  const handleModalClose = () => {
    if (message === "") return setOpen(false);
    if (window.confirm(langData["T0001"])) return setOpen(false);
  };

  const onSubmit = async ({ isSecret, message }) => {
    const MIN_TEXT_LENGTH = 10;
    if (message.length < MIN_TEXT_LENGTH) return alert(langData["L0029"]);
    if (!window.confirm(langData["T0003"].replace("{{name}}", receiver.name))) return;

    const messageData = {
      isSecret: isSecret,
      message: message,
      receiverEmail: receiver.email,
      receiverName: receiver.name,
      receiverPicture: receiver.picture,
      senderEmail: login.email,
      senderName: login.name,
      senderPicture: login.picture,
    };

    const { status } = await sendMessage(messageData);
    if (status === 200) {
      // 메세지 발송 성공 애니메이션, 메세지
      dispatch(updateToastType(TOAST_TYPE.NOMAL));
      dispatch(updateToastMessage(langData["L0030"]));
    } else {
      // 메세지 발송 실패 메세지
      dispatch(updateToastType(TOAST_TYPE.ERROR));
      dispatch(updateToastMessage(langData["T0004"]));
    }
    dispatch(showToastMessage(true));
    setShowSendEffect(true);
    setOpen(false);
  };

  const modalTitleText = langData["L0022"];
  const submitBtnText = langData["L0027"];
  const closeBtnText = langData["L0028"];

  // Modal Body
  const body = <PraiseModalBody {...{ receiverName, register, langData, handleChange }} />;

  return <ModalContainer {...{ isOpen, body, handleSubmit, handleModalClose, onSubmit, modalTitleText, submitBtnText, closeBtnText }} />;
};

export default PraiseModal;
