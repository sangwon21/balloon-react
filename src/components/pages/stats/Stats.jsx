import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "@modules/page";

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(window.location.pathname));
  }, []);

  return <div></div>;
};

export default Stats;
