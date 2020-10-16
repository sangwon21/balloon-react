import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { LANGUAGES } from "@constants/constant";
import { sendMessage } from "@utils/request";
import { showToastMessage, updateToastMessage } from "@modules/toast";
import { updateBalloonSize, updateMessagesData } from "@modules/login";
import { TOAST_TYPE } from "@constants/constant";
import moment from "moment-timezone";

import ModalContainer from "@components/modals/ModalContainer";
import PraiseModalBody from "./PraiseModalBody";

const PraiseModal = ({ isOpen, setOpen, setShowSendEffect }) => {
  const dispatch = useDispatch();

  // Modal Body Props
  const [message, setMessage] = useState("");
  const {
    language: { langData, language },
    receiver,
    login: { userData },
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
      date: moment().tz("Asia/Seoul").toDate().toISOString(),
      isSecret: isSecret,
      message: message,
      receiverEmail: receiver.email,
      receiverName: receiver.name,
      receiverPicture: receiver.picture,
      senderEmail: userData.email,
      senderName: userData.name,
      senderPicture: userData.picture,
    };

    const { result, balloonSize } = await sendMessage(messageData);
    if (result) {
      // 메세지 발송 성공 애니메이션, 메세지
      dispatch(updateBalloonSize(balloonSize));
      dispatch(updateToastMessage({ message: langData["L0030"] }));
      dispatch(updateMessagesData(messageData));
      setShowSendEffect(true);
    } else {
      // 메세지 발송 실패 메세지
      dispatch(updateToastMessage({ type: TOAST_TYPE.ERROR, message: langData["T0004"] }));
    }
    dispatch(showToastMessage());
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
