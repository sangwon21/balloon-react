import React, { useEffect } from "react";

const Filter = ({ filterList, setShow, value }) => {
  useEffect(() => {
    if (filterList.length) setShow(true);
  }, [filterList.length, setShow, value]);

  return <ul>{filterList}</ul>;
};

export default Filter;
