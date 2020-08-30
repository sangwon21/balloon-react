import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@modules/page";

const Box = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, []);

  return <div></div>;
};

export default Box;
